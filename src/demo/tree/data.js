const treeData = [
  {
    title: "成都市",
    value: "成都市",
    key: "0-0",
    code: 51001,
    parentId: 0,
    children: [
      {
        key: "0-0-0",
        title: "双流区",
        value: "双流区",
        parentId: 51001,
        code: 510011,
      },
      {
        key: "0-0-1",
        title: "武侯区",
        value: "武侯区",
        parentId: 51001,
        code: 510012,
      },
      {
        key: "0-0-2",
        title: "锦江区",
        value: "锦江区",
        parentId: 51001,
        code: 510013,
      },
      {
        key: "0-0-3",
        title: "青羊区",
        value: "青羊区",
        parentId: 51001,
        code: 510014,
      },
    ],
  },
  {
    key: "0-1",
    title: "眉山市",
    value: "眉山市",
    parentId: 0,
    code: 52001,
    children: [
      {
        key: "0-1-0",
        title: "东坡区",
        value: "东坡区",
        parentId: 52001,
        code: 520011,
        children: [
          {
            key: "0-1-0-0",
            title: "启明星花园",
            value: "启明星花园",
            parentId: 520011,
            code: 5200111,
          },
          {
            key: "0-1-0-1",
            title: "云溪上",
            value: "云溪上",
            parentId: 520011,
            code: 5200112,
          },
          {
            key: "0-1-0-2",
            title: "眉山市政府",
            value: "眉山市政府",
            parentId: 520011,
            code: 5200113,
          },
          {
            key: "0-1-0-3",
            title: "万达广场",
            value: "万达广场",
            parentId: 520011,
            code: 5200114,
          },
        ],
      },
      {
        key: "0-1-1",
        title: "仁寿县",
        value: "仁寿县",
        parentId: 52001,
        code: 520012,
      },
      {
        key: "0-1-2",
        title: "丹棱县",
        value: "丹棱县",
        parentId: 52001,
        code: 520013,
      },
      {
        key: "0-1-3",
        title: "青神县",
        value: "青神县",
        parentId: 52001,
        code: 520014,
      },
    ],
  },
];

export default treeData;
