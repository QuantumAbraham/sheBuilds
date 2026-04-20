export type EventCategory =
  | "Meetup"
  | "Workshop"
  | "Hackathon"
  | "Mentorship"
  | "Career Talk";

export type EventItem = {
  title: string;
  summary: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  lumaUrl: string;
  featured?: boolean;
};

export const events: EventItem[] = [
  {
    title: "Spring Build Night: Ship Your First Campus Project",
    summary:
      "A high-energy evening for students who want to turn half-finished ideas into real demos with peer support, lightning feedback, and a beginner-friendly project wall.",
    date: "May 16, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "TUM Garching, Informatics Building, Room 02.11.023",
    category: "Workshop",
    lumaUrl: "https://lu.ma/shebuilds-spring-build-night",
    featured: true
  },
  {
    title: "Women in Cybersecurity: Threat Modeling for Real Products",
    summary:
      "An applied session on how security engineers think, with practical walkthroughs for product teams, developers, and curious beginners.",
    date: "May 28, 2026",
    time: "5:30 PM - 7:30 PM",
    location: "TUM City Campus, Seminar Hub A",
    category: "Career Talk",
    lumaUrl: "https://lu.ma/shebuilds-cybersecurity-talk"
  },
  {
    title: "Community Coffee + Code",
    summary:
      "A relaxed meetup for students across frontend, backend, design, product, data, and research to meet collaborators and swap learning resources.",
    date: "June 4, 2026",
    time: "4:00 PM - 6:00 PM",
    location: "TUM Student Commons",
    category: "Meetup",
    lumaUrl: "https://lu.ma/shebuilds-coffee-and-code"
  },
  {
    title: "Mentor Match Studio",
    summary:
      "Short mentoring circles that help students ask better questions, map their next semester, and find role models across technical paths.",
    date: "June 12, 2026",
    time: "3:30 PM - 6:30 PM",
    location: "TUM Main Campus, Learning Lab",
    category: "Mentorship",
    lumaUrl: "https://lu.ma/shebuilds-mentor-match"
  },
  {
    title: "Campus AI Mini Hack",
    summary:
      "A one-day build sprint for students exploring ML, product thinking, design systems, and rapid prototyping around student-life problems.",
    date: "June 20, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "TUM Heilbronn Digital Hub",
    category: "Hackathon",
    lumaUrl: "https://lu.ma/shebuilds-ai-mini-hack"
  },
  {
    title: "Designing for Trust: UX, Accessibility, and Inclusive Flows",
    summary:
      "A collaborative workshop on interfaces that feel welcoming, legible, and confidence-building for a wide range of users.",
    date: "July 3, 2026",
    time: "5:00 PM - 7:00 PM",
    location: "TUM Design Studio",
    category: "Workshop",
    lumaUrl: "https://lu.ma/shebuilds-inclusive-ux"
  }
];

export const pastEvents = [
  {
    title: "Founders, Firmware, and Frontend",
    note: "A packed panel featuring alumni across product, cloud, embedded systems, and startup engineering."
  },
  {
    title: "First Internship Confidence Lab",
    note: "Resume reviews, mock introductions, and honest Q&A on applying before you feel ready."
  },
  {
    title: "Women Building with Data",
    note: "A story-led evening where students shared how analytics, research, and ML projects grow from coursework into careers."
  }
];
