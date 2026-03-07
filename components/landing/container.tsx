import { Section } from "../ui/section";

export function Container({ children }: { children: React.ReactNode }) {
    return <div className="max-w-container mx-auto">{children}</div>;
}
