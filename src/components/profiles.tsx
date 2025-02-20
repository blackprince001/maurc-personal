import { ArrowUpRight } from "lucide-react"
import type { ResearcherInfo } from "../types/types"

export default function ProfilePage({ researcherInfo }: { researcherInfo: ResearcherInfo | null }) {
  if (!researcherInfo) return null

  return (
    <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start">
      <div className="space-y-12">
        <div className="flex items-start gap-8">
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-4 border-white/10">
            <img src="/maurc-logo.svg" alt="Profile" className="object-cover" />
          </div>
          <div className="space-y-4 pt-2">
            {researcherInfo.home_content && researcherInfo.home_content.map((content, index) => (
              <p key={index} className="text-white/90 leading-relaxed">
                {content}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-medium text-white">Featured Projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {researcherInfo.projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all border border-white/10"
              >
                <div className="space-y-2">
                  <h3 className="font-medium text-white flex items-center gap-2">
                    {project.title}
                    {project.url && (
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </h3>
                  <p className="text-sm text-white/75">{project.description}</p>
                </div>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
                    <span className="sr-only">Learn more about {project.title}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border-4 border-white/10">
        <img src={researcherInfo.profile_image || "/maurc-logo.svg"} alt="Researcher" className="object-cover" />
      </div>
    </div>
  )
}

