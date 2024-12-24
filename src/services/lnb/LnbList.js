export const LnbList = {
  menu: [
    {
      id: "0-0",
      depth: "1",
      label: "화면정보관리",
      route: "/menu/sub0",
      children: null,
    },
    {
      id: "0-1",
      depth: "1",
      label: "메뉴구조관리",
      route: "/menu/sub1",
      children: null,
    },
    {
      id: "0-2",
      depth: "1",
      label: "권한관리",
      route: "/menu/sub2",
      children: null,
    },
    {
      id: "0-3",
      depth: "1",
      label: "공통코드",
      route: "/menu/sub3",
      children: null,
    },
  ],
  user: [
    {
      id: "1-0",
      depth: "1",
      label: "사용자관리",
      route: "/user/sub0",
      children: null,
    },
  ],
  arrangement: [
    {
      id: "2-0",
      depth: "1",
      label: "하위목록",
      route: "",
      children: [
        {
          id: "2-0-0",
          depth: "2",
          label: "sub0-0",
          route: "/arrangement/sub0/sub0-0",
        },
        {
          id: "2-0-1",
          depth: "2",
          label: "sub0-1",
          route: "/arrangement/sub0/sub0-1",
        },
      ],
    },
    {
      id: "2-1",
      depth: "1",
      label: "배치서비스관리",
      route: "/arrangement/sub1",
      children: [
        {
          id: "2-1-0",
          depth: "2",
          label: "sub1-0",
          route: "/arrangement/sub1/sub1-0",
        },
        {
          id: "2-1-1",
          depth: "2",
          label: "sub1-1",
          route: "/arrangement/sub1/sub1-1",
        },
      ],
    },
    {
      id: "2-2",
      depth: "1",
      label: "배치로그조회",
      route: "/arrangement/sub2",
      children: null,
    },
  ],
  team: [
    {
      id: "3-0",
      depth: "1",
      label: "부서관리",
      route: "/team/sub0",
      children: null,
    },
  ],
  pub: [
    {
      id: "4-0",
      depth: "1",
      label: "pub",
      route: "",
      children: [
        {
          id: "4-0-0",
          depth: "2",
          label: "login",
          route: "/login",
        },
        {
          id: "4-0-1",
          depth: "2",
          label: "test",
          route: "",
        },
      ],
    },
  ],
};
