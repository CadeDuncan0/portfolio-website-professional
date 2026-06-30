export const profile = {
  name: "Jordan",
  initials: "JD",
  taglineBefore:
    "Software engineer building delightful, accessible web applications. I love shipping products and ",
  taglineHighlight: "learning in public",
  taglineAfter: ".",
};

export const about =
  "I'm a software engineer with a passion for crafting clean, performant interfaces. Over the past few years I've shipped products across startups and larger teams, focusing on design systems, developer experience, and turning ambiguous ideas into polished features.";

export type ListEntry = {
  letter: string;
  gradient: string;
  title: string;
  sub: string;
  date: string;
};

export const work: ListEntry[] = [
  {
    letter: "N",
    gradient: "linear-gradient(135deg,#00eaff,#0088ff)",
    title: "Northwind Labs",
    sub: "Senior Software Engineer",
    date: "2023 — Present",
  },
  {
    letter: "G",
    gradient: "linear-gradient(135deg,#00ffae,#00b37a)",
    title: "Globex Corp",
    sub: "Software Engineer",
    date: "2021 — 2023",
  },
  {
    letter: "I",
    gradient: "linear-gradient(135deg,#fcee0a,#ff9d00)",
    title: "Initech",
    sub: "Frontend Developer",
    date: "2019 — 2021",
  },
  {
    letter: "U",
    gradient: "linear-gradient(135deg,#ff2bd6,#9b00ff)",
    title: "Umbrella Co",
    sub: "Software Engineering Intern",
    date: "2018 — 2019",
  },
];

export const education: ListEntry[] = [
  {
    letter: "S",
    gradient: "linear-gradient(135deg,#00eaff,#3366ff)",
    title: "State University",
    sub: "B.S. in Computer Science",
    date: "2015 — 2019",
  },
  {
    letter: "C",
    gradient: "linear-gradient(135deg,#ff2bd6,#ff5a5a)",
    title: "Codeworks Bootcamp",
    sub: "Full-Stack Web Development",
    date: "2014 — 2015",
  },
];

export const skills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Tailwind CSS",
  "AWS",
];

export type Project = {
  title: string;
  date: string;
  desc: string;
  tags: string[];
  preview: string;
};

export const projects: Project[] = [
  {
    title: "TaskFlow",
    date: "Jan 2024 — Present",
    desc: "A collaborative project management app with real-time boards, drag-and-drop, and keyboard-first navigation.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "tRPC"],
    preview: "linear-gradient(135deg,#141a4d,#3a1f6b)",
  },
  {
    title: "DevNotes",
    date: "Jun 2023 — Dec 2023",
    desc: "A fast markdown note-taking app with offline sync, full-text search, and a clean distraction-free editor.",
    tags: ["React", "Tailwind", "IndexedDB"],
    preview: "linear-gradient(135deg,#0d3433,#1a7a5f)",
  },
  {
    title: "ShopKit",
    date: "Sep 2022 — May 2023",
    desc: "An open-source e-commerce starter kit with a headless storefront, cart, and Stripe checkout out of the box.",
    tags: ["Next.js", "Stripe", "Tailwind", "Vercel"],
    preview: "linear-gradient(135deg,#3a1f0d,#9b5a18)",
  },
  {
    title: "InsightAI",
    date: "Mar 2022 — Aug 2022",
    desc: "A usage analytics dashboard for LLM apps with cost tracking, latency charts, and exportable reports.",
    tags: ["React", "Python", "FastAPI", "ClickHouse"],
    preview: "linear-gradient(135deg,#3a0d2e,#8a1f63)",
  },
];
