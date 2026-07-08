// =====================================================================
// 公開先プラットフォームのアイコンとブランドカラーの定義。
// data/projects.ts の platform の文字列(例: "Steam", "unityroom")から
// 自動でここのアイコン・色が使われます。追加したい場合はDEFSに追記。
// GitHub / Steam は公式ロゴ、それ以外はモチーフの簡易アイコンです。
// =====================================================================

"use client";

import { GitHubIcon } from "@/components/icons";

function SteamIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
    </svg>
  );
}

// unityroom: 公式アイコンの「開いたドア」を再現
function DoorIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="4.4" y="4.3" width="4" height="15.4" rx="1.9" />
      <path
        fillRule="evenodd"
        d="M11.6 1.62c-.5-.15-1 .22-1 .74v19.28c0 .52.5.89 1 .74l7.4-2.24c.4-.12.66-.48.66-.9V4.76c0-.42-.27-.78-.66-.9L11.6 1.62zm2.66 11.7a1.28 1.28 0 1 0 0-2.56 1.28 1.28 0 0 0 0 2.56z"
      />
    </svg>
  );
}

// itch.io: ゲームパッドのモチーフ
function GamepadIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.4 6h9.2a5.4 5.4 0 0 1 5.36 6.06l-.5 4.1a2.85 2.85 0 0 1-5.03 1.5L14.6 15.5H9.4l-1.83 2.16a2.85 2.85 0 0 1-5.03-1.5l-.5-4.1A5.4 5.4 0 0 1 7.4 6zM6.8 9v1.7H5.2v1.6h1.6V14h1.6v-1.7H10v-1.6H8.4V9H6.8zm8.2.6a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zm2.6 2.6a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
    </svg>
  );
}

// Booth: ショップバッグのモチーフ
function BagIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M8 8a4 4 0 1 1 8 0h2.6a1 1 0 0 1 1 .93l.9 11A1 1 0 0 1 19.5 21h-15a1 1 0 0 1-1-1.07l.9-11A1 1 0 0 1 5.4 8H8zm2 0a2 2 0 1 1 4 0h-4z"
      />
    </svg>
  );
}

// npm: パッケージ(箱)のモチーフ
function BoxIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 3 6.5v11L12 22l9-4.5v-11L12 2zm0 2.2 6.2 3.1L12 10.4 5.8 7.3 12 4.2zM5 9l6 3v6.7l-6-3V9zm14 6.7-6 3V12l6-3v6.7z" />
    </svg>
  );
}

// Web(デフォルト): 地球のモチーフ
function GlobeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.93 9h-3.02a15.7 15.7 0 0 0-1.2-5.14A8.02 8.02 0 0 1 19.93 11zM12 4.06c.9 1.2 1.7 3.3 1.9 6.94h-3.8c.2-3.63 1-5.74 1.9-6.94zM8.29 5.86A15.7 15.7 0 0 0 7.09 11H4.07a8.02 8.02 0 0 1 4.22-5.14zM4.07 13h3.02c.14 1.9.55 3.66 1.2 5.14A8.02 8.02 0 0 1 4.07 13zM12 19.94c-.9-1.2-1.7-3.3-1.9-6.94h3.8c-.2 3.63-1 5.74-1.9 6.94zm3.71-1.8a15.7 15.7 0 0 0 1.2-5.14h3.02a8.02 8.02 0 0 1-4.22 5.14z" />
    </svg>
  );
}

export type PlatformDef = {
  color: string; // ブランドカラー(バッジ・タグ・ボタンに使われる)
  fg?: string;   // タグ・ボタンの文字色(省略時は白。明るい色の背景用)
  icon: (size: number) => React.ReactNode;
  img?: string; // 公式ロゴ画像を使う場合はURLかパスを指定(SVGより優先されます)
  // 例: img: "/icons/unityroom.png"(public/icons/ に置く)
};

const DEFS: { match: RegExp; def: PlatformDef }[] = [
  { match: /github/i, def: { color: "#333a42", icon: (s) => <GitHubIcon size={s} /> } },
  { match: /steam/i, def: { color: "#2a475e", icon: (s) => <SteamIcon size={s} /> } },
  { match: /itch/i, def: { color: "#fa5c5c", icon: (s) => <GamepadIcon size={s} />, img: "https://cdn.simpleicons.org/itchdotio/white" } },
  { match: /unityroom/i, def: { color: "#2f80ed", icon: (s) => <DoorIcon size={s} /> } },
  { match: /booth/i, def: { color: "#fc4d50", icon: (s) => <BagIcon size={s} /> } },
  { match: /npm/i, def: { color: "#cb3837", icon: (s) => <BoxIcon size={s} /> } },
  { match: /hugging/i, def: { color: "#FFD21E", fg: "#1f2023", icon: (s) => <GlobeIcon size={s} />, img: "https://cdn.simpleicons.org/huggingface/black" } },
];

const DEFAULT_DEF: PlatformDef = {
  color: "#8b7cff",
  icon: (s) => <GlobeIcon size={s} />,
};

export function getPlatform(platform?: string): PlatformDef {
  if (!platform) return DEFAULT_DEF;
  return DEFS.find((d) => d.match.test(platform))?.def ?? DEFAULT_DEF;
}

// アイコンの描画(公式ロゴ画像が指定されていればそちらを優先)
export function platformIcon(p: PlatformDef, size: number) {
  if (p.img) {
    /* eslint-disable-next-line @next/next/no-img-element */
    return <img src={p.img} alt="" width={size} height={size} style={{ display: "block" }} />;
  }
  return p.icon(size);
}

// カード右上などに置く角丸四角のプラットフォームバッジ。
// href を渡すとリンクになり、クリックでプロジェクトに飛べます。
export function PlatformBadge({
  platform,
  size = 38,
  href,
}: {
  platform?: string;
  size?: number;
  href?: string;
}) {
  if (!platform) return null;
  const p = getPlatform(platform);
  const style = { background: p.color, width: size, height: size };
  const inner = platformIcon(p, Math.round(size * 0.55));

  if (href) {
    return (
      <a
        className="badge-square badge-link"
        style={style}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={`${platform}で見る`}
        aria-label={`${platform}で見る`}
        onClick={(e) => e.stopPropagation()}
      >
        {inner}
      </a>
    );
  }
  return (
    <span className="badge-square" style={style} title={platform} aria-label={platform}>
      {inner}
    </span>
  );
}
