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
    featured: true,
  },
  {
    title: "音声認識による配膳ロボットアームシステム",
    description:
      "AMD Robotics Hackathon 2025 で開発した「Sushi Master」。模倣学習でメニューごとのAI行動モデルを開発し、SO-101ロボットアームの配膳動作はそのモデルが実行。音声注文もAIで解釈して寿司を選ぶ。",
    tags: ["AI開発", "AI組込み", "Python", "LeRobot", "Hugging Face"],
    platform: "Web",
    date: "2025年12月7日",
    projectUrl: "https://moriokalab.com/news/1030",
    repoUrl: "https://github.com/Hank-LL/AMD_Robotics_Hackathon_2025_Team27",
    video: "https://youtu.be/dbQwMPikCeI",
    images: [
      "/images/projects/sushi-master-serving.webp",
      "/images/projects/sushi-master-voice-order.webp",
      "/images/projects/sushi-master-tea.webp",
    ],
    featured: true,
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
    title: "Yoripo",
    description:
      "気分と寄り道できる時間から、気分に合う場所を通る遠回りルートを提案する寄り道案内アプリ。ハッカソン作品。担当：ルート提示アルゴリズムの設計と実装",
    tags: ["TypeScript", "Next.js", "AI組込み"],
    date: "2026年9月3日",
    video: "https://youtube.com/shorts/2oMM5XnFaG4",
    images: [
      "/images/projects/yoripo-promo.png",
      "/images/projects/yoripo-algorithm.png",
      "/images/projects/yoripo-route-scoring.png",
      "/images/projects/yoripo-login.png",
      "/images/projects/yoripo-destination.png",
      "/images/projects/yoripo-mood.png",
      "/images/projects/yoripo-place.png",
      "/images/projects/yoripo-duration.png",
      "/images/projects/yoripo-guide.png",
    ],
    featured: true,
  },
  {
    title: "Kaggle PTCG AI Battle Challenge",
    description:
      "Kaggle「PTCG AIバトルチャレンジ」シミュレーション部門で6,807チーム中300位、銀メダルを獲得。模倣学習・強化学習・ヒューリスティックのそれぞれの手法でカードゲームの対戦AIを開発。",
    tags: ["AI開発", "Python"],
    platform: "GitHub",
    date: "2026年8月",
    repoUrl: "https://github.com/Hank-LL/ptcg-strategy-code",
    image: "/images/projects/ptcg-kaggle-certificate.png",
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
    featured: true,
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
    featured: true,
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
];

// ▼ スキルもここに追記するだけ(Aboutページに表示されます)
export const SKILLS = [
  { name: "Unity / C#", detail: "ゲーム制作やAIモデル開発で使用" },
  { name: "TypeScript / Next.js", detail: "Webアプリの個人開発・チーム開発" },
  { name: "Git / GitHub", detail: "チーム開発でのプロジェクト運用" },
  { name: "Hugging Face", detail: "フィジカルAIの行動モデルを共有。" },
  { name: "Python", detail: "機械学習やAIモデル開発に使用" },
];
