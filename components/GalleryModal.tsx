"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/projects";

// 作品の画像一覧(images があればそれを、なければ image を1枚として扱う)
export function projectImages(p: Project): string[] {
  if (p.images && p.images.length > 0) return p.images;
  return p.image ? [p.image] : [];
}

function PhotosIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 13H8l2.75-3.5 1.96 2.36 2.75-3.54L19 16zM4 7H2v13a2 2 0 0 0 2 2h13v-2H4V7z" />
    </svg>
  );
}

// 🖼 ギャラリーボタン(見た目は ▶ 再生ボタンと揃える)
export function GalleryButton({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`play-btn gallery-btn ${className}`}
      data-tooltip="写真を見る"
      aria-label="写真を見る"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <PhotosIcon />
    </button>
  );
}

// カード表面の左上に出す枚数バッジ(クリックでもギャラリーが開く)
export function PhotoCountBadge({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="photo-count"
      aria-label={`写真${count}枚を見る`}
      title="写真を見る"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <PhotosIcon size={14} />
      {count}
    </button>
  );
}

// 画面中央に重なる写真ギャラリー(← → / スワイプで切替、背景クリック / × / Escで閉じる)
export default function GalleryModal({
  images,
  title,
  onClose,
}: {
  images: string[];
  title: string;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const n = images.length;
  const touchX = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // 背面のスクロールを止める
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  // 選択中のサムネイルが見える位置まで横スクロール
  useEffect(() => {
    const el = thumbsRef.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [index]);

  return createPortal(
    <div
      className="gallery-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title}の写真`}
    >
      <div className="gallery-inner" onClick={(e) => e.stopPropagation()}>
        <button className="video-close" onClick={onClose} aria-label="写真を閉じる">
          ×
        </button>

        <div
          className="gallery-stage"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 40) (dx > 0 ? prev : next)();
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={index}
            className="gallery-main"
            src={images[index]}
            alt={`${title}の写真 ${index + 1}枚目`}
          />
          {n > 1 && (
            <>
              <button className="gallery-arrow left" onClick={prev} aria-label="前の写真">
                ‹
              </button>
              <button className="gallery-arrow right" onClick={next} aria-label="次の写真">
                ›
              </button>
              <span className="gallery-counter">
                {index + 1} / {n}
              </span>
            </>
          )}
        </div>

        {n > 1 && (
          <div className="gallery-thumbs" ref={thumbsRef}>
            {images.map((src, i) => (
              <button
                key={src + i}
                className={`gallery-thumb ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`${i + 1}枚目を表示`}
                aria-current={i === index}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
