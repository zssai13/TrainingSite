'use client'

import Link from 'next/link'
import { ArrowRight, Target, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react'

const courseSections = [
  {
    title: 'Essential Keys',
    description: 'Master the foundational strategies that drive consistent ad revenue growth.',
    href: '/ad-course/essential-keys',
    lessons: 5,
  },
  {
    title: 'Tactical Application',
    description: 'Apply advanced tactics for scaling, lowering CPA, and AI optimization.',
    href: '/ad-course/tactical-application',
    lessons: 5,
  },
  {
    title: 'E-Commerce',
    description: 'Industry-specific strategies for e-commerce attribution in 2026.',
    href: '/ad-course/ecom',
    lessons: 3,
  },
  {
    title: 'Info & Coaching',
    description: 'Attribution tactics tailored for course creators and coaches.',
    href: '/ad-course/info-coaching',
    lessons: 3,
  },
  {
    title: 'SaaS & B2B',
    description: 'Enterprise-focused attribution for subscription and B2B businesses.',
    href: '/ad-course/saas-b2b',
    lessons: 3,
  },
]

const learningObjectives = [
  'Understand how AI attribution models work and why they outperform traditional tracking',
  'Configure your ad platforms to optimize for high-value customers, not just conversions',
  'Implement the criss-cross effect to maximize cross-platform attribution accuracy',
  'Use LTV forecasting to make smarter scaling decisions based on long-term value',
  'Set up AI-powered remarketing that targets your most profitable customer segments',
]

export default function AdCoursePage() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column */}
            <div>
              <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-6">
                Advanced Training
              </p>
              <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.1] text-black mb-6">
                Increase Ad Revenue
                <br />
                <span className="text-black/70">AT LEAST 20%</span>
                <br />
                With AI Attribution
              </h1>
              <p className="text-lg text-black/60 leading-relaxed max-w-lg mb-8">
                Learn to use cutting-edge AI ad attribution models to get MORE customers
                from ads CHEAPER without ANY changes to your ads or business.
              </p>
              <a
                href="#course-content"
                className="group inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 text-[15px] font-medium hover:bg-black/80 transition-all mb-6"
              >
                Start Learning
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-[13px] text-black/50 font-medium">
                (For Advanced Media Buyers)
              </p>
            </div>

            {/* Right Column - Video */}
            <div className="aspect-video bg-black overflow-hidden">
              <iframe
                src="https://fast.wistia.net/embed/iframe/drhan93ocz?seo=true&videoFoam=true"
                title="AI Attribution Course Introduction"
                allow="autoplay; fullscreen"
                frameBorder="0"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-black/10 bg-[#FAF9F7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/10">
            {[
              { value: '20%+', label: 'More Ad Revenue' },
              { value: '30%', label: 'Lower CPAs' },
              { value: '25+', label: 'AI Optimization Tactics' },
              { value: '1:1', label: 'AI Remarketing Setup' },
            ].map((stat, i) => (
              <div key={i} className="py-8 lg:py-10 px-6 first:pl-0 last:pr-0">
                <p className="font-display text-3xl lg:text-4xl font-black text-black mb-1">{stat.value}</p>
                <p className="text-[13px] text-black/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Course */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Placeholder */}
            <div className="aspect-[4/3] bg-black flex items-center justify-center">
              <span className="text-white/40 text-sm uppercase tracking-wider">Course Preview</span>
            </div>

            {/* Content */}
            <div>
              <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">
                About This Course
              </p>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-black text-black leading-tight mb-6">
                The complete AI attribution playbook
              </h2>
              <p className="text-black/60 leading-relaxed mb-6">
                This comprehensive course teaches you how to leverage AI-powered attribution
                to dramatically improve your advertising ROI. You&apos;ll learn the exact strategies
                used by top media buyers to scale profitably while reducing customer acquisition costs.
              </p>
              <p className="text-black/60 leading-relaxed mb-8">
                Whether you&apos;re running e-commerce, info products, or B2B campaigns, these
                principles apply universally. The course is divided into foundational concepts
                and industry-specific tactical applications.
              </p>
              <div className="flex items-center gap-6 text-[14px]">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-black/40" />
                  <span className="text-black/60">19 Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-black/40" />
                  <span className="text-black/60">5 Modules</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mb-16">
            <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">
              Learning Objectives
            </p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-black text-black leading-tight">
              What you&apos;ll master
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {learningObjectives.map((objective, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border border-black/10">
                <CheckCircle className="w-5 h-5 text-black/40 shrink-0 mt-0.5" />
                <p className="text-[15px] text-black/70 leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Coaches */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mb-16">
            <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">
              The Coaches
            </p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-black text-black leading-tight">
              Learn from the experts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Becker',
                role: 'Founder & CEO',
                bio: 'Built multiple 8-figure companies using the exact attribution strategies taught in this course.',
              },
              {
                name: 'HYROS Team',
                role: 'Attribution Specialists',
                bio: 'Our team has helped thousands of businesses implement AI attribution for better ad performance.',
              },
              {
                name: 'Guest Experts',
                role: 'Industry Leaders',
                bio: 'Learn from top media buyers who have scaled campaigns to millions in profitable ad spend.',
              },
            ].map((coach, i) => (
              <div key={i} className="p-8 border-2 border-black/10">
                <div className="w-16 h-16 bg-black/5 rounded-full mb-6 flex items-center justify-center">
                  <Users className="w-6 h-6 text-black/30" />
                </div>
                <h3 className="text-xl font-medium text-black mb-1">{coach.name}</h3>
                <p className="text-[13px] text-black/40 mb-4">{coach.role}</p>
                <p className="text-[15px] text-black/60 leading-relaxed">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[13px] uppercase tracking-[0.2em] text-white/40 mb-4">
                Who This Is For
              </p>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-tight mb-6">
                Is this course
                <br />
                <span className="text-white/60">right for you?</span>
              </h2>
              <p className="text-white/60 leading-relaxed max-w-md">
                This course is designed for experienced advertisers who are already running
                profitable campaigns and want to take their results to the next level with AI attribution.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Media Buyers & Ad Managers',
                  desc: 'Running $10k+/month in ad spend and looking to improve ROAS.',
                },
                {
                  title: 'Agency Owners',
                  desc: 'Managing multiple client accounts and need scalable attribution solutions.',
                },
                {
                  title: 'Business Owners',
                  desc: 'Direct response advertisers who want to optimize their own campaigns.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 border border-white/10 hover:border-white/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-white/40 shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-[15px] text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section id="course-content" className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mb-16">
            <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">
              Course Content
            </p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-black text-black leading-tight mb-4">
              Start your training
            </h2>
            <p className="text-black/60 leading-relaxed">
              Choose a module to begin. We recommend starting with Essential Keys to build
              your foundation before moving to tactical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseSections.map((section, index) => (
              <Link
                key={section.title}
                href={section.href}
                className="group relative bg-white border-2 border-black p-8 hover:bg-black transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-4xl font-black text-black/10 group-hover:text-white/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <ArrowRight className="w-5 h-5 text-black/30 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                </div>
                <h3 className="text-xl font-medium text-black group-hover:text-white mb-3 transition-colors">
                  {section.title}
                </h3>
                <p className="text-[15px] text-black/60 group-hover:text-white/70 leading-relaxed transition-colors mb-4">
                  {section.description}
                </p>
                <p className="text-[13px] text-black/40 group-hover:text-white/50 transition-colors">
                  {section.lessons} lessons
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black text-black leading-tight mb-6">
              Ready to increase your ad revenue?
            </h2>
            <p className="text-black/60 leading-relaxed mb-10">
              Start with the Essential Keys module and implement your first AI attribution
              strategy today.
            </p>
            <a
              href="#course-content"
              className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-[15px] font-medium hover:bg-black/80 transition-all"
            >
              Begin the course
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
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
