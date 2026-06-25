export const site = {
  name: "Studio della Voce",
  email: "Info@studiodellavoce.com",
  phone: "+1 234 567 890",
  instagram: "https://www.instagram.com/marcellaamoruso/",
  community:
    "https://studio-della-voce.mn.co/share/tHkUYNe29m0jBVZQ?utm_source=manual",
  scheduleUrl: "/contact",
  courseUrl: "/digital-course",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Vocal Lessons",
    href: "/vocal-lessons/individual",
    children: [
      { label: "Individual", href: "/vocal-lessons/individual" },
      { label: "Group", href: "/vocal-lessons/group" },
      { label: "Ministerial Choir", href: "/vocal-lessons/ministerial-choir" },
    ],
  },
  {
    label: "Online Resources",
    href: "/online-resources",
    children: [
      { label: "Online Community", href: "/online-resources" },
      { label: "Digital Course", href: "/digital-course" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];
