import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";
import { SKILLS } from "@/data/projects";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="page">
      <Reveal>
        <h2 className="section-title">About</h2>
        <p className="section-sub">自己紹介と経歴</p>
      </Reveal>

      {/* ---- プロフィール ---- */}
      <Reveal>
        <div className="profile">
          {SITE.avatarImage ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img className="avatar" src={SITE.avatarImage} alt={`${SITE.name}のアイコン`} />
          ) : (
            <div className="avatar avatar-emoji">{SITE.avatarEmoji}</div>
          )}
          <div className="profile-body">
            <h3 className="profile-name">{SITE.name}</h3>
            <p className="profile-role">{SITE.role}</p>
            <div className="profile-links">
              <a className="btn" href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn" href={SITE.twitter} target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="about-text">
          {SITE.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <p>
            <strong>趣味:</strong> {SITE.hobbies}
          </p>
        </div>
      </Reveal>

      {/* ---- スキル ---- */}
      <Reveal>
        <h2 className="section-title sub-heading">Skills</h2>
      </Reveal>
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <Reveal className="skill" key={s.name}>
            <h3>{s.name}</h3>
            <p>{s.detail}</p>
          </Reveal>
        ))}
      </div>

      {/* ---- 経歴 ---- */}
      <Reveal>
        <h2 className="section-title sub-heading">History</h2>
      </Reveal>
      <div className="timeline">
        {SITE.history.map((h) => (
          <Reveal className="timeline-item" key={`${h.date}-${h.text}`}>
            <span className="timeline-date">{h.date}</span>
            <p>{h.text}</p>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
