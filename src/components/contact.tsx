const EMAIL_CONTACT = import.meta.env.VITE_EMAIL;
const GOOGLE_SCHOLAR = import.meta.env.VITE_GOOGLE_SCHOLAR;
const LINKEDIN_CONTACT = import.meta.env.VITE_LINKEDIN;
const RESEARCH_GATE = import.meta.env.VITE_RESEARCH_GATE;

export const ContactSection = () => {
    return (
        <div className="grid md:grid-cols-[300px,1fr] gap-8">
            <div className="md:sticky md:top-24 space-y-4">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p className="text-zinc-500">
                    Get in touch with me for collaborations, research opportunities, or academic inquiries.
                </p>
            </div>
            <div>
                <div className="bg-white border rounded-2xl p-8">
                    <div className="grid gap-8">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Email</h3>
                            <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                                {EMAIL_CONTACT || "contact@example.com"}
                            </a>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">Social</h3>
                            <div className="flex gap-6">
                                <a href={LINKEDIN_CONTACT || "#"} className="text-zinc-500 hover:text-blue-600 transition-colors">
                                    LinkedIn
                                </a>
                                <a href={GOOGLE_SCHOLAR || "#"} className="text-zinc-500 hover:text-blue-600 transition-colors">
                                    Google Scholar
                                </a>
                                <a href={RESEARCH_GATE || "#"} className="text-zinc-500 hover:text-blue-600 transition-colors">
                                    Research Gate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}