'use client'

import { ArrowRight, BookOpen, TrendingUp, Phone, Layers, GraduationCap } from 'lucide-react'

const businessModels = [
  {
    title: 'Agency',
    description: 'Track and attribute results across multiple client accounts with precision.',
    icon: Layers,
    href: '/agency/',
  },
  {
    title: 'E-commerce',
    description: 'Optimize your DTC ad spend and maximize ROAS with accurate attribution.',
    icon: TrendingUp,
    href: '/ecom-growth-training/',
  },
  {
    title: 'Calls',
    description: 'Connect phone conversions to the ads that actually drive high-ticket sales.',
    icon: Phone,
    href: '/call-based/',
  },
  {
    title: 'SaaS',
    description: 'Track the complete customer journey from first touch to recurring revenue.',
    icon: BookOpen,
    href: '/saas-software/',
  },
  {
    title: 'Info & Education',
    description: 'Attribute course sales and coaching clients to your marketing sources.',
    icon: GraduationCap,
    href: '/general-lessons/',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-medium tracking-tight text-black">HYROS</span>
              <span className="text-[13px] text-black/40 font-light">Academy</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[13px] text-black/60 hover:text-black transition-colors">Documentation</a>
              <a href="#" className="text-[13px] text-black/60 hover:text-black transition-colors">Support</a>
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
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-6">
              Training Platform
            </p>
            <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-black leading-[1.1] text-black mb-8">
              Master the art of
              <br />
              <span className="text-black/70">ad attribution</span>
            </h1>
            <p className="text-lg text-black/60 leading-relaxed max-w-xl mb-12">
              Learn to track, attribute, and optimize your advertising with bite-sized lessons
              designed for your specific business model.
            </p>
            <a
              href="#select-model"
              className="group inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 text-[15px] font-medium hover:bg-black/80 transition-all"
            >
              Start Learning
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-black/10 bg-[#FAF9F7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/10">
            {[
              { value: '15%+', label: 'Average ROAS increase' },
              { value: '5 min', label: 'Per lesson' },
              { value: '25+', label: 'Training modules' },
              { value: '10k+', label: 'Businesses trained' },
            ].map((stat, i) => (
              <div key={i} className="py-8 lg:py-10 px-6 first:pl-0 last:pr-0">
                <p className="font-display text-3xl lg:text-4xl font-black text-black mb-1">{stat.value}</p>
                <p className="text-[13px] text-black/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Selection */}
      <section id="select-model" className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mb-16">
            <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">
              Choose Your Path
            </p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black text-black leading-tight mb-4">
              Select your business model
            </h2>
            <p className="text-black/60 leading-relaxed">
              Each track is tailored to your specific industry with lessons that address
              your unique attribution challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessModels.map((model, index) => (
              <a
                key={model.title}
                href={model.href}
                className="group relative bg-white border-2 border-black p-8 hover:bg-black transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-12">
                  <model.icon
                    className="w-6 h-6 text-black group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                  <ArrowRight
                    className="w-5 h-5 text-black/30 group-hover:text-white transition-all transform group-hover:translate-x-1"
                  />
                </div>
                <h3 className="text-xl font-medium text-black group-hover:text-white mb-3 transition-colors">
                  {model.title}
                </h3>
                <p className="text-[15px] text-black/60 group-hover:text-white/70 leading-relaxed transition-colors">
                  {model.description}
                </p>
              </a>
            ))}

            {/* Featured Card */}
            <a
              href="#"
              className="group relative bg-[#FAF9F7] border-2 border-transparent p-8 hover:border-black transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-[11px] uppercase tracking-[0.15em] text-black/40 font-medium">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-xl font-medium text-black/40 mb-3">
                Advanced Training
              </h3>
              <p className="text-[15px] text-black/40 leading-relaxed">
                Deep-dive sessions for power users ready to maximize every feature.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[13px] uppercase tracking-[0.2em] text-white/40 mb-4">
                How It Works
              </p>
              <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black leading-tight mb-6">
                Quick lessons,
                <br />
                <span className="text-white/60">real results</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                Each lesson takes just minutes to watch and applies immediately to your business.
                No fluff—just actionable strategies that work.
              </p>
              <a
                href="#select-model"
                className="inline-flex items-center gap-2 text-[15px] text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                Browse all courses
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Select your business type',
                  desc: 'Choose the track that matches your business model for tailored guidance.',
                },
                {
                  num: '02',
                  title: 'Watch bite-sized lessons',
                  desc: 'Each video is under 5 minutes and focuses on one actionable concept.',
                },
                {
                  num: '03',
                  title: 'Apply to your account',
                  desc: 'Follow along with direct links to your HYROS dashboard and documentation.',
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-6 p-6 border border-white/10 hover:border-white/20 transition-colors">
                  <span className="font-display text-2xl font-black text-white/30">{step.num}</span>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                    <p className="text-[15px] text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black text-black leading-tight mb-6">
              Ready to grow your ads?
            </h2>
            <p className="text-black/60 leading-relaxed mb-10">
              Start with the quick results lessons and see improvements in your attribution within the first week.
            </p>
            <a
              href="#select-model"
              className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-[15px] font-medium hover:bg-black/80 transition-all"
            >
              Choose your business model
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
