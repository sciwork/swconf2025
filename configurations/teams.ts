import { StaticImageData } from "next/image";

type TeamType = {
  title: string;
  members: MemberProps[];
};

type MemberProps = {
  name: string;
  email?: string;
  image?: StaticImageData;
};

const teams: TeamType[] = [
  {
    title: "Core",
    members: [
      { name: "Chun-Hsu" },
      { name: "Kuan-Hsien" },
      { name: "Yung-Yu" },
    ],
  },
  {
    title: "Finance & Venue",
    members: [
      { name: "Chun-Hsu" },
      { name: "Li-hung" },
      { name: "Vera" },
      { name: "Yung-Yu" },
    ],
  },
  {
    title: "Website",
    members: [
      { name: "Chester" },
      { name: "Wu-Xian" },
      { name: "Steve" },
      { name: "Jie-Yin" },
    ],
  },
  {
    title: "Registration",
    members: [{ name: "Jie-Yin" }],
  },
  {
    title: "Program",
    members: [
      { name: "Chun-Shih" },
      { name: "Han-Xuan" },
      { name: "Po-Chi" },
      { name: "Suci" },
    ],
  },
  {
    title: "Reviewer",
    members: [
      { name: "yyc" },
      { name: "dboy" },
      { name: "khlee" },
      { name: "俊旭" },
      { name: "chester" },
      { name: "suci" },
      { name: "chun shih" },
      { name: "terry" },
      { name: "gene" },
      { name: "zong han" },
      { name: "Steve" },
      { name: "Peter" },
      { name: "石恩" },
    ],
  },
  {
    title: "Promotion",
    members: [
      { name: "Joyce" },
      { name: "Jenny" },
      { name: "Zhong-Han" },
      { name: "Artin" },
      { name: "Jie-Yin" },
    ],
  },
  {
    title: "Venue (Logistics)",
    members: [
      { name: "Li-Hung" },
      { name: "Terry" },
      { name: "Yu-Fang" },
      { name: "Hao-Ti" },
      { name: "Kun-Xian" },
      { name: "Chun-Li" },
      { name: "暐宣" },
      { name: "En Shih（石恩）" },
    ],
  },
];

export default teams;
