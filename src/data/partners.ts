export type Partner = {
  name: string;
  category: string;
  description: string;
  logo: string;
};

export const partners: Partner[] = [
  {
    name: "Nova Cloud",
    category: "Community Sponsor",
    description: "Supports student cloud workshops, platform credits, and community swag.",
    logo: "/logos/nova-cloud.svg"
  },
  {
    name: "Signal Secure",
    category: "Security Partner",
    description: "Backs women-in-cyber talks and practical threat-modeling sessions.",
    logo: "/logos/signal-secure.svg"
  },
  {
    name: "Lumen Labs",
    category: "Innovation Partner",
    description: "Helps spotlight research, AI, and interdisciplinary student projects.",
    logo: "/logos/lumen-labs.svg"
  },
  {
    name: "Pixel & Flow",
    category: "Design Partner",
    description: "Co-creates portfolio reviews and design-for-tech workshops.",
    logo: "/logos/pixel-and-flow.svg"
  },
  {
    name: "TUM Informatics",
    category: "Campus Partner",
    description: "Provides venue support, faculty visibility, and student outreach.",
    logo: "/logos/tum-informatics.svg"
  },
  {
    name: "Her Future Fund",
    category: "Impact Supporter",
    description: "Enables mentoring, accessibility needs, and community growth experiments.",
    logo: "/logos/her-future-fund.svg"
  }
];

export const partnerBenefits = [
  "Support visible pathways for women in computing and engineering.",
  "Reach ambitious student builders across software, data, AI, security, product, and design.",
  "Co-create events, mentoring touchpoints, and technical learning experiences on campus.",
  "Strengthen employer brand with a community that values credibility, belonging, and growth."
];

export const sponsorTiers = [
  {
    name: "Launch Partner",
    details: "Headline visibility across flagship events, stories, and semester campaigns."
  },
  {
    name: "Community Sponsor",
    details: "Support recurring meetups, workshops, and mentor matching programs."
  },
  {
    name: "In-Kind Partner",
    details: "Contribute tools, spaces, scholarships, food, travel support, or learning credits."
  }
];
