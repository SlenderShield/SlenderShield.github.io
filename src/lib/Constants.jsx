/* eslint-disable react-refresh/only-export-components */
import SpringBoot from '@/assests/spring_boot.webp'
import MERN from '@/assests/mern.webp'
import TS from '@/assests/ts.webp'
import STRANGLER_FIG from '@/assests/strangler_fig.webp'
import {
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlineChartBarSquare,
  HiOutlineCheckCircle,
  HiOutlineInformationCircle,
  HiOutlineXMark,
  HiOutlineExclamationCircle,
  HiEnvelope,
} from "react-icons/hi2";

import {
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiDart,
  SiJavascript,
  SiGraphql,
  SiHasura,
  SiPostgresql,
  SiNodedotjs,
  SiSvelte,
  SiRedux,
  SiYarn,
  SiFramer,
  SiSanity,
  SiVscodium,
  SiVite,
  SiSass,
  SiNetlify,
  SiVercel,
  SiTurborepo,
  SiExpress,
  SiKotlin,
  SiGithub,
  SiX,
  SiLinkedin,
  SiFacebook,
  SiTelegram,
  SiWhatsapp,
  SiPocketbase,
  SiDocker,
  SiSst,
  SiRedis,
  SiCloudflare,
  SiCloudflarepages,
  SiCloudflareworkers,
  SiInstagram,
} from "react-icons/si";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

// export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

// export const BASEURL = `https://www.${DOMAIN}`;

// export const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

export const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const SOCIAL_LINKS = [
  {
    href: "https://twitter.com/myself_MDB",
    label: "Follow on Twitter",
    Icon: SiX,
  },
  {
    href: "https://instagram.com/i_mdb_9.8",
    label: "Follow on Instagram",
    Icon: SiInstagram,
  },
  {
    href: "https://github.com/slendershield",
    label: "Follow on GitHub",
    Icon: SiGithub,
  },
  {
    href: "https://linkedin.com/in/ksmuralidhara0",
    label: "Follow on LinkedIn",
    Icon: SiLinkedin,
  },
];

export const TOOLS = new Map([
  // JavaScript ecosystem
  [
    "JavaScript",
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      href: "https://javascript.com",
    },
  ],
  [
    "TypeScript",
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      href: "https://typescriptlang.org",
    },
  ],
  ["React", { icon: <SiReact />, name: "React", href: "https://react.dev" }],
  [
    "Next.js",
    { icon: <SiNextdotjs />, name: "Next.js", href: "https://nextjs.org" },
  ],
  [
    "Svelte",
    { icon: <SiSvelte />, name: "Svelte", href: "https://svelte.dev" },
  ],
  ["Redux", { icon: <SiRedux />, name: "Redux", href: "https://redux.js.org" }],
  [
    "Node.js",
    { icon: <SiNodedotjs />, name: "Node.js", href: "https://nodejs.org" },
  ],
  ["Vite", { icon: <SiVite />, name: "Vite", href: "https://vitejs.dev" }],
  [
    "Turborepo",
    { icon: <SiTurborepo />, name: "Turborepo", href: "https://turbo.build" },
  ],
  [
    "Express.js",
    { icon: <SiExpress />, name: "Express.js", href: "https://expressjs.com" },
  ],

  // CSS
  [
    "Tailwind CSS",
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ],
  ["Sass", { icon: <SiSass />, name: "Sass", href: "https://sass-lang.com" }],

  // Deployment
  [
    "Netlify",
    { icon: <SiNetlify />, name: "Netlify", href: "https://netlify.com" },
  ],
  [
    "Vercel",
    { icon: <SiVercel />, name: "Vercel", href: "https://vercel.com" },
  ],

  // Database
  [
    "PostgreSQL",
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
      href: "https://postgresql.org",
    },
  ],
  [
    "Redis",
    {
      icon: <SiRedis />,
      name: "Redis",
      href: "https://redis.io",
    },
  ],
  [
    "GraphQL",
    { icon: <SiGraphql />, name: "GraphQL", href: "https://graphql.org" },
  ],
  ["Hasura", { icon: <SiHasura />, name: "Hasura", href: "https://hasura.io" }],

  // PaaS
  [
    "Firebase",
    {
      icon: <SiFirebase />,
      name: "Firebase",
      href: "https://firebase.google.com",
    },
  ],
  [
    "Pocketbase",
    {
      icon: <SiPocketbase />,
      name: "Pocketbase",
      href: "https://pocketbase.io/",
    },
  ],

  // Dart ecosystem
  ["Dart", { icon: <SiDart />, name: "Dart", href: "https://dart.dev" }],
  [
    "Flutter",
    { icon: <SiFlutter />, name: "Flutter", href: "https://flutter.dev" },
  ],

  // CloudFlare
  [
    "CloudFlare",
    {
      icon: <SiCloudflare />,
      name: "CloudFlare",
      href: "https://cloudflare.com",
    },
  ],
  [
    "Cloudflare Pages",
    {
      icon: <SiCloudflarepages />,
      name: "Cloudflare Pages",
      href: "https://pages.cloudflare.com",
    },
  ],
  [
    "Cloudflare Workers",
    {
      icon: <SiCloudflareworkers />,
      name: "Cloudflare Workers",
      href: "https://workers.cloudflare.com",
    },
  ],

  // Other tools
  [
    "Github",
    { icon: <SiGithub />, name: "Github", href: "https://github.com" },
  ],
  [
    "Docker",
    { icon: <SiDocker />, name: "Docker", href: "https://docker.com" },
  ],
  ["SST", { icon: <SiSst />, name: "SST", href: "https://sst.dev" }],
  [
    "Framer Motion",
    {
      icon: <SiFramer />,
      name: "Framer Motion",
      href: "https://www.framer.com/motion/",
    },
  ],
  [
    "GSAP",
    { icon: "@/assets/tools/gsap.svg", name: "GSAP", href: "https://gsap.com" },
  ],
  ["Sanity", { icon: <SiSanity />, name: "Sanity", href: "https://sanity.io" }],
  ["Yarn", { icon: <SiYarn />, name: "Yarn", href: "https://yarnpkg.com" }],
  [
    "VS Code",
    {
      icon: <SiVscodium />,
      name: "VS Code",
      href: "https://code.visualstudio.com",
    },
  ],

  // Languages
  [
    "Kotlin",
    { icon: <SiKotlin />, name: "Kotlin", href: "https://kotlinlang.org" },
  ],
]);

export const NON_STACK_TOOLS = [
  "Github",
  "VS Code",
  "Yarn",
  "PostgreSQL",
  "Node.js",
];

export const SERVICES = [
  {
    icon: <HiOutlineGlobeAlt />,
    title: "Web Development",
    paragraph: "Bringing ideas to life with robust and scalable web solutions.",
  },
  {
    icon: <HiOutlineDevicePhoneMobile />,
    title: "Mobile Development",
    paragraph: "Creating seamless mobile experiences that delight users.",
  },
  {
    icon: <HiOutlineChartBarSquare />,
    title: "SEO Optimization",
    paragraph: "Boosting your online presence with effective SEO strategies.",
  },
];

export const PROJECT_STATUS = ["completed", "ongoing", "paused"];

export const TOAST_STATUS = {
  success: <HiOutlineCheckCircle className="text-green-500" />,
  error: <HiOutlineXMark className="text-red-500" />,
  info: <HiOutlineInformationCircle className="text-blue-500" />,
  warning: <HiOutlineExclamationCircle className="text-yellow-500" />,
};

export const SHARE_PLATFORMS = [
  {
    id: "twitter",
    icon: <SiX className="text-xl xl:text-2xl group-hover:text-primary" />,
    ShareButton: TwitterShareButton,
  },
  {
    id: "whatsapp",
    icon: (
      <SiWhatsapp className="text-xl xl:text-2xl group-hover:text-primary" />
    ),
    ShareButton: WhatsappShareButton,
  },
  {
    id: "facebook",
    icon: (
      <SiFacebook className="text-xl xl:text-2xl group-hover:text-primary" />
    ),
    ShareButton: FacebookShareButton,
  },
  {
    id: "linkedin",
    icon: (
      <SiLinkedin className="text-xl xl:text-2xl group-hover:text-primary" />
    ),
    ShareButton: LinkedinShareButton,
  },
  {
    id: "telegram",
    icon: (
      <SiTelegram className="text-xl xl:text-2xl group-hover:text-primary" />
    ),
    ShareButton: TelegramShareButton,
  },
  {
    id: "email",
    icon: (
      <HiEnvelope className="text-xl xl:text-2xl group-hover:text-primary" />
    ),
    ShareButton: EmailShareButton,
  },
];

export const FORMS = {
  contact: {
    fields: { name: "", email: "", message: "" },
    rules: {
      name: (value) =>
        value.length > 2 ? "" : "Name must be longer than 2 characters!",
      email: (value) => {
        return value.match(EMAIL_PATTERN)
          ? ""
          : "Please enter a valid email address";
      },
      message: (value) =>
        value.length > 10 ? "" : "Message must be longer than 10 characters!",
    },
  },
};

export const PROJECTS = [
  {
    index: 1,
    mainImage: SpringBoot,
    title: "MediConnect",
    status: "completed",
    href: null,
    source: "GitHub_link",
    description: "A microservices-based healthcare system enabling patients to manage appointments and medical records.",
    tech: ["React.js", "Java", "Spring Boot", "Kafka", "Docker", "Kubernetes"],
    slug: "mediconnect",
    date: "2024-01-17",
    featured: true,
  },
  {
    index: 2,
    mainImage: MERN,
    title: "Akre Real Estate",
    status: "ongoing",
    href: null,
    source: "GitHub_link",
    description: "A responsive real estate web application with interactive map functionalities and property search.",
    tech: ["React.js", "Redux", "Tailwind CSS"],
    slug: "akre-real-estate",
    date: "2024-08-20",
    featured: true,
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    "role": "Software Engineer",
    "company": "Bosch Global Software Technologies",
    "duration": "Jan 2023 - Present",
    "location": "Bangalore, India",
    status: "ongoing",
    type: "MNC",
    "responsibilities": [
      "Designed and developed scalable web applications.",
      "Implemented microservices architecture to optimize backend performance.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Conducted code reviews and implemented best coding practices."
    ],
    "techStack": ["JavaScript", "React", "Node.js", "MongoDB", "cpp", "Java", "Spring Boot", "Docker", "Kubernetes"]
  },
]

export const BLOGS = [
  {
    id: 1,
    title:
      "The Strangler Fig Pattern: A Step-by-Step Guide to Migrating from Monolith to Microservices",
    author: "Muralidhara Bhat KS",
    date: "2025-01-01",
    content: [
      "### Introduction",
      "Legacy monolithic applications often become bottlenecks—difficult to scale, costly to maintain, and resistant to change. A complete rewrite is risky, expensive, and time-consuming. The Strangler Fig Pattern offers a safe, incremental approach to modernizing applications by gradually replacing monolith components with microservices. Instead of a 'big bang' rewrite, this method enables zero-downtime migration, reducing risk while ensuring business continuity.",
      "",
      "### 1. What Is the Strangler Fig Pattern?",
      "**Inspired by Nature**: Just like the strangler fig tree grows around a host tree and eventually replaces it, new microservices are introduced alongside the monolith and gradually take over its functionality.",
      "",
      "#### Diagram: Before vs. After Migration",
      "```mermaid",
      "graph TD",
      "    A[Monolith\\n(User Auth, Payments, Inventory)] --> B[Database]",
      "    C[API Gateway] --> D[User Auth Microservice]",
      "    C --> E[Payments Microservice]",
      "    C --> F[Legacy Monolith\\n(Remaining Features)]",
      "    D --> G[Auth DB]",
      "    E --> H[Payments DB]",
      "    F --> B",
      "```",
      "",
      "### 2. How It Works: Step-by-Step Migration",
      "**Phase 1: Identify Extractable Modules**",
      "Start with loosely coupled features (e.g., user authentication) and avoid migrating core business logic initially to minimize risk.",
      "",
      "| Module          | Complexity | Risk  | Priority |",
      "|-----------------|------------|-------|----------|",
      "| User Auth       | Low        | Low   | High     |",
      "| Payment Gateway | Medium     | Medium| Medium   |",
      "| Order History   | High       | High  | Low      |",
      "",
      "**Phase 2: Implement API Gateway for Traffic Routing**",
      "Set up an API Gateway (e.g., Kong, AWS API Gateway, Traefik, or Nginx) to manage dynamic routing between the monolith and new microservices.",
      "",
      "```yaml",
      "# Example Kong API Gateway configuration",
      "- name: auth-route",
      "  paths: ['/auth']",
      "  service: auth-service",
      "- name: legacy-route",
      "  paths: ['/']",
      "  service: legacy-monolith",
      "```",
      "",
      "**Phase 3: Extract & Deploy Microservices**",
      "For example, extract the 'User Authentication' feature:",
      "",
      "**Before Migration (Monolith):**",
      "```http",
      "POST /auth/login",
      "Host: monolith.example.com",
      "```",
      "",
      "**After Migration (Microservice-Based):**",
      "```http",
      "POST /auth/login",
      "Host: auth-service.example.com",
      "```",
      "",
      "#### Updated Architecture",
      "```mermaid",
      "graph TD",
      "    A[Client] --> B[API Gateway]",
      "    B --> C[Auth Microservice]",
      "    B --> D[Legacy Monolith]",
      "    C --> E[Auth Database]",
      "    D --> F[Monolith DB]",
      "```",
      "",
      "**Phase 4: Gradually Shift Traffic & Monitor**",
      "Adopt strategies like canary deployments, feature flags, or blue-green deployments to safely transition traffic. For instance:",
      "",
      "| Phase | % Requests to Microservice | Monitoring Focus |",
      "|-------|----------------------------|------------------|",
      "| 1     | 10%                        | Latency, Errors  |",
      "| 2     | 50%                        | Performance      |",
      "| 3     | 100%                       | Full Cutover     |",
      "",
      "Use tools like Prometheus, Grafana, and Jaeger for effective monitoring.",
      "",
      "**Phase 5: Repeat Until Monolith Is Decommissioned**",
      "Continue extracting services (Payments, Inventory, etc.) until the legacy monolith can be safely retired.",
      "",
      "### 3. Real-World Examples",
      "**Amazon** started with a monolithic shopping cart and migrated functionalities like recommendations, checkout, and payments to microservices, eventually operating at hyper-scale with thousands of services.",
      "",
      "**Netflix** transitioned from a data center monolith to AWS-based microservices, leveraging the Strangler Fig Pattern for zero-downtime migration.",
      "",
      "### 4. Common Challenges & Solutions",
      "| Challenge               | Solution                          |",
      "|-------------------------|-----------------------------------|",
      "| Data Consistency        | Event Sourcing (e.g., Kafka)      |",
      "| Dependency Hell         | API Contracts (e.g., OpenAPI)     |",
      "| Performance Issues      | Caching & Load Balancing          |",
      "| Testing Complexity      | Contract Testing (e.g., Pact)     |",
      "",
      "### 5. Conclusion",
      "The Strangler Fig Pattern is a proven, incremental approach to modernizing legacy systems. By replacing one module at a time, you can minimize risk and ensure business continuity while moving toward a microservices-based architecture.",
      "",
      "**Next Steps:**",
      "- Identify a low-risk module for extraction.",
      "- Set up an API Gateway for dynamic routing.",
      "- Start small, monitor results, and iterate.",
      "",
      "🚀 **Need help?** Consider tools like Kong, Istio, or AWS App Mesh for smoother migrations.",
      "",
      "### Further Reading & Resources",
      "- [Martin Fowler’s Strangler Fig Pattern](https://martinfowler.com/bliki/StranglerFigApplication.html)",
      "- [AWS Microservices Best Practices](https://aws.amazon.com/microservices/)",
      "- [Netflix Tech Blog](https://netflixtechblog.com/)"
    ],
    tags: [
      "Microservices",
      "Strangler Fig Pattern",
      "Legacy Migration",
      "Architecture"
    ],
    slug: "strangler-fig-pattern-guide",
    image: STRANGLER_FIG,
    excerpt:
      "A comprehensive guide on incrementally modernizing legacy systems using the Strangler Fig Pattern—learn how to migrate from a monolith to microservices safely.",
    readTime: "8 min read"
  }
];