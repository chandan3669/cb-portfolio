'use client'

import React, { useState } from 'react'
import { PROJECTS_DATA } from '@/data/portfolioData'
import { Github, ExternalLink, Search, Copy, Check } from 'lucide-react'
import { TechIcon } from '@/components/IconPack'

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [copiedRepoId, setCopiedRepoId] = useState<string | null>(null)

  const categories = [
    { label: 'ALL REPOS', value: 'ALL', count: PROJECTS_DATA.length },
    { label: 'CYBER-SECURITY', value: 'Cyber-Security', count: PROJECTS_DATA.filter(p => p.category === 'Cyber-Security').length },
    { label: 'AI & ML', value: 'AI & ML', count: PROJECTS_DATA.filter(p => p.category === 'AI & ML').length },
    { label: 'WEB DEVELOPMENT', value: 'Web Development', count: PROJECTS_DATA.filter(p => p.category === 'Web Development').length },
    { label: 'SYSTEMS & HARDWARE', value: 'Systems & Hardware', count: PROJECTS_DATA.filter(p => p.category === 'Systems & Hardware').length },
  ]

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'ALL' || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.languages.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleCopyRepoUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedRepoId(id)
    setTimeout(() => setCopiedRepoId(null), 2000)
  }

  const handleFilterByTech = (techName: string) => {
    setSearchQuery(techName)
  }

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 border-b-2 border-[#1f2a22] bg-[#0b0e0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Header */}
        <div className="mb-8 sm:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-[#00ff66] tracking-widest mb-1 font-bold">
              // 04. REPOSITORY_MATRIX
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
              VERIFIED <span className="text-[#00ff66] bg-black px-2 inline-block text-white">PROJECTS</span> & CODEBASES
            </h2>
            <p className="font-mono text-xs text-zinc-400 mt-2">
              Showing strictly real public GitHub repositories from @chandan3669. Click any stack tag to filter by technology.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative font-mono text-xs w-full lg:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="SEARCH REPOS // STACK..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0f1410] border-2 border-[#1f2a22] focus:border-[#00ff66] text-white pl-9 pr-4 py-2.5 outline-none font-bold transition-colors"
            />
          </div>
        </div>

        {/* Brutalist Category Tabs - Electric Emerald Green */}
        <div className="flex overflow-x-auto no-scrollbar whitespace-nowrap gap-2 mb-8 sm:mb-10 font-mono text-xs border-b-2 border-[#1f2a22] pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 border-2 transition-all flex items-center gap-2 font-bold shrink-0 ${
                  isActive
                    ? 'bg-[#00ff66] text-black border-black shadow-[2px_2px_0px_0px_#000000]'
                    : 'bg-[#0f1410] text-zinc-300 border-[#1f2a22] hover:border-[#00ff66] hover:bg-[#00ff66] hover:text-black'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 text-[10px] ${isActive ? 'bg-black text-[#00ff66]' : 'bg-[#141a15] text-zinc-400'}`}>
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Repositories Count Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-zinc-400 mb-6 px-1 font-bold">
          <span>SHOWING {filteredProjects.length} OF {PROJECTS_DATA.length} REPOSITORIES</span>
          {(selectedCategory !== 'ALL' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedCategory('ALL')
                setSearchQuery('')
              }}
              className="text-[#00ff66] hover:underline bg-black px-2.5 py-1 border border-black text-[11px]"
            >
              RESET ALL FILTERS
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const repoIndexFormatted = (index + 1).toString().padStart(2, '0')
            const isCopied = copiedRepoId === project.id

            return (
              <div
                key={project.id}
                className="brutal-box p-5 sm:p-6 bg-[#0f1410] border-2 border-[#1f2a22] flex flex-col justify-between hover:border-[#00ff66] transition-all group"
              >
                <div>
                  {/* Top Metadata Line */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1f2a22] font-mono text-xs">
                    <span className="text-[#00ff66] bg-black px-1.5 py-0.5 font-bold border border-black">
                      {repoIndexFormatted}
                    </span>
                    <span className="text-white text-[10px] sm:text-[11px] bg-[#141a15] px-2 py-0.5 border border-[#1f2a22] font-bold">
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-mono font-bold text-base sm:text-lg text-white mb-2 tracking-tight group-hover:text-[#00ff66] transition-colors break-words">
                    {project.title}
                  </h3>

                  {/* Factual Description */}
                  <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Interactive Tech Stack Tags - Click to Filter */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.languages.map((lang, lIdx) => (
                      <button
                        key={lIdx}
                        onClick={() => handleFilterByTech(lang)}
                        className="brutal-tag text-[10px] inline-flex items-center gap-1.5 font-bold bg-[#141a15] hover:bg-[#00ff66] hover:text-black transition-colors cursor-pointer"
                        title={`Filter by ${lang}`}
                      >
                        <TechIcon name={lang} size={12} className="text-[#00ff66] group-hover:text-black" />
                        <span>{lang}</span>
                      </button>
                    ))}
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 border-t border-[#1f2a22] flex items-center justify-between font-mono text-xs">
                    <button
                      onClick={() => handleCopyRepoUrl(project.id, project.githubUrl)}
                      className="inline-flex items-center gap-1 text-zinc-400 hover:text-white text-[11px] font-bold transition-colors"
                      title="Copy GitHub URL"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-[#00ff66]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'URL COPIED!' : 'COPY URL'}</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-black font-bold bg-[#00ff66] px-3 py-1.5 border border-black hover:bg-black hover:text-[#00ff66] transition-all text-xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>CODE</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="p-8 sm:p-12 text-center border-2 border-dashed border-[#1f2a22] bg-[#0f1410] font-mono text-zinc-400">
            <p className="text-sm text-white mb-2 font-bold">NO REPOSITORIES FOUND</p>
            <p className="text-xs">No repositories match the current search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('ALL')
              }}
              className="mt-4 brutal-btn-primary px-4 py-2 text-xs"
            >
              CLEAR SEARCH & FILTERS
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
