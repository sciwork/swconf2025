const routes = [
  {
    path: "/program",
    name: "Program",
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
    path: "/projects",
    name: "Projects",
    disabled: false,
    children: [
      {
        path: "/projects#modmesh",
        name: "modmesh",
        disabled: false,
      },
      {
        path: "/projects#python-official-document-translation",
        name: "Python Official Document Translation",
        disabled: false,
      },
      {
        path: "/projects#sciwork-portal",
        name: "sciwork Portal",
        disabled: false,
      },
      {
        path: "/projects#utensor",
        name: "uTensor",
        disabled: false,
      },
    ],
  },
  {
    path: "/sponsor",
    name: "Sponsor",
    disabled: false,
  },
  {
    path: "/about",
    name: "Team",
    disabled: false,
  },
  {
    path: "/code-of-conduct",
    name: "Code of conduct",
    disabled: false,
  },
];

export default routes;
