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

export const BENEFITS = [
  "Speed Delivery",
  "Custom Solutions",
  "Continuous Improvement",
  "Exceptional Quality",
  "Strategic Planning",
  "Security",
  "24/7 Support",
  "Cost-Effective Solutions",
  "Timely Communication",
  "User-Centric Design",
  "Scalability",
  "Flexibility",
  "Innovation",
  "Collaboration",
  "Agile Development",
  "Performance Optimization",
  "Cross-Platform Compatibility",
  "Accessibility",
  "Data Privacy",
  "Technical Expertise",
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
