export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/hooksPage/index",
    "pages/comsPage/index",
    "pages/debug/index",
  ],
  tabBar: {
    color: "#bfbfbf",
    selectedColor: "#4a9dfd",
    list: [
      {
        pagePath: "pages/index/index",
        text: "组件库",
        iconPath: "assets/tabbar/com.png",
        selectedIconPath: "assets/tabbar/com_select.png",
      },
      {
        pagePath: "pages/hooksPage/index",
        text: "钩子库",
        iconPath: "assets/tabbar/hook.png",
        selectedIconPath: "assets/tabbar/hook_select.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
