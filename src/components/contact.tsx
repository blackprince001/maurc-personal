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
                                contact@example.com
                            </a>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">Social</h3>
                            <div className="flex gap-6">
                                <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">
                                    LinkedIn
                                </a>
                                <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">
                                    Twitter
                                </a>
                                <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">
                                    ResearchGate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}