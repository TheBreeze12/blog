import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
   "/zh/": [
    "",
    {
      text: "Python",
      icon: "lightbulb",
      prefix: "python/",
      children:['python笔记.md','pachong1.md','pachong2.md']
    }, 
    {
      text: "英语",
      icon: "lightbulb",
      prefix: "english/",
      children:['unit1.md','unit2.md']
    },
    {
      text: "项目",
      icon: "folder-open",
      prefix: "project/",
      children:['weixinai.md']
    },
    {
      text: "前端",
      icon: "lightbulb",
      prefix: "frontend/",
      children: [
        "vue",
      ],
    },
    {
      text: "后端",
      icon: "gears",
      prefix: "backend/",
      children: "structure"
    },
    {
      text: "其他",
      icon: "pen-to-square",
      link: "/zh/other/",
      children:['/zh/other/CursorProjectRule.md']
    },
    "intro",
  ],
  // "/zh/frontend/": "structure",
  // "/zh/backend/": "structure",
});
