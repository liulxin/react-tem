import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));

export default [
  { path: "/", name: "Home", exact: true, component: Home },
  { path: "/login", name: "Login", component: Login },
  // 异常分析
  {
    path: "/crash",
    name: "CrashDailyStatistics",
    redirect: "/crash/dailyStatistics",
    exact: true,
    component: Login,
  },
  {
    path: "/crash/dailyStatistics",
    name: "CrashDailyStatistics",
    component: Login,
  },
  {
    path: "/crash/trendAnalysis",
    name: "CrashTrendAnalysis",
    component: Login,
  },
  {
    path: "/crash/dataStatistics",
    name: "CrashDataStatistics",
    component: Login,
  },
  {
    path: "/crash/symbolUpload",
    name: "CrashSymbolUpload",
    component: Login,
  },
  {
    path: "/crash/advancedSearch",
    name: "CrashAdvancedSearch",
    component: Login,
  },
  {
    path: "/crash/eventAnalysis/:id",
    name: "CrashEventAnalysis",
    component: Login,
  },
  // 更新业务
  {
    path: "/update",
    name: "UpdateDailyStatistics",
    redirect: "/update/dailyStatistics",
    exact: true,
    component: Login,
  },
  {
    path: "/update/dailyStatistics",
    name: "UpdateDailyStatistics",
    component: Login,
  },
  {
    path: "/update/dataStatistics",
    name: "UpdateDataStatistics",
    component: Login,
  },
  {
    path: "/update/speedAnalysis",
    name: "UpdateSpeedAnalysis",
    component: Login,
  },
  {
    path: "/update/exceptionUsers_apkUpdate",
    name: "UpdateExceptionUsersApkUpdate",
    component: Login,
  },
  {
    path: "/update/exceptionUsers_resourceUpdate",
    name: "UpdateExceptionUsersResourceUpdate",
    component: Login,
  },
  // 分享业务
  {
    path: "/share",
    name: "ShareDailyStatistics",
    redirect: "/share/dailyStatistics",
    exact: true,
    component: Login,
  },
  {
    path: "/share/dataAnalysis",
    name: "ShareDailyStatistics",
    component: Login,
  },
  {
    path: "/share/dataAnalysis",
    name: "ShareDataAnalysis",
    component: Login,
  },
  {
    path: "/share/exceptionAnalysis",
    name: "ShareExceptionAnalysis",
    component: Login,
  },
  // 运营数据
  {
    path: "/operation",
    name: "OperationOnlineCount",
    redirect: "/operation/onlineCount",
    exact: true,
    component: Login,
  },
  {
    path: "/operation/onlineCount",
    name: "OperationOnlineCount",
    component: Login,
  },
  {
    path: "/operation/retentionData",
    name: "OperationRetentionData",
    component: Login,
  },
  {
    path: "/operation/deviceAnalysis",
    name: "OperationDeviceAnalysis",
    component: Login,
  },
  {
    path: "/operation/firstInstallPerDay",
    name: "OperationFirstInstallPerDay",
    component: Login,
  },
  // 统计
  {
    path: "/statistics",
    name: "StatisticsUserCharacteristics",
    redirect: "/statistics/userCharacteristics",
    exact: true,
    component: Login,
  },
  {
    path: "/statistics/userCharacteristics",
    name: "StatisticsUserCharacteristics",
    component: Login,
  },
  {
    path: "/statistics/deviceProperties",
    name: "StatisticsDeviceProperties",
    component: Login,
  },
  {
    path: "/statistics/networkType",
    name: "StatisticsNetworkType",
    component: Login,
  },
  // 行为分析
  {
    path: "/behavior",
    name: "BehaviorSearch",
    redirect: "/behavior/search",
    exact: true,
    component: Login,
  },
  {
    path: "/behavior/search",
    name: "BehaviorSearch",
    component: Login,
  },
  {
    path: "/behavior/detail/:id",
    name: "BehaviorDetail",
    component: Login,
  },
  // 性能数据
  {
    path: "/performance",
    name: "PerformanceData",
    redirect: "/performance/data",
    exact: true,
    component: Login,
  },
  {
    path: "/performance/data",
    name: "PerformanceData",
    component: Login,
  },
];
