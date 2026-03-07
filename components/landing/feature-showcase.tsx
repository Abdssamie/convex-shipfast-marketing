"use client";

import Image from "next/image";
import { Section } from "../ui/section";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { BlocksIcon } from "lucide-react";

const showcaseData = {
    tagline: "Core Functionality",
    title: "Everything you need out of the box",
    description: "Stop rebuilding the same foundational systems. FluxKit provides you with a robust, production-ready starting point.",
    features: [
        {
            id: "landing",
            title: "Stunning Landing Pages",
            description: "Your product deserves to be showcased beautifully. Build trust and convert visitors with responsive, modern, and accessible layouts that highlight your unique value proposition from the first scroll.",
            media: {
                type: "image",
                src: "/landing-page-preview.png",
                alt: "Landing Page Preview",
            },
        },
        {
            id: "dashboard",
            title: "Powerful Dashboard Interfaces",
            description: "Provide your users with a comprehensive view of their data. Our dashboard components are tailored for SaaS analytics, offering interactive charts, clear metrics, and intuitive navigation out of the box.",
            media: {
                type: "image",
                src: "/dashboard-preview.png",
                alt: "Dashboard Preview",
            },
        },
        {
            id: "customization",
            title: "Limitless Customization",
            description: "Adapt the look and feel to your brand effortlessly. The built-in theme customizer allows you to toggle dark mode, tweak primary colors, and adjust border radiuses without writing a single line of CSS.",
            media: {
                type: "video",
                src: "/theme-customized-showcase-video.mp4",
            },
        },
    ]
};

export function FeatureShowcase() {
    return (
        <Section className="py-16 md:py-24 overflow-hidden">
            <Container>

                <div className="flex flex-col gap-12 md:gap-16">
                    {showcaseData.features.map((feature, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={feature.id} className="flex flex-col mb-16 md:mb-24">
                                {/* Section Header (Repeated above each card) */}
                                <div className="mb-6 md:mb-8 max-w-3xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <BlocksIcon className="w-4 h-4 text-blue-500" />
                                        <span className="text-blue-500 text-sm font-medium">{showcaseData.tagline}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                                        {showcaseData.title}
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {showcaseData.description}
                                    </p>
                                </div>

                                <div
                                    className={cn(
                                        "w-full flex flex-col lg:flex-row items-stretch rounded-[2rem] border border-border/40 bg-[#111111] overflow-hidden shadow-2xl",
                                        !isEven && "lg:flex-row-reverse"
                                    )}
                                >
                                    {/* Left Column: Text Content */}
                                    <div className="w-full lg:w-[40%] flex flex-col justify-center p-8 md:p-12 lg:p-16">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground tracking-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Right Column: Media Display */}
                                    <div className="w-full lg:w-[60%] relative flex items-center justify-center bg-[#1a1a1a] border-t lg:border-t-0 border-border/20 p-6 md:p-10 lg:p-12">
                                        {/* The glowing effect behind the media */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-2xl opacity-40 pointer-events-none" />

                                        <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-black transform transition-transform hover:scale-[1.01] duration-500">
                                            {feature.media.type === "image" ? (
                                                <img
                                                    src={feature.media.src}
                                                    alt={feature.media.alt!}
                                                    className="w-full h-auto block"
                                                />
                                            ) : (
                                                <video
                                                    src={feature.media.src}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-auto block"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
