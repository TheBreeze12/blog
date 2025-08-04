import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
   "/zh/": [
    "",
    {
      text: "Python",
      icon: "lightbulb",
      prefix: "python/",
      children:['python笔记.md']
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
    "intro",
  ],
  // "/zh/frontend/": "structure",
  // "/zh/backend/": "structure",
});
