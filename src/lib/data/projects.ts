import type { IProject } from "$lib/types/Project";
import TailwindCSSIcon from '$lib/icons/TailwindCSSIcon.svelte';
import {
    CssIcon,
    HtmlIcon,
    NodeJsIcon,
    SvelteIcon,
    TsIcon,
    GithubIcon,
    TailwindCss,
    ElectronIcon,
    BootstrapIcon,
    PhpIcon,
    LaravelIcon,
    MysqlIcon,
    JsIcon,
    ReactIcon,
    NextJsIcon,
    JwtIcon,
    SqliteIcon,
    PrismaIcon,
    DownloadIcon,
    JavaIcon,
    SpringIcon,
    PostmanIcon,
    PostgreSqlIcon,
    SwaggerIcon,
    DockerIcon,
    OpenBookIcon,
    BitsUiIcon,
    VercelIcon,
    GlobeIcon,
    SupabaseIcon
} from '$lib/icons';


export const PROJECTS: IProject[] = [
    {
        title: 'Tao Mod Manager',
        type: 'Side project',
        description:
            "TaoModManager is a desktop app built with Electron that allows users to manage, decompress, and handle 3D models for Genshin Impact in a controlled environment. The application integrates an external injector tool (not developed by me), provides automatic updates by detecting new GitHub releases, and focuses on delivering a polished, user-friendly interface for mod management. This project showcases desktop development, Electron integration, workflow automation, and update management, while emphasizing responsible usage and clear legal disclaimers in the documentation.",
        thumbnail: '/thumbnails/tao-mod-manager.png',
        technologies: [
            { name: 'HTML', icon: HtmlIcon },
            { name: 'CSS', icon: CssIcon },
            { name: 'TypeScript', icon: TsIcon },
            { name: 'Svelte', icon: SvelteIcon },
            { name: 'NodeJS', icon: NodeJsIcon },
            { name: 'TailwindCSS', icon: TailwindCss },
            { name: 'Electron', icon: ElectronIcon }
        ],
        links: [
            {
                name: 'Github',
                url: 'https://github.com/Tomhuel/TaoModManager',
                icon: GithubIcon
            },
            {
                name: 'Download',
                url: 'https://github.com/Tomhuel/TaoModManager/releases/latest',
                icon: DownloadIcon
            },
            {
                name: 'Documentation',
                url: 'https://deepwiki.com/Tomhuel/TaoModManager',
                icon: OpenBookIcon
            }
        ]
    },
    {
        title: 'Cerebritos',
        type: 'Work project',
        description:
            "Cerebritos is a gamified educational platform where students can participate in events, track achievements, and redeem rewards, blending learning with motivation. The system supports public and private data visibility, giving students control over their profiles while allowing administrators and monitors to manage content securely. Developed with a modern full-stack architecture, it includes a relational database design, achievement tracking, event management, and a reward system. This project demonstrates skills in database modeling, API design, user management, and gamification, with a strong focus on maintainable and scalable practices.",
        thumbnail: '/thumbnails/cerebritos.png',
        technologies: [
            { name: 'HTML', icon: HtmlIcon },
            { name: 'CSS', icon: CssIcon },
            { name: 'TypeScript', icon: TsIcon },
            { name: 'TailwindCSS', icon: TailwindCSSIcon },
            { name: 'SvelteKit', icon: SvelteIcon },
            { name: 'NodeJS', icon: NodeJsIcon },
            { name: 'Supabase', icon: SupabaseIcon },
            { name: 'PostgreSQL', icon: PostgreSqlIcon },
        ],
        links: [
            {
                name: 'Website',
                url: 'https://cerebritos.org',
                icon: GlobeIcon
            }
        ]
    },
    {
        title: 'Groovebox',
        type: 'Work project',
        description:
            "Final project of my Advanced Web Development program. GrooveBox is a web platform where DJs can upload high-quality audio files (public or private), create and share “Mixlists” (playlists), and allow others to download their mixes. The platform includes user authentication, customizable profiles, and interactive music management. Developed primarily with Laravel and Livewire, it demonstrates full-stack skills with focus on usability and real-time interactivity.",
        thumbnail: '/thumbnails/groovebox.png',
        technologies: [
            { name: 'HTML', icon: HtmlIcon },
            { name: 'CSS', icon: CssIcon },
            { name: 'NodeJS', icon: NodeJsIcon },
            { name: 'Bootstrap 5', icon: BootstrapIcon },
            { name: 'PHP', icon: PhpIcon },
            { name: 'Laravel', icon: LaravelIcon },
            { name: 'MySQL', icon: MysqlIcon }
        ],
        links: [
            {
                name: 'Github',
                url: 'https://github.com/Tomhuel/GrooveBox',
                icon: GithubIcon
            },
            {
                name: 'Documentation',
                url: 'https://deepwiki.com/Tomhuel/GrooveBox',
                icon: OpenBookIcon
            }
        ]
    },
    {
        title: 'Cerebritos (Legacy Full-Stack Version)',
        type: 'Work project',
        description:
            "Initial version of Cerebritos, a gamified educational platform built with Laravel and Next.js. This version focused on validating the core idea and user flows. It later evolved into a redesigned architecture with improved scalability and data modeling. This project helped me understand the challenges of separating services and designing scalable architectures.",
        thumbnail: '/thumbnails/cerebritos.png',
        technologies: [
            { name: 'HTML', icon: HtmlIcon },
            { name: 'CSS', icon: CssIcon },
            { name: 'JavaScript', icon: JsIcon },
            { name: 'Bootstrap 5', icon: BootstrapIcon },
            { name: 'ReactJS', icon: ReactIcon },
            { name: 'NextJS', icon: NextJsIcon },
            { name: 'NodeJS', icon: NodeJsIcon },
            { name: 'Laravel', icon: LaravelIcon },
            { name: 'MySQL', icon: MysqlIcon },
            { name: 'JWT', icon: JwtIcon }
        ],
        links: [
            {
                name: 'Github',
                url: 'https://github.com/Tomhuel/CerebritosApp',
                icon: GithubIcon
            },
            {
                name: 'Documentation',
                url: 'https://deepwiki.com/Tomhuel/Cerebritos',
                icon: OpenBookIcon
            }
        ]
    },
    {
        title: 'Simplifico tu trabajo',
        type: 'Work project',
        description:
            "Professional website built for a real client focused on productivity and business automation. The project aimed to deliver a clean, conversion-focused landing page that clearly communicates value while maintaining strong performance and responsiveness. A real-world freelance project where the focus was aligning technical execution with business needs and user clarity.",
        thumbnail: '/thumbnails/simplifico-tu-trabajo.png',
        technologies: [
            { name: 'HTML', icon: HtmlIcon },
            { name: 'CSS', icon: CssIcon },
            { name: 'TypeScript', icon: TsIcon },
            { name: 'SvelteKit', icon: SvelteIcon },
            { name: 'NodeJS', icon: NodeJsIcon },
            { name: 'TailwindCSS', icon: TailwindCss },
            { name: 'BitsUI', icon: BitsUiIcon },
            { name: 'Vercel', icon: VercelIcon},
        ],
        links: [
            {
                name: 'Website',
                url: 'https://simplificotutrabajo.es',
                icon: GlobeIcon
            }
        ]
    },
    {
        title: "School's API",
        type: 'Side project',
        description:
            'Spring Boot REST API designed as a learning project to explore Java backend development with production-oriented practices. Built with Spring Boot, Spring Data, and introductory Spring Security, the project focuses on clean architecture, layered design, and maintainability. It includes OpenAPI (Swagger) documentation and Postman integration tests, and implements a modular CRUD over multiple related entities, ready to support real business logic.',
        thumbnail: '/thumbnails/schoolsapi.png',
        technologies: [
            { name: 'Java', icon: JavaIcon },
            { name: 'Spring', icon: SpringIcon },
            { name: 'PostgreSQL', icon: PostgreSqlIcon },
            { name: 'Docker', icon: DockerIcon },
            { name: 'Postman', icon: PostmanIcon },
            { name: 'Swagger', icon: SwaggerIcon }
        ],
        links: [
            {
                name: 'Github',
                url: 'https://github.com/Tomhuel/Schools-API',
                icon: GithubIcon
            },
            {
                name: 'Documentation',
                url: 'https://deepwiki.com/Tomhuel/Schools-API',
                icon: OpenBookIcon
            }
        ]
    },
    {
        title: 'TaoBot',
        type: 'Fun project',
        description: 'A lightweight Discord bot built as a fun side project to explore real-time systems and TypeScript best practices. The bot reacts to slash commands and message events, persisting data in a database and experimenting with modular architecture. It was used to learn webhooks, event-driven design, and scalable bot structure while keeping a playful and experimental approach.',
        thumbnail: '/thumbnails/taobot.png',
        technologies: [
            { name: 'TypeScript', icon: TsIcon },
            { name: 'SQLite', icon: SqliteIcon },
            { name: 'NodeJS', icon: NodeJsIcon },
            { name: 'Prisma', icon: PrismaIcon }
        ],
        links: [
            {
                name: 'Github',
                url: 'https://github.com/Tomhuel/TaoBot',
                icon: GithubIcon
            },
            {
                name: 'Documentation',
                url: 'https://deepwiki.com/Tomhuel/TaoBot',
                icon: OpenBookIcon
            }
        ]
    }
];