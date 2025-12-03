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
      { name: "Li-Hung" },
      { name: "Vera" },
      { name: "Yung-Yu" },
      { name: "Robert" },
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
      { name: "Yung-Yu" },
      { name: "Dboy" },
      { name: "Kuan-Hsien" },
      { name: "Chun-Hsu" },
      { name: "Chester" },
      { name: "Suci" },
      { name: "Chun-Shih" },
      { name: "Terry" },
      { name: "Jie-Yin" },
      { name: "Zhong-Han" },
      { name: "Steve" },
      { name: "Peter" },
      { name: "En Shih" },
    ],
  },
  {
    title: "Promotion",
    members: [
      { name: "Chun-Lin" },
      { name: "Jenny" },
      { name: "Zhong-Han" },
      { name: "Mai Mai" },
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
      { name: "Wei-Syuan" },
      { name: "En Shih" },
    ],
  },
];

export default teams;
