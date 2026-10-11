"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import { PlatformBadge } from "@/components/platforms";
import { projectImages } from "@/components/GalleryModal";

export default function FeaturedCarousel({
  projects,
  gradients,
}: {
  projects: Project[];
  gradients: string[];
}) {
  const n = projects.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // OSの「視差効果を減らす」設定では自動再生しない
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // 4.5秒ごとに自動で次のスライドへ(ホバー中は停止)
  useEffect(() => {
    if (paused || reducedMotion || n <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % n), 4500);
    return () => clearInterval(id);
  }, [paused, reducedMotion, n]);

  const prev = () => setIndex((i) => (i - 1 + n) % n);
  const next = () => setIndex((i) => (i + 1) % n);

  if (n === 0) return null;

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((p, i) => {
            const href = p.projectUrl ?? p.repoUrl;
            const cover = projectImages(p)[0];
            const inner = (
              <>
                {cover ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    className="carousel-bg"
                    src={cover}
                    alt={`${p.title}のスクリーンショット`}
                  />
                ) : (
                  <div
                    className="carousel-bg carousel-bg-fallback"
                    style={{ background: gradients[i % gradients.length] }}
                  >
                    <span>{p.emoji ?? "🎮"}</span>
                  </div>
                )}
                <div className="carousel-overlay" />
                <PlatformBadge platform={p.platform} size={40} />
                <div className="carousel-caption">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </>
            );
            return href ? (
              <a
                className="carousel-slide"
                key={p.title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={i === index ? 0 : -1}
                aria-hidden={i !== index}
              >
                {inner}
              </a>
            ) : (
              <div className="carousel-slide" key={p.title} aria-hidden={i !== index}>
                {inner}
              </div>
            );
          })}
        </div>

        {n > 1 && (
          <>
            <button className="carousel-arrow left" onClick={prev} aria-label="前の作品">
              ‹
            </button>
            <button className="carousel-arrow right" onClick={next} aria-label="次の作品">
              ›
            </button>
            <div className="carousel-dots" role="tablist" aria-label="スライド選択">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  className={`carousel-dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`${i + 1}枚目: ${p.title}`}
                  aria-selected={i === index}
                  role="tab"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
