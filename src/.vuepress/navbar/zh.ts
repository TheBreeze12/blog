import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "Python",
    icon: "pen-to-square",
    // link: "/zh/python/",
    children:['/zh/python/python笔记.md']
  
  }, 
  {
    text: "前端",
    icon: "pen-to-square",
    prefix: "/zh/frontend/",
    link: "/zh/frontend/",
  
  }, 
  {
    text: "后端",
    icon: "pen-to-square",
    prefix: "/zh/backend/",
    link: "/zh/backend/",
  
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "关于我",
    icon: "user",
    link: "/zh/intro.md",
  }
]);
