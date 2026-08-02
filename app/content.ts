export const profile = {
  name: "Your Name",
  initials: "YN",
  role: "Graduate Researcher in Artificial Intelligence",
  affiliation: "Your University · Your Lab",
  location: "City, Country",
  email: "your.name@university.edu",
  intro:
    "I build learning systems that connect language, vision, and human intent. My current work focuses on multimodal reasoning, reliable foundation models, and practical AI systems.",
  note:
    "I am always happy to discuss research ideas, open-source collaborations, and graduate opportunities.",
  interests: [
    "Multimodal Learning",
    "Large Language Models",
    "Trustworthy AI",
  ],
  links: [
    { label: "Google Scholar", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "ORCID", href: "#" },
    { label: "CV", href: "#" },
  ],
};

export const news = [
  {
    date: "2026.07",
    text: "Add your latest paper acceptance, award, or research milestone here.",
  },
  {
    date: "2026.03",
    text: "Add a new internship, visit, invited talk, or open-source release.",
  },
  {
    date: "2025.12",
    text: "Add an earlier update to give visitors a quick sense of your trajectory.",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  summary: string;
  topic: string;
  featured: boolean;
  links: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    title: "Your Featured Paper Title Goes Here",
    authors: "Your Name, Coauthor One, Coauthor Two",
    venue: "Conference / Journal",
    year: "2026",
    summary:
      "Use one sentence to explain the problem, your key idea, and why the result matters.",
    topic: "Multimodal AI",
    featured: true,
    links: [
      { label: "Paper", href: "#" },
      { label: "Code", href: "#" },
      { label: "Project", href: "#" },
    ],
  },
  {
    title: "A Second Publication with a Clear, Descriptive Title",
    authors: "Collaborator One, Your Name, Collaborator Two",
    venue: "Conference / Journal",
    year: "2025",
    summary:
      "Highlight the concrete contribution and include a result visitors can understand quickly.",
    topic: "Reliable Models",
    featured: true,
    links: [
      { label: "Paper", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
  {
    title: "An Earlier Project or Workshop Paper",
    authors: "Your Name, Collaborator One",
    venue: "Workshop / Preprint",
    year: "2024",
    summary:
      "Add a compact description that connects this work to your broader research direction.",
    topic: "AI Systems",
    featured: false,
    links: [{ label: "Paper", href: "#" }],
  },
];

export const experience = [
  {
    period: "2024 — Present",
    title: "Graduate Researcher",
    place: "Your Lab, Your University",
    detail:
      "Working on multimodal reasoning and reliable learning systems with your advisor.",
  },
  {
    period: "2023 — 2024",
    title: "Research Intern",
    place: "Organization or Research Lab",
    detail:
      "Built and evaluated an applied machine-learning system for a real-world problem.",
  },
];

export const education = [
  {
    period: "2024 — Present",
    degree: "M.S. / Ph.D. in Computer Science",
    school: "Your University",
  },
  {
    period: "2020 — 2024",
    degree: "B.Eng. / B.Sc. in Your Major",
    school: "Your Previous University",
  },
];

export const projects = [
  {
    number: "01",
    title: "Open Research Project",
    description:
      "Describe a research codebase, benchmark, dataset, or demo that visitors can explore.",
    tags: ["Research", "Open source"],
    href: "#",
  },
  {
    number: "02",
    title: "Applied AI System",
    description:
      "Show how your methods become a usable system, with a short and outcome-focused description.",
    tags: ["System", "Demo"],
    href: "#",
  },
];

export const recognition = {
  awards: [
    "2026 · Add an award, scholarship, or notable recognition",
    "2025 · Add an earlier academic distinction",
  ],
  service: [
    "Reviewer · Conference or Journal",
    "Organizer · Workshop, seminar, or student community",
  ],
};
