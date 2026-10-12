// =====================================================================
// ▼ 作品を追加するときは、この配列にオブジェクトを1つ追記するだけ ▼
//    追記して git push すれば、Vercelが自動でサイトを更新します。
//    スクリーンショットは public/images/ に置いて image に指定します。
//    複数枚あるときは images: ["/images/a.png", "/images/b.png"] のように並べます。
// =====================================================================

export type Project = {
  title: string;
  description: string;
  tags: string[];       // 使用技術など(タグ絞り込みに使われます)
  platform?: string;    // 公開先の表記(例: "Steam" / "unityroom" / "Web")
  date?: string;        // 公開日など(例: "2025年12月31日")
  emoji?: string;       // 画像がないときに表示するアイコン
  image?: string;       // 例: "/images/starhopper.png"(public/images/ に置く)
  images?: string[];    // 写真を複数枚載せる場合はこちら(1枚目がカードの表紙になります)
  projectUrl?: string;  // 「プロジェクトを見る」で飛ぶURL
  video?: string;       // 紹介動画。"/videos/xxx.mp4"(public/videos/ に置く)またはYouTubeのURL
  repoUrl?: string;     // GitHubリポジトリ(なければ省略)
  featured?: boolean;   // true にするとトップページにも表示されます
};

export const PROJECTS: Project[] = [
  {
    title: "あふれこ",
    description:
      "声優を目指す少女の青春系ノベルゲーム。ミニゲームや選択肢を通して夢を叶えよう。",
    tags: ["Unity", "C#"],
    platform: "unityroom",
    date: "2026年10月",
    projectUrl: "https://unityroom.com/games/afureko",
    images: [
      "/images/projects/afureko-title.webp",
      "/images/projects/afureko-studio.webp",
      "/images/projects/afureko-night-street.webp",
      "/images/projects/afureko-cutin.webp",
      "/images/projects/afureko-studio-teacher.webp",
      "/images/projects/afureko-choice.webp",
    ],
  },
  {
    title: "君が引く手",
    description:
      "Unity1週間ゲームジャム[ひく]参加作品。『手を引く』か『手を引かない』かを選択するだけのマルチエンディングノベルゲーム。実況実績あり！ ",
    tags: ["Unity", "C#"],
    platform: "unityroom",
    date: "2025年8月11日",
    projectUrl: "https://unityroom.com/games/kimigahikute",
    images: [
      "/images/projects/kimigahikute.png",
      "/images/projects/kimigahikute-choice.webp",
      "/images/projects/kimigahikute-locker.webp",
    ],
    featured: true,
  },
  {
    title: "エイリアンバスター",
    description:
      "3Dシューティングゲーム。初めてゲーム開発した作品。開発期間：1ヶ月半",
    tags: ["Unity", "C#"],
    platform: "unityroom",
    date: "2024年4月",
    projectUrl: "https://unityroom.com/games/shooting_ver2",
    video: "https://youtu.be/pqdcRcYF8I4",
    images: [
      "/images/projects/alien-buster-closeup.jpg",
      "/images/projects/alien-buster-title.webp",
      "/images/projects/alien-buster-horde.jpg",
      "/images/projects/alien-buster-battle.jpg",
    ],
  },
  {
    title: "Steam公開サンプル『VOID GARDEN』",
    description:
      "Steamアイコンの表示確認用サンプル。デッキ構築型ローグライクの想定。",
    tags: ["Unity", "C#", "Steam"],
    platform: "Steam",
    date: "2025年12月31日",
    emoji: "🌱",
    projectUrl: "https://store.steampowered.com/",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // 例: YouTubeでもmp4でもOK
    featured: true,
  },
  {
    title: "itch.io公開サンプル『NIGHT LOOP』",
    description:
      "itch.ioアイコンの表示確認用サンプル。ゲームジャム参加作品の想定。",
    tags: ["Godot", "GDScript", "ゲームジャム"],
    platform: "itch.io",
    date: "2025年7月17日",
    emoji: "🌙",
    projectUrl: "https://itch.io/",
    featured: true,
  },
  {
    title: "BOOTH頒布サンプル『ドット絵素材集』",
    description:
      "Boothアイコンの表示確認用サンプル。素材集やツールの頒布の想定。",
    tags: ["ドット絵", "素材"],
    platform: "BOOTH",
    date: "2025年5月5日",
    emoji: "🎨",
    projectUrl: "https://booth.pm/",
  },
  {
    title: "HuggingFace公開サンプル『pixel-gen』",
    description:
      "HuggingFaceアイコンの表示確認用サンプル。ドット絵生成モデルのデモの想定。",
    tags: ["Python", "PyTorch", "機械学習"],
    platform: "Hugging Face",
    date: "2025年4月10日",
    emoji: "🤗",
    projectUrl: "https://huggingface.co/",
  },
  {
    title: "GitHub公開サンプル『img-min』",
    description:
      "GitHubアイコンの表示確認用サンプル。画像をまとめて圧縮するCLIツールの想定。",
    tags: ["Node.js", "TypeScript", "CLI"],
    platform: "GitHub",
    date: "2025年3月2日",
    emoji: "🛠️",
    repoUrl: "https://github.com/",
  },
];

// ▼ スキルもここに追記するだけ(Aboutページに表示されます)
export const SKILLS = [
  { name: "Unity / C#", detail: "ゲーム制作やAIモデル開発で使用" },
  { name: "TypeScript / Next.js", detail: "Webアプリの個人開発・チーム開発" },
  { name: "Git / GitHub", detail: "チーム開発でのプロジェクト運用" },
  { name: "Hugging Face", detail: "フィジカルAIの行動モデルを共有。" },
  { name: "Python", detail: "機械学習やAIモデル開発に使用" },
];
