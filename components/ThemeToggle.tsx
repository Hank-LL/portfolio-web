"use client";

import { useRef } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

type Mode = "light" | "dark";

// 切替演出の種類:
// "smooth" = 演出なし(全体が短くクロスフェード), "circle" = ボタンから広がる円形ワイプ
const EFFECT: "circle" | "smooth" = "smooth";

// View Transitions API は型定義がまだ無い環境があるため自前で補う
type DocWithVT = Document & {
  startViewTransition?: (cb: () => void) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
};

/* ========== 円形ワイプ (View Transitions API) ========== */

function runCircle(btn: HTMLElement, applyTheme: () => void, done: () => void) {
  const doc = document as DocWithVT;
  if (!doc.startViewTransition) {
    // 非対応ブラウザ(Firefoxなど)はスムーズ版で代替
    runSmooth(applyTheme, done);
    return;
  }
  const root = document.documentElement;
  // このクラスが付いている間だけデフォルトのクロスフェードを無効化
  root.classList.add("vt-circle");
  // 切替中はフリップカードの裏面が誤描画される環境があるため隠す
  root.classList.add("vt-guard");

  const rect = btn.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const r = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const transition = doc.startViewTransition(() => {
    flushSync(applyTheme);
  });
  transition.ready.then(() => {
    root.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${r}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 650,
        easing: "cubic-bezier(0.3, 0.8, 0.3, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  });
  transition.finished.finally(() => {
    root.classList.remove("vt-circle");
    root.classList.remove("vt-guard");
    done();
  });
}

/* ========== 演出なし(スムーズなクロスフェード) ========== */

function runSmooth(applyTheme: () => void, done: () => void) {
  const doc = document as DocWithVT;
  if (doc.startViewTransition) {
    const root = document.documentElement;
    // 切替中はフリップカードの裏面が誤描画される環境があるため隠す
    root.classList.add("vt-guard");
    // View Transitions のデフォルト = 画面全体の短いクロスフェード
    const transition = doc.startViewTransition(() => {
      flushSync(applyTheme);
    });
    transition.finished.finally(() => {
      root.classList.remove("vt-guard");
      done();
    });
    return;
  }
  // 非対応ブラウザ: 全要素の色をCSS transitionで短くフェードさせる
  const root = document.documentElement;
  root.classList.add("theme-fade");
  applyTheme();
  window.setTimeout(() => {
    root.classList.remove("theme-fade");
    done();
  }, 400);
}

/* ========== トグルボタン本体 ========== */

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);
  const animating = useRef(false);

  const toggle = () => {
    const next: Mode = resolvedTheme === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setTheme(next);
      return;
    }
    if (animating.current) return;
    animating.current = true;

    const applyTheme = () => setTheme(next);
    const done = () => {
      animating.current = false;
    };
    if (EFFECT === "circle" && btnRef.current) {
      runCircle(btnRef.current, applyTheme, done);
    } else {
      runSmooth(applyTheme, done);
    }
  };

  // アイコンの見た目は CSS([data-theme])で切り替えるため、
  // マウント前でも hydration ずれが起きない
  return (
    <button
      ref={btnRef}
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="テーマを切り替える"
      title="テーマを切り替える"
    >
      <svg
        className="sun-moon"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
      >
        <mask id="moon-cut">
          <rect x="0" y="0" width="24" height="24" fill="#fff" />
          {/* この黒丸が太陽に重なると月(三日月)になる */}
          <circle className="moon-hole" cx="26" cy="6" r="7" fill="#000" />
        </mask>
        <circle
          className="sun-core"
          cx="12"
          cy="12"
          r="6"
          fill="currentColor"
          mask="url(#moon-cut)"
        />
        <g
          className="sun-beams"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="12" y1="1.5" x2="12" y2="3.5" />
          <line x1="12" y1="20.5" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="3.5" y2="12" />
          <line x1="20.5" y1="12" x2="22.5" y2="12" />
          <line x1="4.6" y1="4.6" x2="6" y2="6" />
          <line x1="18" y1="18" x2="19.4" y2="19.4" />
          <line x1="4.6" y1="19.4" x2="6" y2="18" />
          <line x1="18" y1="6" x2="19.4" y2="4.6" />
        </g>
      </svg>
    </button>
  );
}
