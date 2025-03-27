import { Frame, LifeBuoy, Map, PieChart, Send, SquareTerminal } from "lucide-react";

export const SIDEBAR_DATA = {
  user: {
    name: "Titanix",
    email: "t@example.com",
    avatar: "/avatars/titanix.jpg",
  },
  navMain: [
    {
      title: "What I learned",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Optimizing Rendering",
          url: "#",
        },
        {
          title: "Sample",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
