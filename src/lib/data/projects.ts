import type { IProject } from "$lib/types/Project";
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
        OpenBookIcon
	} from '$lib/icons';


export const PROJECTS: IProject[] = [
    {
        title: 'Tao Mod Manager',
        description:
            "Tao Mod Manager it's a desktop app developer in Electron for inject, manage and execute 3D models in Genshin Impact game.",
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
        title: 'Groovebox',
        description:
            "Groovebox it's the final project of my studies. It's a web for download, manage, share and listening mixes produced by DJ's with high quality.",
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
        title: 'Cerebritos',
        description:
            "We're developing a platform for children with the purpose of try motivate them to improve with different activities, where they can get codes to redeem and get points to exchange for prizes.",
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
                url: 'https://github.com/Tomhuel/Cerebritos',
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
        title: "School's API",
        description:
            'API REST with good practices to learn Spring Boot, Spring Data, Spring Security and Postman Integration Tests.',
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
        description: 'Discord Bot',
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