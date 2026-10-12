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
    title: "OutLasso",
    description:
      "敵を捕まえて投げる！ヴァンサバ風キャッチ＆シュートゲーム。BitSummit2026 出展作品。担当：敵の挙動と演出、UIの実装",
    tags: ["Unity", "C#"],
    platform: "itch.io",
    date: "2026年5月22日",
    projectUrl: "https://bitsummit-gamejam.itch.io/outlasso",
    video: "https://youtu.be/k0monEFwUR8",
    images: [
      "/images/projects/outlasso-title.webp",
      "/images/projects/outlasso-tutorial.webp",
      "/images/projects/outlasso-battle.webp",
      "/images/projects/outlasso-wanted-boss.webp",
      "/images/projects/outlasso-wanted-duo.webp",
    ],
  },
  {
    title: "aMOEba",
    description:
      "かわいいアメーバのステルスアクションゲーム。BitSummit2025 出展作品",
    tags: ["Unity", "C#"],
    platform: "itch.io",
    date: "2025年7月19日",
    projectUrl: "https://bitsummit-gamejam.itch.io/amoeba",
    video: "https://youtu.be/4fMW4pCophU",
    images: [
      "/images/projects/amoeba-title.jpg",
      "/images/projects/amoeba-eat.png",
      "/images/projects/amoeba-spotted.png",
    ],
  },
  {
    title: "VOID RED",
    description: "記憶と感情を揺さぶる対話型カードゲーム。",
    tags: ["Unity", "C#"],
    platform: "Steam",
    date: "2026年1月",
    projectUrl: "https://store.steampowered.com/app/3997140/VOID_RED/",
    images: [
      "/images/projects/void-red-key-visual.png",
      "/images/projects/void-red-battle.jpg",
      "/images/projects/void-red-choose-card.jpg",
      "/images/projects/void-red-dialogue.jpg",
      "/images/projects/void-red-spirit-card.jpg",
    ],
  },
  {
    title: "ONE MORE ROULETTE",
    description:
      "【ロシアンルーレット風の運勝負ゲーム】リスクが増すほどスコアがアップ！MVPアーキテクチャを採用した実装とDOTweenを用いた演出に挑戦した作品。",
    tags: ["Unity", "C#", "DOTween"],
    platform: "unityroom",
    date: "2026年1月6日",
    projectUrl: "https://unityroom.com/games/one_more_roulette",
    video: "https://youtu.be/Ic0ZauiQSyc",
    images: [
      "/images/projects/one-more-roulette-cylinder.webp",
      "/images/projects/one-more-roulette-reload.gif",
      "/images/projects/one-more-roulette-jackpot.webp",
      "/images/projects/one-more-roulette-dead.webp",
    ],
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
