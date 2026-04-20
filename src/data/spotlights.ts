export type Spotlight = {
  name: string;
  role: string;
  focus: string;
  quote: string;
  accent: string;
};

export const roles = [
  "Frontend developers",
  "Backend developers",
  "QA engineers",
  "Data scientists",
  "ML engineers",
  "Cybersecurity professionals",
  "Product managers",
  "UI/UX designers",
  "DevOps and cloud engineers",
  "Students and researchers"
];

export const spotlights: Spotlight[] = [
  {
    name: "Amina Yusuf",
    role: "ML Engineering Student",
    focus: "Building inclusive AI study tools",
    quote:
      "She Builds gave me a room full of women who understood both the ambition and the nerves. That changed how I saw my place in tech.",
    accent: "pink"
  },
  {
    name: "Leonie Hartmann",
    role: "Backend Developer and Mentor",
    focus: "Distributed systems, internships, and mentoring first-years",
    quote:
      "Visibility matters. Sometimes meeting one person with a path you can imagine is enough to make you stay.",
    accent: "lavender"
  },
  {
    name: "Priya Raman",
    role: "Product and UX Research Volunteer",
    focus: "Helping technical teams ship with empathy and clarity",
    quote:
      "Community should lower the friction of getting involved. That is what we are building here, together.",
    accent: "magenta"
  }
];
