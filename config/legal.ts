export interface LegalConfig {
    company: {
        name: string;
        legalForm: string;
        registrationNumber: string;
        address: string;
        representative: string;
        email: string;
        phone: string;
        website: string;
        dpo?: string;
        jurisdiction: "US" | "UK" | "EU" | "INT";
    };
    product: {
        name: string;
        description: string;
        type: "saas" | "boilerplate" | "ecommerce" | "platform" | "website";
        targetAudience: string;
        features: string[];
    };
    cookies: {
        necessary: { enabled: boolean; items: { name: string; purpose: string; duration: string }[] };
        analytics: { enabled: boolean; provider: string; items: { name: string; purpose: string; duration: string }[] };
        advertising: { enabled: boolean; items: { name: string; purpose: string; duration: string }[] };
        social: { enabled: boolean; items: { name: string; purpose: string; duration: string }[] };
        functional: { enabled: boolean; items: { name: string; purpose: string; duration: string }[] };
        cmp: string;
        consentDuration: number;
    };
    privacy: {
        dataController: {
            identity: string;
            address: string;
            representative: string;
            email: string;
            phone: string;
            dpo?: string;
        };
        dataCollection: {
            categories: { name: string; items: string[]; purpose: string; legalBasis: string; }[];
        };
        processing: {
            purposes: { purpose: string; basis: string; retention: string }[];
        };
        recipients: {
            internal: string[];
            external: { name: string; purpose: string; location: string }[];
        };
        internationalTransfer: {
            enabled: boolean;
            countries: string[];
            mechanism: string;
        };
        security: string;
        rights: {
            list: string[];
            exercise: string;
            responseTime: string;
        };
    };
    terms: {
        acceptance: { required: boolean; method: string; };
        ageRestriction: number;
        account: { required: boolean; obligations: string[]; };
        service: { description: string; features: string[]; limitations: string[]; };
        payment: { required: boolean; methods: string[]; refund: string; };
        liability: { limitations: string[]; exclusions: string[]; };
        intellectualProperty: { ownership: string; restrictions: string[]; };
        termination: { conditions: string[]; consequences: string; };
        contact: string;
    };
}

// Helper to get analytics provider info based on environment
function getAnalyticsConfig() {
    const provider = "none";
    const enabled = false;

    const providerNames: Record<string, string> = {
        umami: "Umami Analytics",
        rybbit: "Rybbit Analytics",
        none: "None",
    };

    const items = enabled
        ? [{ name: "Analytics (localStorage)", purpose: "Anonymous audience analysis", duration: "Local storage only" }]
        : [];

    return { enabled, provider: providerNames[provider] || "None", items };
}

export const legalConfig: LegalConfig = {
    company: {
        name: "FluxKit",
        legalForm: "LLC",
        registrationNumber: "Pending",
        address: "Online",
        representative: "FluxKit Team",
        email: "contact@fluxkit.dev",
        phone: "N/A",
        website: "https://fluxkit.dev",
        dpo: "dpo@fluxkit.dev",
        jurisdiction: "US",
    },
    product: {
        name: "FluxKit",
        description: "FluxKit is a premium SaaS boilerplate that helps developers build applications faster. Our all-in-one solution includes authentication, payments, and a real-time database.",
        type: "boilerplate",
        targetAudience: "Developers and startups",
        features: [
            "Complete Authentication",
            "Payments via Stripe/Polar",
            "Convex Database",
            "Shadcn UI Interface",
            "Professional Email Sending",
        ],
    },
    cookies: {
        necessary: {
            enabled: true,
            items: [
                { name: "Session", purpose: "Maintain user session", duration: "Session" },
                { name: "Authentication", purpose: "Secure account access", duration: "12 months" },
                { name: "Security", purpose: "CSRF Protection", duration: "Session" },
            ],
        },
        analytics: getAnalyticsConfig(),
        advertising: { enabled: false, items: [] },
        social: { enabled: false, items: [] },
        functional: {
            enabled: true,
            items: [
                { name: "Preferences", purpose: "Interface customization", duration: "12 months" },
            ],
        },
        cmp: "Custom",
        consentDuration: 6,
    },
    privacy: {
        dataController: {
            identity: "FluxKit",
            address: "Online",
            representative: "FluxKit Team",
            email: "contact@fluxkit.dev",
            phone: "N/A",
            dpo: "dpo@fluxkit.dev",
        },
        dataCollection: {
            categories: [
                {
                    name: "Identification Data",
                    items: ["First Name", "Last Name", "Email Address", "GitHub Handle"],
                    purpose: "Account creation, communication, granting repository access",
                    legalBasis: "Performance of a contract",
                },
                {
                    name: "Connection Data",
                    items: ["IP Address", "Connection Logs", "Browser Type"],
                    purpose: "Security, technical analysis",
                    legalBasis: "Legitimate interest",
                },
                {
                    name: "Transaction Data",
                    items: ["Order History"],
                    purpose: "Order fulfillment, billing",
                    legalBasis: "Performance of a contract",
                },
            ],
        },
        processing: {
            purposes: [
                { purpose: "User account management", basis: "Performance of a contract", retention: "Duration of the relationship + 3 years" },
                { purpose: "Payment processing", basis: "Performance of a contract", retention: "10 years (legal obligation)" },
                { purpose: "Customer support", basis: "Legitimate interest", retention: "Duration of the relationship + 3 years" },
            ],
        },
        recipients: {
            internal: ["Technical Team", "Support Team"],
            external: [
                { name: "Vercel", purpose: "Hosting", location: "USA (DPF)" },
                { name: "Convex", purpose: "Database", location: "USA (DPF)" },
                { name: "Polar/Stripe", purpose: "Payment", location: "USA (DPF)" },
            ],
        },
        internationalTransfer: {
            enabled: true,
            countries: ["United States"],
            mechanism: "Data Privacy Framework (DPF) and standard contractual clauses",
        },
        security: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, modification, disclosure, or destruction.",
        rights: {
            list: [
                "Right of access",
                "Right to rectification",
                "Right to erasure",
                "Right to restriction of processing",
                "Right to data portability",
                "Right to object",
            ],
            exercise: "By email at contact@fluxkit.dev",
            responseTime: "Maximum 1 month",
        },
    },
    terms: {
        acceptance: {
            required: true,
            method: "Checking the 'I accept the Terms of Service' box during registration",
        },
        ageRestriction: 13,
        account: {
            required: true,
            obligations: [
                "Provide accurate and complete information",
                "Keep credentials confidential",
                "Notify of any unauthorized use",
            ],
        },
        service: {
            description: "FluxKit provides a software development boilerplate to accelerate web application creation.",
            features: [
                "Ready-to-use UI Components",
                "Pre-configured authentication",
                "Payment integration",
                "GitHub repository access",
            ],
            limitations: [
                "Prohibited from redistributing the source code as a boilerplate or direct competitor",
            ],
        },
        payment: {
            required: true,
            methods: ["Credit Card (Stripe/Polar)"],
            refund: "No refunds after downloading or accessing the source code.",
        },
        liability: {
            limitations: [
                "FluxKit's liability is capped at the amount paid by the customer.",
            ],
            exclusions: [
                "Indirect damages",
                "Loss of profits",
            ],
        },
        intellectualProperty: {
            ownership: "Apart from the license granted to the user, FluxKit retains all rights to its proprietary source code.",
            restrictions: [
                "Prohibited from redistributing the boilerplate",
                "Prohibited from creating direct competing products",
            ],
        },
        termination: {
            conditions: [
                "Violation of these terms of use",
            ],
            consequences: "Immediate suspension of the license and access to updates.",
        },
        contact: "For any questions, contact us at contact@fluxkit.dev",
    },
};
