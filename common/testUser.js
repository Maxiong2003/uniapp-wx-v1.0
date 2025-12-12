// 测试用户配置
const testUser = {
  // 是否启用测试用户绕过登录
  enable: true,
  // 测试用户信息
  user: {
    // 测试用户的token
    token: "test-token-123456",
    // 测试用户基本信息
    userInfo: {
      userId: "test-user-001",
      nickName: "马雄",
      portrait: "/static/wx/1.jpg",
      phone: "13800138000",
      userType: "SINGLE"
    }
  },
  // 模拟联系人列表
  contacts: [
    {
      userId: "contact-001",
      nickName: "张三",
      portrait: "/static/img/avatar/avatar2.jpg",
      chatNo: "wx123456",
      userType: "normal"
    },
    {
      userId: "contact-002",
      nickName: "李四",
      portrait: "/static/img/avatar/avatar3.jpg",
      chatNo: "wx789012",
      userType: "normal"
    },
    {
      userId: "contact-003",
      nickName: "王五",
      portrait: "/static/img/avatar/avatar4.jpg",
      chatNo: "wx345678",
      userType: "normal"
    },
    {
      userId: "contact-004",
      nickName: "赵六",
      portrait: "/static/img/avatar/avatar5.jpg",
      chatNo: "wx901234",
      userType: "normal"
    },
    {
      userId: "contact-005",
      nickName: "孙七",
      portrait: "/static/img/avatar/avatar6.jpg",
      chatNo: "wx567890",
      userType: "normal"
    },
    {
      userId: "contact-006",
      nickName: "周八",
      portrait: "/static/img/avatar/avatar2.jpg",
      chatNo: "wx112233",
      userType: "normal"
    },
    {
      userId: "contact-007",
      nickName: "吴九",
      portrait: "/static/img/avatar/avatar3.jpg",
      chatNo: "wx445566",
      userType: "normal"
    },
    {
      userId: "contact-008",
      nickName: "郑十",
      portrait: "/static/img/avatar/avatar4.jpg",
      chatNo: "wx778899",
      userType: "normal"
    },
    {
      userId: "contact-009",
      nickName: "冯十一",
      portrait: "/static/img/avatar/avatar5.jpg",
      chatNo: "wx001122",
      userType: "normal"
    },
    {
      userId: "contact-010",
      nickName: "陈十二",
      portrait: "/static/img/avatar/avatar6.jpg",
      chatNo: "wx334455",
      userType: "normal"
    },
    {
      userId: "contact-011",
      nickName: "褚十三",
      portrait: "/static/img/avatar/avatar2.jpg",
      chatNo: "wx667788",
      userType: "normal"
    },
    {
      userId: "contact-012",
      nickName: "卫十四",
      portrait: "/static/img/avatar/avatar3.jpg",
      chatNo: "wx990011",
      userType: "normal"
    },
    {
      userId: "contact-013",
      nickName: "蒋十五",
      portrait: "/static/img/avatar/avatar4.jpg",
      chatNo: "wx223344",
      userType: "normal"
    },
    {
      userId: "contact-014",
      nickName: "沈十六",
      portrait: "/static/img/avatar/avatar5.jpg",
      chatNo: "wx556677",
      userType: "normal"
    },
    {
      userId: "contact-015",
      nickName: "韩十七",
      portrait: "/static/img/avatar/avatar6.jpg",
      chatNo: "wx889900",
      userType: "normal"
    },
    {
      userId: "contact-016",
      nickName: "杨十八",
      portrait: "/static/img/avatar/avatar2.jpg",
      chatNo: "wx121212",
      userType: "normal"
    },
    {
      userId: "contact-017",
      nickName: "朱十九",
      portrait: "/static/img/avatar/avatar3.jpg",
      chatNo: "wx343434",
      userType: "normal"
    },
    {
      userId: "contact-018",
      nickName: "秦二十",
      portrait: "/static/img/avatar/avatar4.jpg",
      chatNo: "wx565656",
      userType: "normal"
    },
    {
      userId: "contact-019",
      nickName: "尤二十一",
      portrait: "/static/img/avatar/avatar5.jpg",
      chatNo: "wx787878",
      userType: "normal"
    },
    {
      userId: "contact-020",
      nickName: "许二十二",
      portrait: "/static/img/avatar/avatar6.jpg",
      chatNo: "wx909090",
      userType: "normal"
    },
    {
      userId: "contact-021",
      nickName: "何二十三",
      portrait: "/static/img/avatar/avatar2.jpg",
      chatNo: "wx131313",
      userType: "normal"
    },
    {
      userId: "contact-022",
      nickName: "吕二十四",
      portrait: "/static/img/avatar/avatar3.jpg",
      chatNo: "wx575757",
      userType: "normal"
    },
    {
      userId: "contact-023",
      nickName: "施二十五",
      portrait: "/static/img/avatar/avatar4.jpg",
      chatNo: "wx919191",
      userType: "normal"
    },
    {
      userId: "contact-024",
      nickName: "张二十六",
      portrait: "/static/img/avatar/avatar5.jpg",
      chatNo: "wx242424",
      userType: "normal"
    },
    {
      userId: "contact-025",
      nickName: "孔二十七",
      portrait: "/static/img/avatar/avatar6.jpg",
      chatNo: "wx686868",
      userType: "normal"
    },
    {
      userId: "contact-026",
      nickName: "曹二十八",
      portrait: "/static/img/avatar/avatar2.jpg",
      chatNo: "wx020202",
      userType: "normal"
    },
    {
      userId: "contact-027",
      nickName: "严二十九",
      portrait: "/static/img/avatar/avatar3.jpg",
      chatNo: "wx464646",
      userType: "normal"
    },
    {
      userId: "contact-028",
      nickName: "华三十",
      portrait: "/static/img/avatar/avatar4.jpg",
      chatNo: "wx808080",
      userType: "normal"
    },
    {
      userId: "contact-029",
      nickName: "金三十一",
      portrait: "/static/img/avatar/avatar5.jpg",
      chatNo: "wx151515",
      userType: "normal"
    },
    {
      userId: "contact-030",
      nickName: "魏三十二",
      portrait: "/static/img/avatar/avatar6.jpg",
      chatNo: "wx595959",
      userType: "normal"
    },
    {
      userId: "contact-031",
      nickName: "陶三十三",
      portrait: "/static/img/avatar/avatar2.jpg",
      chatNo: "wx939393",
      userType: "normal"
    },
    {
      userId: "contact-032",
      nickName: "姜三十四",
      portrait: "/static/img/avatar/avatar3.jpg",
      chatNo: "wx262626",
      userType: "normal"
    },
    {
      userId: "contact-033",
      nickName: "戚三十五",
      portrait: "/static/img/avatar/avatar4.jpg",
      chatNo: "wx707070",
      userType: "normal"
    },
    {
      userId: "contact-034",
      nickName: "谢三十六",
      portrait: "/static/img/avatar/avatar5.jpg",
      chatNo: "wx040404",
      userType: "normal"
    },
    {
      userId: "contact-035",
      nickName: "邹三十七",
      portrait: "/static/img/avatar/avatar6.jpg",
      chatNo: "wx484848",
      userType: "normal"
    }
  ]
};

export default testUser;