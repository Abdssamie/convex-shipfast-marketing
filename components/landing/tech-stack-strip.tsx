import { Section } from "../ui/section";
import { Container } from "./container";

export function TechStackStrip() {
    const technologies = [
        {
            name: "Next.js",
            version: "16.1.1",
            icon: "https://cdn.simpleicons.org/nextdotjs",
            invertOnDark: true,
        },
        {
            name: "React",
            version: "19.2.3",
            icon: "https://cdn.simpleicons.org/react",
        },
        {
            name: "TypeScript",
            version: "5.9.3",
            icon: "https://cdn.simpleicons.org/typescript",
        },
        {
            name: "Convex",
            version: "1.32.0",
            icon: "https://www.convex.dev/favicon.ico",
        },
        {
            name: "Better Auth",
            version: "1.4.9",
            icon: "/better-auth_light.svg",
            darkIcon: "/better-auth_dark.svg",
        },
        {
            name: "shadcn/ui",
            version: "Radix UI",
            icon: "https://cdn.simpleicons.org/shadcnui",
            invertOnDark: true,
        },
        {
            name: "Tailwind",
            version: "4.1.18",
            icon: "https://cdn.simpleicons.org/tailwindcss",
        },
        {
            name: "Bun",
            version: "latest",
            icon: "https://cdn.simpleicons.org/bun/f9f1e1",
        },
    ];

    return (
        <Section className="py-8 sm:py-12">
            <Container>
                <div className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6">
                    <p className="inline-flex rounded-full border border-orange-300/70 bg-orange-100/70 px-4 py-1 text-xs font-semibold tracking-wide text-orange-700 dark:border-orange-500/50 dark:bg-orange-500/10 dark:text-orange-300">
                        Last updated: 06 Mar 2026
                    </p>
                    <h2 className="mt-6 text-2xl leading-tight font-semibold sm:text-4xl">
                        Built with industry-standard tools and best practices
                    </h2>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="inline-flex items-center gap-2 text-sm sm:text-base"
                            >
                                {"darkIcon" in tech ? (
                                    <>
                                        <img
                                            src={tech.icon}
                                            alt={`${tech.name} logo`}
                                            width={22}
                                            height={22}
                                            className="dark:hidden"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <img
                                            src={tech.darkIcon}
                                            alt={`${tech.name} logo`}
                                            width={22}
                                            height={22}
                                            className="hidden dark:block"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </>
                                ) : (
                                    <img
                                        src={tech.icon}
                                        alt={`${tech.name} logo`}
                                        width={22}
                                        height={22}
                                        className={tech.invertOnDark ? "dark:invert" : undefined}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                )}
                                <span className="font-medium">{tech.name}</span>
                                <span className="text-muted-foreground">{tech.version}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
