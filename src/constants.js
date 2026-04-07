export const PERSONAL_INFO = {
  name: "Chethan H C",
  role: "Full Stack Developer & UI Designer",
  bio: "I build exceptional digital experiences that combine robust backend logic with pixel-perfect frontend design. Passionate about open source and emerging technologies.",
  email: "chethanhc2002@gmail.com",
  location: "Bangalore, India",
  photo: "https://picsum.photos/seed/chethan/400/400",
  resumeUrl: "#", // Placeholder
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};

export const SKILLS = [
  { name: "React", category: "Frontend", level: 90 },
  { name: "TypeScript", category: "Frontend", level: 85 },
  { name: "Tailwind CSS", category: "Frontend", level: 95 },
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "Express", category: "Backend", level: 85 },
  { name: "PostgreSQL", category: "Backend", level: 75 },
  { name: "Docker", category: "Tools", level: 70 },
  { name: "Git", category: "Tools", level: 90 },
  { name: "Figma", category: "Design", level: 85 }
];

export const PROJECTS = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, secure payments, and a custom CMS.",
    image: "https://picsum.photos/seed/shop/800/600",
    tags: ["React", "Node.js", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "2",
    title: "AI Content Generator",
    description: "Leveraging Gemini API to generate high-quality marketing copy and blog posts automatically.",
    image: "https://picsum.photos/seed/ai/800/600",
    tags: ["Gemini API", "Next.js", "Tailwind"],
    githubUrl: "https://github.com"
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop boards and team analytics.",
    image: "https://picsum.photos/seed/task/800/600",
    tags: ["React", "Firebase", "D3.js"],
    githubUrl: "https://github.com"
  }
];

export const EXPERIENCES = [
  {
    id: "1",
    company: "Tech Solutions Inc.",
    position: "Senior Frontend Developer",
    period: "2023 - Present",
    description: [
      "Led a team of 5 developers in rebuilding the core product dashboard.",
      "Reduced bundle size by 40% through code splitting and optimization.",
      "Implemented a comprehensive design system using Tailwind CSS."
    ]
  },
  {
    id: "2",
    company: "Creative Digital Agency",
    position: "Full Stack Developer",
    period: "2021 - 2023",
    description: [
      "Developed and maintained over 15 client websites using React and Node.js.",
      "Integrated various third-party APIs including Stripe, Twilio, and AWS S3.",
      "Improved site performance scores by 25% on average."
    ]
  }
];

export const BLOG_POSTS = [
  {
    id: "1",
    title: "The Future of Web Development with AI",
    excerpt: "How generative AI is changing the way we write code and design user interfaces.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS Grid",
    excerpt: "A deep dive into creating complex layouts with ease using Tailwind's grid utilities.",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Design"
  }
];
