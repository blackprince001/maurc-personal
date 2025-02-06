"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Book, GraduationCap, Home, FileText, Mail } from "lucide-react"
import { fetchPublications, fetchTeachings, fetchResearcherInfo } from "../lib/api"
import type { Publication, Teaching, ResearcherInfo } from "../types/types"
import ProfilePage from "./profiles"
import { LoadingState } from "./loading-state"
import { NavLink } from "./navbar"
import { ContactSection } from "./contact"


const ResearchPortfolio: React.FC = () => {
    const [, setActiveSection] = useState<string>("home")
    const [publications, setPublications] = useState<Publication[]>([])
    const [teachings, setTeachings] = useState<Teaching[]>([])
    const [researcherInfo, setResearcherInfo] = useState<ResearcherInfo | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [publicationsData, teachingsData, researcherInfoData] = await Promise.all([
                    fetchPublications(),
                    fetchTeachings(),
                    fetchResearcherInfo(),
                ])
                setPublications(publicationsData)
                setTeachings(teachingsData)
                setResearcherInfo(researcherInfoData)
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                        const newUrl = `#${entry.target.id}`
                        window.history.replaceState(null, "", newUrl)
                    }
                })
            },
            {
                rootMargin: "-50% 0px",
                threshold: 0,
            },
        )

        const sections = document.querySelectorAll("section[id]")
        sections.forEach((section) => observer.observe(section))

        return () => sections.forEach((section) => observer.unobserve(section))
    }, [])

    if (loading) {
        return <LoadingState />
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className="min-h-screen bg-zinc-50">
            <header className="bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between py-6">
                        {/* Name on the left */}
                        <div className="text-white text-center md:text-left text-3xl font-medium">Michael Appiah-Kubi</div>

                        {/* Navigation on the right */}
                        <nav className="flex md:bg-transparent">
                            <div className="px-2 md:px-4">
                                <div className="flex gap-1 md:gap-2">
                                    <NavLink href="#home" icon={Home} label="Home" />
                                    <NavLink href="#publications" icon={Book} label="Publications" />
                                    <NavLink href="#teaching" icon={GraduationCap} label="Teaching" />
                                    <NavLink href="#cv" icon={FileText} label="CV" />
                                    <NavLink href="#contact" icon={Mail} label="Contact" />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="space-y-24">
                <section id="home" className="bg-gradient-to-b from-blue-600 to-blue-700">
                    <div className="max-w-7xl mx-auto px-4 py-16">
                        <ProfilePage researcherInfo={researcherInfo} />
                    </div>
                </section>

                <section id="publications">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-[300px,1fr] gap-8">
                            <div className="md:sticky md:top-24 space-y-4">
                                <h2 className="text-2xl font-semibold">Publications</h2>
                                <p className="text-zinc-500">Browse through my research publications and academic work.</p>
                            </div>
                            <div className="space-y-6">
                                {publications.map((pub, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border rounded-2xl flex flex-col md:flex-row overflow-hidden transition-all hover:border-blue-100 hover:shadow-sm"
                                    >
                                        <div className="flex-1 p-8">
                                            <div className="space-y-4">
                                                <h3 className="text-xl font-medium">{pub.title}</h3>
                                                <p className="text-zinc-500 leading-relaxed">{pub.abstract}</p>
                                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                                    <div className="text-zinc-500">
                                                        <span className="text-zinc-900">Authors:</span> {pub.authors}
                                                    </div>
                                                    <div className="text-zinc-500">
                                                        <span className="text-zinc-900">Year:</span> {pub.year}
                                                    </div>
                                                    {pub.journal && (
                                                        <div className="text-zinc-500">
                                                            <span className="text-zinc-900">Journal:</span> {pub.journal}
                                                        </div>
                                                    )}
                                                    {pub.conference && (
                                                        <div className="text-zinc-500">
                                                            <span className="text-zinc-900">Conference:</span> {pub.conference}
                                                        </div>
                                                    )}
                                                    {pub.doi && (
                                                        <div className="text-zinc-500">
                                                            <span className="text-zinc-900">DOI:</span> {pub.doi}
                                                        </div>
                                                    )}
                                                    {pub.publication_type && (
                                                        <div className="text-zinc-500">
                                                            <span className="text-zinc-900">Type:</span> {pub.publication_type.replace("_", " ")}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {pub.poster && (
                                            <div className="md:w-72 h-auto">
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={pub.poster || "/placeholder.svg"}
                                                    alt="Publication poster"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="teaching" className="bg-zinc-50/50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-[300px,1fr] gap-8">
                            <div className="md:sticky md:top-24 space-y-4">
                                <h2 className="text-2xl font-semibold">Teaching Experience</h2>
                                <p className="text-zinc-500">Explore my teaching philosophy and course history.</p>
                            </div>
                            <div className="space-y-6">
                                {teachings.map((teaching, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border rounded-2xl overflow-hidden transition-all hover:border-blue-100 hover:shadow-sm"
                                    >
                                        <div className="p-8 space-y-6">
                                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                                <div>
                                                    <h3 className="text-xl font-medium">{teaching.position}</h3>
                                                    <p className="text-zinc-500 mt-1">{teaching.institution}</p>
                                                </div>
                                                <div className="text-sm text-zinc-500 bg-zinc-50 px-4 py-2 rounded-full border">
                                                    {teaching.start_date} - {teaching.end_date}
                                                </div>
                                            </div>
                                            <p className="text-zinc-500 leading-relaxed">{teaching.description}</p>
                                            {teaching.courses && teaching.courses.length > 0 && (
                                                <div>
                                                    <h4 className="font-medium mb-4">Courses Taught</h4>
                                                    <div className="grid gap-4 sm:grid-cols-2">
                                                        {teaching.courses.map((course, idx) => (
                                                            <div key={idx} className="bg-zinc-50 p-4 rounded-xl border">
                                                                <div className="font-medium">{course.name}</div>
                                                                <p className="text-sm text-zinc-500 mt-2">{course.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cv">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-[300px,1fr] gap-8">
                            <div className="md:sticky md:top-24 space-y-4">
                                <h2 className="text-2xl font-semibold">Curriculum Vitae</h2>
                                <p className="text-zinc-500">
                                    Download my complete CV to learn more about my academic journey and achievements.
                                </p>
                            </div>
                            <div className="bg-white border rounded-2xl p-8 text-center">
                                <a
                                    href={researcherInfo?.cv_link}
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all"
                                >
                                    <FileText size={20} />
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="bg-zinc-50/50">
                    <div className="max-w-7xl mx-auto px-4 py-16">
                        <ContactSection />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ResearchPortfolio