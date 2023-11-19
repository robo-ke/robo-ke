import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation",
        },
        {
          title: "Components",
          href: "/docs/documentation/components",
        },
        {
          title: "Code Blocks",
          href: "/docs/documentation/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/docs/documentation/style-guide",
        },
      ],
    },
    {
      title: "Fundamentals",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Mechanical",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Electrical",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Control",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Build your own",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Compeitions",
      items: [
        {
          title: "Line Following Robot",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Maze Solving Robot",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
