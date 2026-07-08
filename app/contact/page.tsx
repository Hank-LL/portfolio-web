import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";
import { XIcon, GitHubIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Contact" };

// URLの末尾から @ハンドル名 を作る(例: https://x.com/yourname → @yourname)
function handleOf(url: string) {
  const last = url.split("/").filter(Boolean).pop();
  return last ? `@${last}` : url;
}

export default function ContactPage() {
  return (
    <section className="page contact-page">
      <Reveal>
        <h2 className="section-title">Contact</h2>
        <p className="section-sub">{SITE.contactMessage}</p>
      </Reveal>

      <div className="contact-list">
        <Reveal>
          <a
            className="contact-card"
            href={SITE.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon x">
              <XIcon size={22} />
            </span>
            <span className="contact-texts">
              <span className="contact-label">X (Twitter)</span>
              <span className="contact-value">{handleOf(SITE.twitter)}</span>
            </span>
          </a>
        </Reveal>

        <Reveal>
          <a
            className="contact-card"
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon github">
              <GitHubIcon size={22} />
            </span>
            <span className="contact-texts">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">{handleOf(SITE.github)}</span>
            </span>
          </a>
        </Reveal>

        <Reveal>
          <a className="contact-card" href={`mailto:${SITE.email}`}>
            <span className="contact-icon mail">
              <MailIcon size={22} />
            </span>
            <span className="contact-texts">
              <span className="contact-label">Email</span>
              <span className="contact-value">{SITE.email}</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
