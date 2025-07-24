import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "TheBreeze's Blog",
      description: "TheBreeze's personal blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "",
      description: "TheBreeze的个人博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
