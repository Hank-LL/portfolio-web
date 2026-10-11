"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { getPlatform, platformIcon, PlatformBadge } from "@/components/platforms";
import VideoModal, { PlayButton } from "@/components/VideoModal";

export default function ProjectCard({
  project,
  gradient,
}: {
  project: Project;
  gradient: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const plat = getPlatform(project.platform);
  const toggle = () => setFlipped((f) => !f);

  // カーソル位置に応じてカードを傾ける(表でも裏でも動作)
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 9, ry: px * 9 });
  };
  const onMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <>
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${project.title} — クリックで詳細を表示`}
      onClick={toggle}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div
        className="tilt"
        style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      >
        <div className="flip-inner">
          {/* ---------- 表面:ビジュアル ---------- */}
          <div className="flip-front">
            {project.image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                className="flip-bg"
                src={project.image}
                alt={`${project.title}のスクリーンショット`}
              />
            ) : (
              <div className="flip-bg flip-bg-fallback" style={{ background: gradient }}>
                <span className="flip-emoji">{project.emoji ?? "🎮"}</span>
              </div>
            )}
            <div className="flip-front-overlay" />
            <PlatformBadge
              platform={project.platform}
              href={project.projectUrl ?? project.repoUrl}
            />
            <div className={`flip-front-caption ${project.video ? "with-play" : ""}`}>
              <h3>{project.title}</h3>
              {project.platform && <p>{project.platform}</p>}
            </div>
            {project.video && (
              <PlayButton className="on-front" onClick={() => setVideoOpen(true)} />
            )}
          </div>

          {/* ---------- 裏面:詳細(表の画像がうっすら透ける) ---------- */}
          <div className="flip-back">
            {project.image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img className="back-bg" src={project.image} alt="" aria-hidden="true" />
            ) : (
              <div className="back-bg" style={{ background: gradient }} />
            )}
            <div className="back-dim" />

            <div className="flip-back-content">
              <div className="flip-back-head">
                <span
                  className="plat-square"
                  style={{ background: plat.gradient ?? plat.color }}
                >
                  {platformIcon(plat, 20)}
                </span>
                <div className="flip-back-titles">
                  <h3>{project.title}</h3>
                  {project.platform && (
                    <span className="plat-label">{project.platform}</span>
                  )}
                </div>
                {project.date && <span className="flip-date">{project.date}</span>}
              </div>

              <p className="flip-desc">{project.description}</p>

              <div className="card-tags">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: plat.gradient ?? plat.color,
                      color: plat.fg ?? "#fff",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flip-divider" />

              <div className="card-links" onClick={(e) => e.stopPropagation()}>
                {project.video && (
                  <PlayButton className="on-back" onClick={() => setVideoOpen(true)} />
                )}
                {project.projectUrl ? (
                  <>
                    <a
                      className="back-btn"
                      style={{
                        background: plat.gradient ?? plat.color,
                        color: plat.fg ?? "#fff",
                      }}
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ↗ プロジェクトを見る
                    </a>
                    {project.repoUrl && (
                      <a
                        className="back-btn ghost"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </>
                ) : (
                  project.repoUrl && (
                    <a
                      className="back-btn"
                      style={{
                        background:
                          getPlatform("GitHub").gradient ??
                          getPlatform("GitHub").color,
                      }}
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ↗ GitHubで見る
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* モーダルはカードの外に置く(ポータル内のクリックがカードの裏返しに伝わらないように) */}
    {videoOpen && project.video && (
      <VideoModal
        src={project.video}
        title={project.title}
        onClose={() => setVideoOpen(false)}
      />
    )}
    </>
  );
}
