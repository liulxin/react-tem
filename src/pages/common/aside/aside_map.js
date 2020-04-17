export default [
  {
    path: "/",
    name: "总览",
    type: "icon-tuanduizonglan",
  },
  {
    path: "/crash",
    name: "异常",
    type: "icon-jingyingyichang",
    next: [
      {
        path: "/dailyStatistics",
        name: "今日统计",
      },
      {
        path: "/trendAnalysis",
        name: "趋势分析",
      },
      {
        path: "/dataStatistics",
        name: "异常列表",
      },
      {
        path: "/symbolUpload",
        name: "符号文件",
      },
    ],
  },
  {
    path: "/update",
    name: "更新",
    type: "icon-gengxinqi",
    next: [
      {
        path: "/dailyStatistics",
        name: "实时统计",
      },
      {
        path: "/dataStatistics",
        name: "趋势分析",
      },
      {
        path: "/speedAnalysis",
        name: "速率分析",
      },
      {
        path: "/exceptionUsers_apkUpdate",
        name: "异常用户-APK更新",
      },
      {
        path: "/exceptionUsers_resourceUpdate",
        name: "异常用户-资源更新",
      },
    ],
  },
  {
    path: "/share",
    name: "分享",
    type: "icon-fenxiang",
    next: [
      {
        path: "/dailyStatistics",
        name: "分享概况",
      },
      {
        path: "/dataAnalysis",
        name: "数据分析",
      },
      {
        path: "/exceptionAnalysis",
        name: "异常分析",
      },
    ],
  },
  {
    path: "/operation",
    name: "运营",
    type: "icon-yunyingliucheng",
    next: [
      {
        path: "/onlineCount",
        name: "实时在线",
      },
      {
        path: "/retentionData",
        name: "留存数据",
      },
      {
        path: "/firstInstallPerDay",
        name: "首安分析",
      },
      {
        path: "/deviceAnalysis",
        name: "设备分析",
      },
    ],
  },
  {
    path: "/statistics",
    name: "统计",
    type: "icon-tongji",
    next: [
      {
        path: "/userCharacteristics",
        name: "用户特征",
      },
      {
        path: "/deviceProperties",
        name: "设备属性",
      },
      {
        path: "/networkType",
        name: "上网类型",
      },
    ],
  },
  {
    path: "/behavior",
    name: "行为",
    type: "icon-svg-",
    next: [
      {
        path: "/search",
        name: "查询",
      },
    ],
  },
  {
    path: "/performance",
    name: "性能",
    type: "icon-xingneng",
    next: [
      {
        path: "/data",
        name: "性能数据",
      },
    ],
  },
  {
    name: "帮助",
    type: "icon-bangzhu",
    to: "/",
  },
];
