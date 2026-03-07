import { Mail,ShieldCheck } from "lucide-react";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { legalConfig, legalLastUpdated } from "@/config/legal";

export default function PrivacyPolicyPage() {
    const { company, product, privacy: privacySection } = legalConfig;

    const jurisdictionLabels: Record<string, string> = {
        UK: "Information Commissioner's Office (ICO)",
        EU: "Competent Data Protection Authorities",
        US: "Federal Trade Commission (FTC)",
        INT: "Competent Data Protection Authorities",
    };

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 mt-20">
                <div className="container mx-auto px-4 max-w-4xl py-16 sm:py-24">
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-8 sm:p-12">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Privacy Policy</h1>
                            <p className="text-muted-foreground">
                                Last updated: {legalLastUpdated}
                            </p>
                        </div>

                        <div className="space-y-12">
                            <section id="who-are-we" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">1. Who are we?</h2>
                                <p className="mb-4">The data controller for personal data is:</p>
                                <div className="space-y-2 text-sm md:text-base">
                                    <p className="font-semibold">{privacySection.dataController.identity}</p>
                                    <p>Legal form: {company.legalForm}</p>
                                    <p>Address: {privacySection.dataController.address}</p>
                                    <p>Email: {privacySection.dataController.email}</p>
                                    {privacySection.dataController.dpo && (
                                        <p>Data Protection Officer: {privacySection.dataController.dpo}</p>
                                    )}
                                </div>
                            </section>

                            <section id="introduction" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">2. Introduction</h2>
                                <p className="mb-4">
                                    This privacy policy describes how {company.name} ({company.website}) collects, uses, and protects your personal data in accordance with applicable laws, including the GDPR (if applicable).
                                </p>
                                <p>{product.description}</p>
                            </section>

                            <section id="what-data" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">3. What data do we collect?</h2>
                                <p className="mb-6">We collect different categories of personal data to provide you with our services:</p>

                                <div className="grid gap-4">
                                    {privacySection.dataCollection.categories.map((category) => (
                                        <div key={category.name} className="p-4 rounded-lg border bg-muted/30">
                                            <h3 className="font-semibold mb-2">{category.name}</h3>
                                            <div className="space-y-1 text-sm">
                                                <p><span className="font-medium">Data collected:</span> {category.items.join(", ")}</p>
                                                <p><span className="font-medium">Purpose:</span> {category.purpose}</p>
                                                <p><span className="font-medium">Legal Basis:</span> {category.legalBasis}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="why-use-data" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">4. Why do we use your data?</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left border-collapse border">
                                        <thead className="bg-muted text-muted-foreground uppercase">
                                            <tr>
                                                <th className="px-6 py-3 border">Purpose</th>
                                                <th className="px-6 py-3 border">Legal Basis</th>
                                                <th className="px-6 py-3 border">Retention Period</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {privacySection.processing.purposes.map((item) => (
                                                <tr key={item.purpose} className="bg-card border-b">
                                                    <td className="px-6 py-4 border font-medium">{item.purpose}</td>
                                                    <td className="px-6 py-4 border">{item.basis}</td>
                                                    <td className="px-6 py-4 border">{item.retention}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section id="who-receives" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">5. Who receives your data?</h2>

                                <h3 className="font-medium mb-3">Internal recipients:</h3>
                                <ul className="list-disc pl-6 mb-6 space-y-1">
                                    {privacySection.recipients.internal.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>

                                <h3 className="font-medium mb-3">External recipients (processors):</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left border-collapse border">
                                        <thead className="bg-muted text-muted-foreground uppercase">
                                            <tr>
                                                <th className="px-6 py-3 border">Provider</th>
                                                <th className="px-6 py-3 border">Purpose</th>
                                                <th className="px-6 py-3 border">Location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {privacySection.recipients.external.map((item) => (
                                                <tr key={item.name} className="bg-card border-b">
                                                    <td className="px-6 py-4 border font-medium">{item.name}</td>
                                                    <td className="px-6 py-4 border">{item.purpose}</td>
                                                    <td className="px-6 py-4 border">{item.location}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {privacySection.internationalTransfer.enabled && (
                                <section id="transfers" className="scroll-mt-24">
                                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">6. International Transfers</h2>
                                    <p className="mb-4">Your data may be transferred to countries outside the EU/EEA. These transfers are governed by:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                        <li><span className="font-medium">Destination countries:</span> {privacySection.internationalTransfer.countries.join(", ")}</li>
                                        <li><span className="font-medium">Mechanism:</span> {privacySection.internationalTransfer.mechanism}</li>
                                    </ul>
                                </section>
                            )}

                            <section id="security" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">7. Data Security</h2>
                                <div className="flex items-start gap-4">
                                    <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <p>{privacySection.security}</p>
                                </div>
                            </section>

                            <section id="rights" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">8. What are your rights?</h2>
                                <p className="mb-4">In accordance with applicable privacy laws, you have the following rights:</p>
                                <ul className="list-disc pl-6 mb-6 space-y-1">
                                    {privacySection.rights.list.map((right) => (
                                        <li key={right}>{right}</li>
                                    ))}
                                </ul>
                                <div className="space-y-2 text-sm md:text-base p-4 bg-muted/30 rounded-lg">
                                    <p><span className="font-medium">Exercising your rights:</span> {privacySection.rights.exercise}</p>
                                    <p><span className="font-medium">Response time:</span> {privacySection.rights.responseTime}</p>
                                </div>
                                {company.jurisdiction && jurisdictionLabels[company.jurisdiction] && (
                                    <p className="mt-4 text-sm text-muted-foreground">
                                        You also have the right to lodge a complaint with the {jurisdictionLabels[company.jurisdiction]}.
                                    </p>
                                )}
                            </section>

                            <section id="contact" className="scroll-mt-24">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">9. Contact</h2>
                                <p className="mb-6">For any questions regarding this privacy policy or to exercise your rights, please contact us:</p>
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
