import IWSF_BACK_IMAGE from "@/assets/imgs/business-cards/IWSF2026/business-card-back.png";
import IWSF_FRONT_IMAGE from "@/assets/imgs/business-cards/IWSF2026/business-card-front.png";
import ACT_3_BACK_IMAGE from "@/assets/imgs/business-cards/ML10th-Act3/business-card-back.png";
import ACT_3_FRONT_IMAGE from "@/assets/imgs/business-cards/ML10th-Act3/business-card-front.png";
import ACT_4_BACK_IMAGE from "@/assets/imgs/business-cards/ML10th-Act4/business-card-back.png";
import ACT_4_FRONT_IMAGE from "@/assets/imgs/business-cards/ML10th-Act4/business-card-front.png";
import GAKUEN_ICON_IMAGE from "@/assets/imgs/game-icons/Gakuen.png";
import MILLION_LIVE_THEATER_DAYS_ICON_IMAGE from "@/assets/imgs/game-icons/MILLION-LIVE!_THEATER-DAYS.png";
import type { Brand } from "@/types/Brand";
import type { BusinessCardInfo } from "@/types/BusinessCard";
import type { GameId } from "@/types/GameId";
import type { Music } from "@/types/Music";
import type { ProduceIdol } from "@/types/ProduceIdol";

export const P_NAME: string = "Yu";

export const BUSINESS_CARD_LIST: BusinessCardInfo[] = [
  {
    note: "IWSF2026",
    businessCardFrontFaceImageSrc: IWSF_FRONT_IMAGE,
    businessCardBackFaceImageSrc: IWSF_BACK_IMAGE,
  },
  {
    note: "Act-4",
    businessCardFrontFaceImageSrc: ACT_4_FRONT_IMAGE,
    businessCardBackFaceImageSrc: ACT_4_BACK_IMAGE,
  },
  {
    note: "Act-3",
    businessCardFrontFaceImageSrc: ACT_3_FRONT_IMAGE,
    businessCardBackFaceImageSrc: ACT_3_BACK_IMAGE,
  },
];

/** 各ブランドの色定義 */
export const BRAND_COLOR: Record<Brand, string> = {
  AS: "#f34f6d",
  CG: "#2681c8",
  ML: "#ffc30b",
  SM: "#0fbe94",
  SC: "#8dbbff",
  Gk: "#f39800",
};

export const GAME_ID_LIST: GameId[] = [
  {
    title: "アイドルマスター ミリオンライブ！ シアターデイズ",
    gameId: "GGWKBCQ6",
    icon: MILLION_LIVE_THEATER_DAYS_ICON_IMAGE,
    brand: "ML",
  },
  {
    title: "学園アイドルマスター",
    gameId: "NJYJ4D4Q",
    icon: GAKUEN_ICON_IMAGE,
    brand: "Gk",
  },
];

export const LIKE_MUSIC_LIST: Music[] = [
  // AS
  {
    title: "Light Year Song",
    artist: "高槻やよい, 菊地真, 双海亜美, 双海真美, 我那覇響",
    brand: "AS",
  },
  // CG
  {
    title: "Joker",
    artist: "松永涼, 大和亜季, 中野有香, 姫川友紀, 前川みく",
    brand: "CG",
  },
  {
    title: "Fin[e]～美しき終焉",
    artist: "一ノ瀬志希, 黒埼ちとせ",
    brand: "CG",
  },
  // ML
  {
    title: "dear...",
    artist: "馬場このみ",
    brand: "ML",
  },
  {
    title: "水中キャンディ",
    artist: "馬場このみ",
    brand: "ML",
  },
  {
    title: "Decided",
    artist: "徳川まつり×馬場このみ",
    brand: "ML",
  },
  {
    title: "catch my feeling",
    artist: "MILLIONSTARS Team4th",
    brand: "ML",
  },
  {
    title: "花ざかりWeekend✿",
    artist: "4 Luxury",
    brand: "ML",
  },
  // SM
  {
    title: "Sign of Hope",
    artist: "Altessimo",
    brand: "SM",
  },
  {
    title: "mermaid fermata",
    artist: "Altessimo",
    brand: "SM",
  },
  {
    title: "Stillness≒Movement",
    artist: "神速一魂",
    brand: "SM",
  },
  {
    title: "喜怒哀楽万国共通-Burn it up!-",
    artist: "神速一魂",
    brand: "SM",
  },
  {
    title: "タソガレドキ、Bluesy",
    artist: "神速一魂",
    brand: "SM",
  },
  {
    title: "CALLING",
    artist: "神速一魂",
    brand: "SM",
  },
  {
    title: "Resonate Blessing",
    artist: "都築圭",
    brand: "SM",
  },
  {
    title: "熱情! Burning Voltage",
    artist: "紅井朱雀",
    brand: "SM",
  },
  {
    title: "Moon Shape/明鏡止水",
    artist: "黒野玄武",
    brand: "SM",
  },
  {
    title: "奇想天外狂詩曲-FANTASTIC RHAPSODY-",
    artist: "柏木翼, 都築圭, 神谷幸広, 兜大吾",
    brand: "SM",
  },
  {
    title: "OLYMPUS GOD STARS",
    artist: "御手洗翔太, 黒野玄武, 橘志狼, 円城寺道流",
    brand: "SM",
  },
  {
    title: "Take a StuMp!",
    artist: "315 ALLSTARS",
    brand: "SM",
  },
  // SC
  {
    title: "Karma",
    artist: "Fumage",
    brand: "SC",
  },
  {
    title: "Naraku",
    artist: "Fumage",
    brand: "SC",
  },
  // Gk
  {
    title: "MY STAGE",
    artist: "雨夜燕",
    brand: "Gk",
  },
];

export const PRODUCE_IDOL_LIST: ProduceIdol[] = [
  {
    name: "馬場このみ",
    brand: "ML",
  },
  {
    name: "都築圭",
    brand: "SM",
  },
  {
    name: "赤井朱雀",
    brand: "SM",
  },
  {
    name: "黒野玄武",
    brand: "SM",
  },
  {
    name: "雨夜燕",
    brand: "Gk",
  },
];

/** XのID */
export const X_ID = "yuki63050198";
