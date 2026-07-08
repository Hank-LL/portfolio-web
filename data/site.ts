// ▼ 自己紹介まわりはここを編集
export const SITE = {
  name: "YOUR NAME",
  logo: { main: "yourname", accent: ".dev" }, // ヘッダー左上のロゴ表記
  role: "ゲームクリエイター / ソフトウェアエンジニア",
  lead: "ここに自己紹介文を書きます。何を作るのが好きか、どんな価値を届けたいかを2〜3文でまとめると読みやすくなります。",
  email: "you@example.com",
  github: "https://github.com/yourname",
  twitter: "https://x.com/yourname",
  contactMessage: "お仕事のご依頼やご質問がございましたら、お気軽にお問い合わせください。",

  // ---- Aboutページの内容 ----
  avatarEmoji: "🎮",          // アイコン画像を用意したら avatarImage に置き換え
  avatarImage: "",            // 例: "/images/avatar.png"
  about: [
    "ここに詳しめの自己紹介を書きます。ものづくりを始めたきっかけや、好きなジャンル、大切にしていることなど。",
    "段落を分けたいときは、この配列に文字列を追加するだけです。",
  ],
  hobbies: "ゲーム、ドット絵、散歩など、趣味をここに書きます。",

  // ▼ 経歴(上が新しい順でも古い順でもOK。追記するだけで増えます)
  history: [
    { date: "2026年", text: "○○ゲームジャムで◯◯賞を受賞" },
    { date: "2025年", text: "初めてのゲームをunityroomで公開" },
    { date: "2024年", text: "○○大学 △△学部 入学 / プログラミングを始める" },
  ],
};
