import type { Metadata } from "next";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="page projects-page">
      <Reveal>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          これまでの制作物です。タグで絞り込み、カードをクリックすると詳細とリンクが表示されます。
        </p>
      </Reveal>
      <Projects />
    </section>
  );
}
