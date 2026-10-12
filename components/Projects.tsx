"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { PALETTE } from "@/components/palette";

// "2025年10月1日" / "2025-10-01" / "2025/10/1" などを数値に変換(なければ0)
function dateValue(d?: string): number {
  if (!d) return 0;
  // "2026年10月" や "2026年" のように月・日を省略した表記も可(省略分は1日/1月扱い)
  const jp = d.match(/(\d{4})年(?:(\d{1,2})月(?:(\d{1,2})日)?)?/);
  if (jp) return new Date(+jp[1], (+jp[2] || 1) - 1, +jp[3] || 1).getTime();
  const t = Date.parse(d.replace(/\//g, "-"));
  return Number.isNaN(t) ? 0 : t;
}

const SORTS = [
  { key: "new", label: "新しい順" },
  { key: "old", label: "古い順" },
] as const;
type SortKey = (typeof SORTS)[number]["key"];

function SortMenu({
  sort,
  onChange,
}: {
  sort: SortKey;
  onChange: (s: SortKey) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // メニューの外側をクリックしたら閉じる
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const current = SORTS.find((s) => s.key === sort)!;

  return (
    <div className="sort-menu" ref={ref}>
      <button
        type="button"
        className="sort-btn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="sort-btn-texts">
          <strong>{current.label}</strong>
          <small>公開日</small>
        </span>
        <span className={`sort-chev ${open ? "up" : ""}`} aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul className="sort-list" role="listbox" aria-label="並び替え">
          {SORTS.map((s) => (
            <li key={s.key}>
              <button
                type="button"
                role="option"
                aria-selected={s.key === sort}
                className={s.key === sort ? "selected" : ""}
                onClick={() => {
                  onChange(s.key);
                  setOpen(false);
                }}
              >
                <span className="sort-item-texts">
                  <strong>{s.label}</strong>
                  <small>公開日</small>
                </span>
                {s.key === sort && <span aria-hidden="true">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");
  const [sort, setSort] = useState<SortKey>("new");

  const allTags = Array.from(new Set(PROJECTS.flatMap((p) => p.tags)));
  const shown = PROJECTS.filter(
    (p) => active === "all" || p.tags.includes(active)
  ).sort((a, b) =>
    sort === "new"
      ? dateValue(b.date) - dateValue(a.date)
      : dateValue(a.date) - dateValue(b.date)
  );

  return (
    <>
      <div className="projects-toolbar">
        <div className="tag-filter" role="group" aria-label="タグで絞り込み">
          {["all", ...allTags].map((tag) => (
            <button
              key={tag}
              className={`tag ${active === tag ? "active" : ""}`}
              onClick={() => setActive(tag)}
            >
              {tag === "all" ? "すべて" : tag}
            </button>
          ))}
        </div>
        <SortMenu sort={sort} onChange={setSort} />
      </div>

      <div className="projects-grid">
        {shown.map((p, i) => (
          <div
            className="card-appear"
            key={`${active}-${sort}-${p.title}`}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <ProjectCard project={p} gradient={PALETTE[i % PALETTE.length]} />
          </div>
        ))}
      </div>
    </>
  );
}
