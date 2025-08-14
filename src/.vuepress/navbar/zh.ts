import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "Python",
    icon: "pen-to-square",
    link: "/zh/python/",
    children:['/zh/python/python笔记.md','/zh/python/pachong1.md','/zh/python/pachong2.md']
  },  
  {
    text: "项目",
    icon: "folder-open",
    link: "/zh/project/",
    children:['/zh/project/weixinai.md']
  },
  {
    text: "英语",
    icon: "pen-to-square",
    link: "/zh/english/",
    children:['/zh/english/unit1.md','/zh/english/unit2.md']
  
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
    text: "其他",
    icon: "pen-to-square",
    link: "/zh/other/",
    children:['/zh/other/CursorProjectRule.md']
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
