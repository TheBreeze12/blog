import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
   "/zh/": [
    "",
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
      children: [
       
      ],
    },
    "intro",
  ],
  "/zh/frontend/": "structure",
  "/zh/backend/": "structure",
});
