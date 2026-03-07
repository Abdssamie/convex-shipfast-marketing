import { AlertCircle, Mail } from "lucide-react";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { legalConfig, legalLastUpdated } from "@/config/legal";

export default function TermsPage() {
    const { company, product, terms: termsSection } = legalConfig;

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 mt-20">
                <div className="container mx-auto px-4 max-w-4xl py-16 sm:py-24">
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-8 sm:p-12">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Terms of Service</h1>
                            <p className="text-muted-foreground">
                                Last updated: {legalLastUpdated}
                            </p>
                        </div>

                        <div className="space-y-12">
                            <section id="introduction" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">1. Introduction</h2>
                                <div className="space-y-4">
                                    <p>
                                        These Terms of Service govern the use of the {company.name} services. By accessing our platform, you agree to be bound by these terms.
                                    </p>
                                    <p>
                                        <span className="font-medium text-foreground">{company.name}</span> is a {product.type} platform that provides: {product.description}
                                    </p>
                                    <p>
                                        Our service is aimed primarily at: {product.targetAudience}
                                    </p>
                                </div>
                            </section>

                            <section id="acceptance" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">2. Acceptance of Terms</h2>
                                <div className="space-y-4">
                                    <p>
                                        By accessing {company.website} and using our services, you acknowledge that you have read, understood, and agree to our Terms of Service.
                                    </p>
                                    {termsSection.acceptance.required && (
                                        <div className="flex items-start gap-2 p-4 bg-muted/50 rounded-lg">
                                            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <p className="text-sm">
                                                <span className="font-semibold">Method of acceptance:</span> {termsSection.acceptance.method}
                                            </p>
                                        </div>
                                    )}
                                    <p>If you do not agree to these terms, please do not use our services.</p>
                                </div>
                            </section>

                            <section id="eligibility" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">3. Eligibility</h2>
                                <p>
                                    You must be at least {termsSection.ageRestriction} years old to use our services. By using {company.name}, you represent and warrant that you meet this age requirement.
                                </p>
                            </section>

                            {termsSection.account.required && (
                                <section id="account" className="scroll-mt-24">
                                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">4. User Account</h2>
                                    <div className="space-y-4">
                                        <p>To access certain features, account creation is required. By creating an account, you agree to:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            {termsSection.account.obligations.map((obligation, index) => (
                                                <li key={index}>{obligation}</li>
                                            ))}
                                        </ul>
                                        <p className="text-sm text-muted-foreground mt-4">
                                            You are responsible for maintaining the confidentiality of your login information and for any activity conducted through your account.
                                        </p>
                                    </div>
                                </section>
                            )}

                            <section id="services" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">5. Description of Services</h2>
                                <div className="space-y-6">
                                    <p>{termsSection.service.description}</p>

                                    <div>
                                        <h3 className="font-medium mb-3">Included features:</h3>
                                        <ul className="list-disc pl-6 space-y-1">
                                            {termsSection.service.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium mb-3">Service limits:</h3>
                                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                                            {termsSection.service.limitations.map((limitation, index) => (
                                                <li key={index}>{limitation}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {termsSection.payment.required && (
                                <section id="payment" className="scroll-mt-24">
                                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">6. Payment Terms</h2>
                                    <div className="space-y-4">
                                        <p>Our service is provided on a paid basis. Accepted payment methods are:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            {termsSection.payment.methods.map((method, index) => (
                                                <li key={index}>{method}</li>
                                            ))}
                                        </ul>
                                        <div className="p-4 bg-muted/30 rounded-lg mt-4">
                                            <p><span className="font-semibold">Refund policy:</span> {termsSection.payment.refund}</p>
                                        </div>
                                    </div>
                                </section>
                            )}

                            <section id="intellectual-property" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">7. Intellectual Property</h2>
                                <div className="space-y-4">
                                    <p>{termsSection.intellectualProperty.ownership}</p>
                                    <div>
                                        <h3 className="font-medium mb-2">Restrictions:</h3>
                                        <ul className="list-disc pl-6 space-y-1">
                                            {termsSection.intellectualProperty.restrictions.map((restriction, index) => (
                                                <li key={index}>{restriction}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section id="liability" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">8. Limitation of Liability</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-medium mb-2">Caps & Limits:</h3>
                                        <ul className="list-disc pl-6 space-y-1">
                                            {termsSection.liability.limitations.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-2">Exclusions:</h3>
                                        <ul className="list-disc pl-6 space-y-1">
                                            {termsSection.liability.exclusions.map((exclusion, index) => (
                                                <li key={index}>{exclusion}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section id="termination" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">9. Termination</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-medium mb-2">Conditions for termination:</h3>
                                        <ul className="list-disc pl-6 space-y-1">
                                            {termsSection.termination.conditions.map((condition, index) => (
                                                <li key={index}>{condition}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-muted border rounded-lg">
                                        <p><span className="font-semibold">Consequences:</span> {termsSection.termination.consequences}</p>
                                    </div>
                                </div>
                            </section>

                            <section id="modifications" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">10. Modifications</h2>
                                <p>
                                    We reserve the right to modify these terms at any time. Any modifications will take effect upon their publication on this page. Continued use of our services constitutes acceptance of the new terms.
                                </p>
                            </section>

                            <section id="contact" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">11. Contact</h2>
                                <p className="mb-4">{termsSection.contact}</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-muted-foreground" />
                                        <span>{company.email}</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
