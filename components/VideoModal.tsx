"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

// YouTubeのURLなら埋め込み用URLに変換(通常動画 / youtu.be / shorts に対応)
function toYouTubeEmbed(src: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([\w-]+)/,
    /youtu\.be\/([\w-]+)/,
    /youtube\.com\/shorts\/([\w-]+)/,
    /youtube\.com\/embed\/([\w-]+)/,
  ];
  for (const re of patterns) {
    const m = src.match(re);
    if (m) return `https://www.youtube.com/embed/${m[1]}?autoplay=1`;
  }
  return null;
}

// ▶ 再生ボタン(ホバーで波紋+「動画を再生」の吹き出し)
export function PlayButton({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`play-btn ${className}`}
      data-tooltip="動画を再生"
      aria-label="動画を再生"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.5-6.86a1.04 1.04 0 0 0 0-1.76L9.56 4.26A1.04 1.04 0 0 0 8 5.14z" />
      </svg>
    </button>
  );
}

// 画面中央に重なる動画プレイヤー(背景クリック / × / Escで閉じる)
export default function VideoModal({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // 背面のスクロールを止める
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const yt = toYouTubeEmbed(src);

  return createPortal(
    <div
      className="video-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title}の動画`}
    >
      <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
        <button className="video-close" onClick={onClose} aria-label="動画を閉じる">
          ×
        </button>
        {yt ? (
          <iframe
            src={yt}
            title={`${title}の動画`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          /* eslint-disable-next-line jsx-a11y/media-has-caption */
          <video src={src} controls autoPlay playsInline />
        )}
      </div>
    </div>,
    document.body
  );
}
