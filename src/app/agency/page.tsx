'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react'

const lessons = [
  {
    id: 1,
    number: '01',
    title: 'Tracking Multiple Client Accounts',
    duration: '5 min',
    videoId: '6uyc4d8dfe',
    problem: [
      'Managing attribution across dozens of client accounts is chaotic',
      'Each client has different tracking setups and data sources',
      'No unified view of performance across your entire client roster',
    ],
    solution:
      'HYROS provides a centralized dashboard where you can manage all client accounts from one place. Set up consistent tracking across clients and instantly see which accounts need attention.',
  },
  {
    id: 2,
    number: '02',
    title: 'Proving ROI to Clients',
    duration: '4 min',
    videoId: 'kht91wxugs',
    problem: [
      'Clients question your results because platform data doesn\'t match their sales',
      'Spending hours building manual reports to justify ad spend',
      'No single source of truth when clients ask about attribution',
    ],
    solution:
      'HYROS gives you accurate attribution data that matches your clients\' actual revenue. Generate professional reports in minutes that clearly demonstrate the ROI of your campaigns.',
  },
  {
    id: 3,
    number: '03',
    title: 'Scaling Client Campaigns Confidently',
    duration: '6 min',
    videoId: '55c0ekbal0',
    problem: [
      'Afraid to scale because you\'re not sure which campaigns actually work',
      'Platform attribution leads to bad scaling decisions',
      'Clients lose trust when scaled campaigns underperform',
    ],
    solution:
      'HYROS shows you exactly which campaigns are driving real revenue, so you can scale with confidence. Make data-driven decisions that consistently deliver results for your clients.',
  },
  {
    id: 4,
    number: '04',
    title: 'White-Label Reporting for Clients',
    duration: '4 min',
    videoId: 'mvdr7crkqa',
    problem: [
      'Generic reports don\'t reflect your agency\'s brand',
      'Clients see confusing technical dashboards',
      'No way to customize the reporting experience',
    ],
    solution:
      'HYROS offers white-label reporting options so you can deliver branded, professional reports to your clients. Customize dashboards to show exactly what each client needs to see.',
  },
  {
    id: 5,
    number: '05',
    title: 'Managing Team Access & Permissions',
    duration: '4 min',
    videoId: 'opw9v390lw',
    problem: [
      'Team members need different levels of access to different clients',
      'Security concerns with sharing login credentials',
      'No audit trail of who made what changes',
    ],
    solution:
      'HYROS provides granular permission controls so you can give team members exactly the access they need. Track all changes and maintain security across your organization.',
  },
]

function LessonAccordion({
  lesson,
  isOpen,
  onToggle,
}: {
  lesson: (typeof lessons)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b-2 border-black/5 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 lg:gap-8 px-6 lg:px-8 py-6 lg:py-8 text-left group"
      >
        <span className="font-display text-4xl lg:text-5xl font-black text-black/10 group-hover:text-black/20 transition-colors w-20 shrink-0">
          {lesson.number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black group-hover:text-black/70 transition-colors leading-tight">
            {lesson.title}
          </h3>
          <p className="text-[13px] text-black/40 mt-1">{lesson.duration}</p>
        </div>
        <div className={`w-10 h-10 border border-black/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-black border-black' : 'group-hover:border-black/30'}`}>
          <ChevronDown className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-black/40'}`} />
        </div>
      </button>

      <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-6 lg:px-8 lg:pl-36 pb-10 pt-2">
            <div className="max-w-2xl mb-8">
              <div className="aspect-video bg-black rounded overflow-hidden">
                <iframe
                  src={`https://fast.wistia.net/embed/iframe/${lesson.videoId}?seo=true&videoFoam=true`}
                  title={lesson.title}
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="max-w-3xl space-y-8">
              <div>
                <h4 className="text-[13px] uppercase tracking-[0.15em] text-black/40 font-medium mb-4">
                  What This Solves
                </h4>
                <ul className="space-y-2">
                  {lesson.problem.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-black/60 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-black/40 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[13px] uppercase tracking-[0.15em] text-black/40 font-medium mb-4">
                  How HYROS Helps
                </h4>
                <p className="text-[15px] text-black/60 leading-relaxed">{lesson.solution}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AgencyTrainingPage() {
  const [openLesson, setOpenLesson] = useState<number | null>(1)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-medium tracking-tight text-black">HYROS</span>
              <span className="text-[13px] text-black/40 font-light">Academy</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="https://docs.hyros.com" className="text-[13px] text-black/60 hover:text-black transition-colors">
                Documentation
              </a>
              <a href="https://support.hyros.com" className="text-[13px] text-black/60 hover:text-black transition-colors">
                Support
              </a>
              <a
                href="https://app.hyros.com"
                className="text-[13px] bg-black text-white px-4 py-2 hover:bg-black/80 transition-colors"
              >
                Open Dashboard
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Welcome Video Section */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-black/40 hover:text-black/60 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-video bg-black overflow-hidden order-2 lg:order-1">
              <iframe
                src="https://fast.wistia.net/embed/iframe/drhan93ocz?seo=true&videoFoam=true"
                title="Welcome to Agency Training"
                allow="autoplay; fullscreen"
                frameBorder="0"
                className="w-full h-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">
                Start Here
              </p>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-black text-black leading-tight mb-6">
                Welcome to Agency Training
              </h2>
              <p className="text-black/60 leading-relaxed mb-6">
                Before diving into the lessons, watch this quick introduction to understand how
                this training is structured and what you&apos;ll achieve by the end.
              </p>
              <p className="text-black/60 leading-relaxed">
                Each lesson is designed to be completed in under 5 minutes, with immediate
                actionable takeaways you can apply to your client accounts right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mb-16">
            <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">
              Course Content
            </p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black text-black leading-tight">
              5 lessons to scale your agency
            </h2>
          </div>

          <div className="bg-white border-2 border-black/10">
            {lessons.map((lesson) => (
              <LessonAccordion
                key={lesson.id}
                lesson={lesson}
                isOpen={openLesson === lesson.id}
                onToggle={() => setOpenLesson(openLesson === lesson.id ? null : lesson.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black text-black leading-tight mb-6">
              Need more help?
            </h2>
            <p className="text-black/60 leading-relaxed mb-10">
              Join our agency partner community to share strategies with other agencies
              and get priority support from the HYROS team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://docs.hyros.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 text-[15px] font-medium hover:bg-black/80 transition-all"
              >
                Browse Documentation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[15px] text-black/60 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium tracking-tight text-black">HYROS</span>
              <span className="text-[13px] text-black/40 font-light">Academy</span>
            </div>
            <div className="flex items-center gap-8 text-[13px] text-black/50">
              <a href="https://docs.hyros.com" className="hover:text-black transition-colors">Documentation</a>
              <a href="https://app.hyros.com" className="hover:text-black transition-colors">Dashboard</a>
              <a href="https://hyros.com" className="hover:text-black transition-colors">HYROS.com</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-black/5 text-[12px] text-black/40">
            © 2025 HYROS Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
