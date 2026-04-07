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
    PostmanIcon,
    PostgreSqlIcon,
    SwaggerIcon,
    DockerIcon,
    OpenBookIcon,
    BitsUiIcon,
    VercelIcon,
    GlobeIcon,
    SupabaseIcon,
    SpringIcon
} from '$lib/icons';

export function getTranslatedProjects(t: (key: string) => string): IProject[] {
    return [
        {
            title: t('projectDetails.items.taoModManager.title'),
            type: t('projectDetails.items.taoModManager.type'),
            description: t('projectDetails.items.taoModManager.description'),
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
                    name: t('projectDetails.links.github'),
                    url: 'https://github.com/Tomhuel/TaoModManager',
                    icon: GithubIcon
                },
                {
                    name: t('projectDetails.links.download'),
                    url: 'https://github.com/Tomhuel/TaoModManager/releases/latest',
                    icon: DownloadIcon
                },
                {
                    name: t('projectDetails.links.documentation'),
                    url: 'https://deepwiki.com/Tomhuel/TaoModManager',
                    icon: OpenBookIcon
                }
            ]
        },
        {
            title: t('projectDetails.items.cerebritos.title'),
            type: t('projectDetails.items.cerebritos.type'),
            description: t('projectDetails.items.cerebritos.description'),
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
                    name: t('projectDetails.links.website'),
                    url: 'https://cerebritos.org',
                    icon: GlobeIcon
                }
            ]
        },
        {
            title: t('projectDetails.items.groovebox.title'),
            type: t('projectDetails.items.groovebox.type'),
            description: t('projectDetails.items.groovebox.description'),
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
                    name: t('projectDetails.links.github'),
                    url: 'https://github.com/Tomhuel/GrooveBox',
                    icon: GithubIcon
                },
                {
                    name: t('projectDetails.links.documentation'),
                    url: 'https://deepwiki.com/Tomhuel/GrooveBox',
                    icon: OpenBookIcon
                }
            ]
        },
        {
            title: t('projectDetails.items.cerebritosLegacy.title'),
            type: t('projectDetails.items.cerebritosLegacy.type'),
            description: t('projectDetails.items.cerebritosLegacy.description'),
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
                    name: t('projectDetails.links.github'),
                    url: 'https://github.com/Tomhuel/CerebritosApp',
                    icon: GithubIcon
                },
                {
                    name: t('projectDetails.links.documentation'),
                    url: 'https://deepwiki.com/Tomhuel/Cerebritos',
                    icon: OpenBookIcon
                }
            ]
        },
        {
            title: t('projectDetails.items.simplifico.title'),
            type: t('projectDetails.items.simplifico.type'),
            description: t('projectDetails.items.simplifico.description'),
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
                    name: t('projectDetails.links.website'),
                    url: 'https://simplificotutrabajo.es',
                    icon: GlobeIcon
                }
            ]
        },
        {
            title: t('projectDetails.items.schoolsApi.title'),
            type: t('projectDetails.items.schoolsApi.type'),
            description: t('projectDetails.items.schoolsApi.description'),
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
                    name: t('projectDetails.links.github'),
                    url: 'https://github.com/Tomhuel/Schools-API',
                    icon: GithubIcon
                },
                {
                    name: t('projectDetails.links.documentation'),
                    url: 'https://deepwiki.com/Tomhuel/Schools-API',
                    icon: OpenBookIcon
                }
            ]
        },
        {
            title: t('projectDetails.items.taobot.title'),
            type: t('projectDetails.items.taobot.type'),
            description: t('projectDetails.items.taobot.description'),
            thumbnail: '/thumbnails/taobot.png',
            technologies: [
                { name: 'TypeScript', icon: TsIcon },
                { name: 'SQLite', icon: SqliteIcon },
                { name: 'NodeJS', icon: NodeJsIcon },
                { name: 'Prisma', icon: PrismaIcon }
            ],
            links: [
                {
                    name: t('projectDetails.links.github'),
                    url: 'https://github.com/Tomhuel/TaoBot',
                    icon: GithubIcon
                },
                {
                    name: t('projectDetails.links.documentation'),
                    url: 'https://deepwiki.com/Tomhuel/TaoBot',
                    icon: OpenBookIcon
                }
            ]
        }
    ];
}
