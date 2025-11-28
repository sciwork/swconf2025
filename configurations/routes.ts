const routes = [
  {
    path: "/program",
    name: "Program",
    disabled: false,
  },
  {
    path: "/code-of-conduct",
    name: "Code of conduct",
    disabled: false,
  },
  {
    path: "/workshops",
    name: "Workshops",
    disabled: false,
    children: [
      {
        path: "/workshops#jugg-ai",
        name: "AI 需求工作坊",
        disabled: false,
      },
      {
        path: "/workshops#steve-gns3",
        name: "技術工作坊 - GNS3 介紹",
        disabled: false,
      },
    ],
  },
  {
    path: "/sponsor",
    name: "Sponsor",
    disabled: false,
  },
];

export default routes;
