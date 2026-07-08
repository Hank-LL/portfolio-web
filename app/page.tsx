import Link from "next/link";
import Reveal from "@/components/Reveal";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import { PALETTE } from "@/components/palette";
import { XIcon, GitHubIcon } from "@/components/icons";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export default function Home() {
  // featured: true の作品をカルーセルに表示(なければ先頭5件)
  const featured = PROJECTS.filter((p) => p.featured);
  const picks = featured.length > 0 ? featured : PROJECTS.slice(0, 5);

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="hero" id="top">
        <div className="hero-grid-deco" />
        <p className="hero-eyebrow">PORTFOLIO / {new Date().getFullYear()}</p>
        <div className="hero-head">
          <Link
            className="avatar-link"
            href="/about"
            aria-label="Aboutページへ"
            title="About"
          >
            {SITE.avatarImage ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                className="hero-avatar"
                src={SITE.avatarImage}
                alt={`${SITE.name}のアイコン`}
              />
            ) : (
              <div className="hero-avatar hero-avatar-emoji">
                {SITE.avatarEmoji}
              </div>
            )}
          </Link>
          <h1>
            {SITE.name}
            <span className="cursor" />
          </h1>
        </div>
        <p className="hero-role">{SITE.role}</p>
        <p className="hero-lead">{SITE.lead}</p>
        <div className="hero-links">
          <Link className="btn primary" href="/projects">
            作品を見る
          </Link>
          <a
            href={SITE.github}
            className="icon-circle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubIcon size={21} />
          </a>
          <a
            href={SITE.twitter}
            className="icon-circle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            title="X (Twitter)"
          >
            <XIcon size={19} />
          </a>
        </div>
      </div>

      {/* ================= FEATURED ================= */}
      <section id="featured">
        <Reveal>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            ピックアップ作品(クリックでプロジェクトに飛べます)
          </p>
        </Reveal>
        <Reveal>
          <FeaturedCarousel projects={picks} gradients={PALETTE} />
        </Reveal>
        <Reveal className="more-link">
          <Link className="btn" href="/projects">
            すべての作品を見る →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
