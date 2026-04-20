export const siteConfig = {
  name: "She Builds",
  shortName: "She Builds",
  title: "She Builds | Women-in-Tech Community at TUM University",
  description:
    "She Builds is a women-in-tech university community for TUM students: events, mentorship, stories, and partner-backed opportunities that help more women belong in computing.",
  ogImage: "/og-default.svg",
  email: "hello@shebuilds.community",
  socialLinks: [
    {
      label: "Instagram",
      href: "https://instagram.com/shebuilds.tum"
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/she-builds-tum"
    },
    {
      label: "Luma",
      href: "https://lu.ma/shebuilds"
    },
    {
      label: "GitHub",
      href: "https://github.com/shebuilds-tum"
    }
  ]
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Events", href: "/events/" },
  { label: "Stories", href: "/stories/" },
  { label: "Partners", href: "/partners/" },
  { label: "Contact", href: "/contact/" }
];

export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  if (!path || path === "/") {
    return base;
  }

  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
};
