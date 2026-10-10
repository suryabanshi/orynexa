import type { IconName } from "./content";

export type Integration = {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: IconName;
};

export const integrations: Integration[] = [
  {
    id: "google-workspace",
    name: "Google Workspace",
    description: "Sync Calendar, Drive, and Gmail with ORYNEXA OS.",
    category: "Productivity",
    icon: "google",
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    description: "Connect Outlook, Teams, and OneDrive for business workflows.",
    category: "Productivity",
    icon: "microsoft-outlook",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Send notifications and automate updates to your channels.",
    category: "Communication",
    icon: "slack",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Mirror your knowledge base into ORYNEXA's document hub.",
    category: "Knowledge",
    icon: "notebook-outline",
  },
  {
    id: "github",
    name: "GitHub",
    description: "Track repositories, issues, and pull requests from ORYNEXA OS.",
    category: "Development",
    icon: "github",
  },
  {
    id: "figma",
    name: "Figma",
    description: "Bring design files into ORYNEXA STUDIO for review.",
    category: "Design",
    icon: "vector-square",
  },
  {
    id: "shopify",
    name: "Shopify",
    description: "Manage products, orders, and inventory for your store.",
    category: "Business",
    icon: "storefront-outline",
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Bridge ORYNEXA to thousands of apps with automated flows.",
    category: "Automation",
    icon: "flash-outline",
  },
  {
    id: "dropbox",
    name: "Dropbox",
    description: "Store and share files across your ORYNEXA workspace.",
    category: "Storage",
    icon: "dropbox",
  },
  {
    id: "zoom",
    name: "Zoom",
    description: "Schedule and launch meetings from your ORYNEXA calendar.",
    category: "Communication",
    icon: "video-outline",
  },
];
