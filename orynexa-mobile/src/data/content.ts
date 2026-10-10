import type { ComponentProps } from "react";
import type { MaterialCommunityIcons } from "@expo/vector-icons";

export type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

export const services: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Business Systems",
    text: "End-to-end business management systems, dashboards, and workflow solutions.",
    icon: "briefcase-outline",
  },
  {
    title: "AI Automation",
    text: "AI agents, intelligent automation, and workflow intelligence for the future.",
    icon: "robot-outline",
  },
  {
    title: "Learning Platforms",
    text: "Education systems for students, workers, entrepreneurs, and skill growth.",
    icon: "book-open-outline",
  },
  {
    title: "Digital Operations",
    text: "Digital infrastructure, cloud systems, and operational excellence for organizations.",
    icon: "view-dashboard-outline",
  },
  {
    title: "Global Networks",
    text: "Japan-Nepal bridge, global talent, partnerships, and international collaboration.",
    icon: "earth",
  },
  {
    title: "Creative Media Systems",
    text: "Video, design, branding, and content systems that build meaningful digital impact.",
    icon: "play-circle-outline",
  },
];

export const subsystems: { title: string; text: string; icon: IconName }[] = [
  {
    title: "ORYNEXA OS",
    text: "Business operating system for teams and organizations.",
    icon: "view-dashboard-outline",
  },
  {
    title: "ORYNEXA AI",
    text: "AI agents and automation for smarter workflows.",
    icon: "robot-outline",
  },
  {
    title: "ORYNEXA LEARN",
    text: "Learning management systems for all ages and skills.",
    icon: "book-open-outline",
  },
  {
    title: "ORYNEXA STUDIO",
    text: "Creative studio for video, design, and digital content.",
    icon: "play-circle-outline",
  },
  {
    title: "ORYNEXA GLOBAL",
    text: "Global partnerships, talent networks, and international bridge.",
    icon: "earth",
  },
  {
    title: "ORYNEXA BUSINESS",
    text: "Consulting, digital transformation, and business solutions.",
    icon: "briefcase-outline",
  },
];

export const dashboardItems: { title: string; text: string; icon: IconName }[] = [
  { title: "Projects", text: "12 active systems", icon: "view-dashboard-outline" },
  { title: "AI Tasks", text: "38 automated actions", icon: "robot-outline" },
  { title: "Documents", text: "Knowledge base ready", icon: "file-document-outline" },
  { title: "Team", text: "Global operators", icon: "account-group-outline" },
  { title: "Workflows", text: "Execution pipelines", icon: "format-list-checks" },
  { title: "Network", text: "buffalonas.jp - Japan / Nepal / Global", icon: "lan" },
];
