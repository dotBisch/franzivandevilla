import { About, Gallery, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Franz Ivan",
  lastName: "De Villa",
  name: `Franz Ivan De Villa`,
  role: "Software Developer Intern",
  avatar: "/images/avatar.png",
  email: "franzivan.devilla@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino",], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dotBisch/",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/franz-ivan-de-villa-9928a0289/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/f_ivandv/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const about: About = {
  path: "/",
  label: "About",
  title: `About – ${person.name}`,
  description: `Franz Ivan De Villa - Software Developer Intern specializing in Full-Stack Development with React, TypeScript, Next.js, and Laravel. Based in Manila, Philippines. Experienced in backend optimization, SQL, and modern web development.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Franz Ivan R. De Villa is a flexible developer specializing in efficient system design.
        He works across full-stack development and workflow automations,
        from backend logic and SQL to React/TypeScript interfaces and AI-powered workflows.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SN International Group Pty Ltd",
        timeframe: "January 2026 - Present",
        role: "AI Specialist Intern",
        achievements: [
          <>
            Hardened Zara (OpenClaw) deployment and access control by containerizing the environment with Docker
            on a Hostinger VPS, achieving 95% uptime during the beta launch secured by Cloudflare.
          </>,
          <>
            Expanded agent capabilities by integrating Twilio for phone calls along with Google Workspace and Notion
            integrations, increasing executive productivity by 50% through streamlined API-driven workflows.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Rakso Computer Technology, Inc.",
        timeframe: "July 2025 - August 2025",
        role: "Software Developer Intern",
        achievements: [
          <>
            Refactored backend data layer by optimizing SQL query logic and modularizing server-side components, improving system performance,
            maintainability, and data integrity across lead and client endpoints.
          </>,
          <>
            Built modal-based "Update Lead" workflow using React (TypeScript) and Inertia.js, integrating frontend validation
            and backend synchronization to streamline data editing and user efficiency.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Polytechnic University of the Philippines",
        description: <>Bachelor of Science in Computer Science</>,
        icon: "graduationCap",
        details: <>
          Focused on software engineering, data structures, algorithms, and full-stack development.
          Developed strong foundations in computer science theory and practical application through various projects and coursework.
        </>,
      },
      {
        name: "Far Eastern University - Cavite",
        description: <>STEM - With High Honors</>,
        icon: "award",
        details: <>
          Completed Senior High School under the Science, Technology, Engineering, and Mathematics (STEM) strand.
          Graduated with High Honors, demonstrating excellence in mathematics, physics, and computer science fundamentals.
        </>,
      },
      {
        name: "Batangas Province Science High School",
        description: <>With High Honors</>,
        icon: "star",
        details: <>
          Attended a specialized science high school focused on advanced STEM education.
          Graduated with High Honors, building a strong foundation in scientific thinking and problem-solving.
        </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        tags: [
          {
            name: "C",
            icon: "",
          },
          {
            name: "C#",
            icon: "",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "JavaScript (ES6+)",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
        ],
      },
      {
        title: "Frameworks & Libraries",
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
        ],
      },
      {
        title: "Databases & BaaS",
        tags: [
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
      },
      {
        title: "Tools & Design",
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Framer",
            icon: "framer",
          },
          {
            name: "Canva",
            icon: "canva",
          },
        ],
        images: [
          //insert sample projects here
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Software development projects and portfolio by Franz Ivan De Villa. Showcasing full-stack web applications, React projects, and innovative solutions using modern technologies.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `Professional photo gallery and visual portfolio by Franz Ivan De Villa. Explore creative photography and design work.`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {

      src: "/images/gallery/horizontal-1.mp4",
      alt: "image",
      orientation: "horizontal",
      type: "video"
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, about, work, gallery };
