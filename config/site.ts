import { env } from "@/env.mjs";
import { SiteConfig } from "types"

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "RoboKE",
  description:
    "RoboKE is a community of enthusiasts from Nairobi, Kenya who are interested in robotics and want to learn more about it. We believe that robotics is an exciting field with many opportunities for innovation and creativity.",
  url: site_url,
  ogImage: `${site_url}/og.png`,
  links: {
    twitter: "https://twitter.com/roboke",
    github: "https://github.com/robo-ke",
    meetup: "https://www.meetup.com/roboke/",
  },
  mailSupport: "info@robo.ke",
}
