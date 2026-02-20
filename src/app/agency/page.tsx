'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react'

interface SubModule {
  id: string
  number: string
  title: string
  videoId: string
  problem: string[]
  solution: string
}

interface Module {
  id: number
  number: string
  title: string
  duration: string
  description: string
  subModules: SubModule[]
}

const modules: Module[] = [
  {
    id: 1,
    number: '01',
    title: 'Advanced Hyros Setup: Custom Audiences, Pixel Setup & More',
    duration: '55 min',
    description:
      'Master the foundational HYROS configuration that powers everything else — navigation, attribution modes, pixel optimization, custom audiences, and dashboard setup.',
    subModules: [
      {
        id: '1.1',
        number: '1.1',
        title: 'Hyros Navigation',
        videoId: 'f55lq9c0zl',
        problem: [
          'New to the HYROS dashboard and unsure where key features live',
          'Wasting time clicking through menus instead of finding what you need fast',
          'Missing critical features because the interface is unfamiliar',
        ],
        solution:
          'A guided walkthrough of the HYROS dashboard — where everything lives, how to navigate efficiently, and the key areas you\'ll use daily to manage client campaigns and attribution data.',
      },
      {
        id: '1.2',
        number: '1.2',
        title: 'Attribution Modes & Reporting Fundamentals',
        videoId: 'icbb29fnb8',
        problem: [
          'Not understanding the difference between HYROS attribution models and when to use each one',
          'Misreading reports because you\'re using the wrong attribution mode for your funnel type',
          'Clients getting confused by data because the reporting isn\'t configured correctly',
        ],
        solution:
          'Learn how HYROS attribution modes work, which model to use for different campaign types, and how to set up reports that give you and your clients clear, accurate performance data.',
      },
      {
        id: '1.3',
        number: '1.3',
        title: 'Pixel Optimization & Google Tag Manager (GTM)',
        videoId: 'amihe29ht8',
        problem: [
          'Offline conversions aren\'t being sent back to ad platforms for optimization',
          'Pixel setup is incomplete or misconfigured, leading to lost conversion data',
          'No GTM implementation to manage tags across multiple client sites cleanly',
        ],
        solution:
          'How to set up HYROS pixel tracking with offline conversion optimization and Google Tag Manager integration. Feed accurate conversion data back to ad platforms so their algorithms optimize toward your real buyers.',
      },
      {
        id: '1.4',
        number: '1.4',
        title: 'Custom Audiences and URL Rules',
        videoId: 'rga05u6nxj',
        problem: [
          'Building audiences based on platform data that doesn\'t reflect actual buyer behavior',
          'No way to create precise retargeting segments from HYROS attribution data',
          'URL-based tracking rules are missing or misconfigured, breaking attribution chains',
        ],
        solution:
          'Build powerful custom audiences using HYROS data and configure URL rules that ensure every visitor touchpoint is tracked accurately. Create retargeting segments based on real buyer behavior, not platform guesses.',
      },
      {
        id: '1.5',
        number: '1.5',
        title: 'Custom Dashboards',
        videoId: 'h8on9vsgtx',
        problem: [
          'Default dashboards don\'t show the specific metrics your agency clients care about',
          'Spending hours building custom reports in spreadsheets for each client',
          'No quick way to see the KPIs that matter across all your accounts',
        ],
        solution:
          'Create custom HYROS dashboards tailored to each client\'s needs. Set up the views that matter most — ROAS, CPA, LTV, and attribution breakdowns — so you can make fast decisions and deliver clear client reports.',
      },
      {
        id: '1.6',
        number: '1.6',
        title: 'Key Takeaways and FAQ\'s',
        videoId: 'h8on9vsgtx',
        problem: [
          'Completed the setup but not sure if everything is configured correctly',
          'Common questions about edge cases and troubleshooting',
          'Need a quick reference for the most important setup principles',
        ],
        solution:
          'A summary of the critical setup points from Module 1 plus answers to the most frequently asked questions. Use this as your checklist to verify your HYROS configuration is solid before moving to optimization.',
      },
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Scaling Call Funnels to 7 & 8 Figures with Hyros',
    duration: '1 hr 25 min',
    description:
      'The complete playbook for tracking and scaling call-based funnels — from setting benchmarks to tracking MQLs, show-up rates, and live optimizations.',
    subModules: [
      {
        id: '2.0',
        number: '2.0',
        title: 'Introduction & Overview',
        videoId: '5tr6pwil4y',
        problem: [
          'No clear framework for scaling call funnels past the initial testing phase',
          'Unclear how HYROS fits into a call-based sales process',
          'Jumping into tactics without understanding the overall scaling strategy',
        ],
        solution:
          'An overview of the complete call funnel scaling framework — what you\'ll learn, how the pieces connect, and the mindset shift needed to scale call-based businesses to 7 and 8 figures with accurate attribution.',
      },
      {
        id: '2.1',
        number: '2.1',
        title: 'Setting Up Benchmarks to Prepare for Scaling',
        videoId: 'xoplefmugw',
        problem: [
          'Scaling without baseline metrics to measure progress against',
          'No framework for knowing when a campaign is ready to scale vs. needs more testing',
          'Making emotional scaling decisions instead of data-driven ones',
        ],
        solution:
          'How to establish the key benchmarks and KPIs in HYROS that tell you exactly when a call funnel campaign is ready to scale. Set the foundation for confident, data-backed scaling decisions.',
      },
      {
        id: '2.2',
        number: '2.2',
        title: 'Tracking MQL\'s (Marketing Qualified Leads)',
        videoId: '4qpgycwgpj',
        problem: [
          'Treating all leads equally regardless of qualification level',
          'Ad platforms can\'t distinguish between a form fill and a genuinely qualified prospect',
          'No way to optimize campaigns toward leads that actually book and show up for calls',
        ],
        solution:
          'Set up MQL tracking in HYROS to separate high-quality leads from tire-kickers. Feed this data back to ad platforms so they optimize for the leads that actually convert to booked calls and closed deals.',
      },
      {
        id: '2.3',
        number: '2.3',
        title: 'Tracking Show-up Rates & SQL\'s',
        videoId: '9edrr7f6bj',
        problem: [
          'High booking rates but low show-up rates — and no way to trace it back to ad source',
          'Sales qualified leads aren\'t being tracked separately from marketing qualified leads',
          'Unable to identify which campaigns produce leads that actually show up and close',
        ],
        solution:
          'Track show-up rates and sales qualified leads (SQLs) in HYROS to identify which ad sources drive the highest-quality prospects. Optimize your spend toward the campaigns that fill your calendar with buyers, not no-shows.',
      },
      {
        id: '2.4',
        number: '2.4',
        title: 'Hyros Optimizations (LIVE) + BONUS: Using GERU for Projections',
        videoId: '6i5y1t7q8x',
        problem: [
          'Knowing the theory but not seeing how it applies in a live campaign',
          'No projection model for forecasting revenue before increasing ad spend',
          'Optimizing reactively instead of proactively planning scaling moves',
        ],
        solution:
          'Watch live HYROS optimization decisions being made in real call funnel campaigns. Plus, learn how to use GERU to project revenue outcomes before committing budget — so you can forecast results and scale with confidence.',
      },
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'How to Optimize & Scale Low Ticket Funnels to 7 & 8 Figures',
    duration: '1 hr 42 min',
    description:
      'The complete system for scaling low-ticket funnels — creative testing, battle-tested optimizations, data analysis, and the strategies that take campaigns from 6 to 7+ figures.',
    subModules: [
      {
        id: '3.0',
        number: '3.0',
        title: 'Introduction & Overview',
        videoId: 'fkq4kuyixo',
        problem: [
          'Low-ticket funnels hit a ceiling and traditional optimization doesn\'t break through',
          'No structured approach to scaling small-purchase funnels profitably',
          'Unclear how attribution data changes the low-ticket scaling equation',
        ],
        solution:
          'An overview of the low-ticket scaling framework — how accurate HYROS attribution data transforms the economics of low-ticket funnels and enables scaling strategies that wouldn\'t be possible with platform data alone.',
      },
      {
        id: '3.1',
        number: '3.1',
        title: 'Setting Up Benchmarks to Prepare for Scaling',
        videoId: 'be0nx8i6j8',
        problem: [
          'No established KPIs for low-ticket funnel performance',
          'Scaling before the funnel metrics justify the increased spend',
          'Different benchmarks needed for low-ticket vs. high-ticket but using the same ones',
        ],
        solution:
          'Establish the specific benchmarks and performance thresholds that low-ticket funnels need before scaling. Learn which HYROS metrics matter most for low-ticket and how to set realistic targets.',
      },
      {
        id: '3.2',
        number: '3.2',
        title: 'Creative Testing Process',
        videoId: 'kg4p19nq05',
        problem: [
          'Testing creatives randomly without a structured process',
          'No way to accurately attribute creative performance to actual revenue',
          'Killing winners too early or keeping losers too long due to bad data',
        ],
        solution:
          'A systematic creative testing framework powered by HYROS attribution data. Know exactly which creatives drive real purchases (not just clicks), how long to test before making decisions, and how to iterate on winners.',
      },
      {
        id: '3.3',
        number: '3.3',
        title: 'Battle-tested Optimization Strategies',
        videoId: 'ovvm8ragm4',
        problem: [
          'Basic optimization tactics that worked at low spend no longer work at scale',
          'Ad fatigue and rising CPAs with no playbook for combating them',
          'Optimizing toward the wrong events because platform attribution is inaccurate',
        ],
        solution:
          'Proven optimization strategies that have been tested across millions in low-ticket ad spend. Learn how to use HYROS data to make optimization decisions that maintain profitability as you scale.',
      },
      {
        id: '3.4',
        number: '3.4',
        title: 'Data Analysis & Core Decision Metrics for Ads',
        videoId: 'zzj0yhuckw',
        problem: [
          'Overwhelmed by data and not sure which metrics actually drive decisions',
          'Platform data and HYROS data tell different stories — unclear which to trust',
          'Making gut decisions because the analysis framework isn\'t clear',
        ],
        solution:
          'The core decision metrics for low-ticket ad campaigns and how to analyze them in HYROS. Build a repeatable analysis process that turns raw data into clear, confident scaling and cutting decisions.',
      },
      {
        id: '3.5',
        number: '3.5',
        title: '7-Figure Scaling Strategies',
        videoId: '9vvta528nw',
        problem: [
          'Stuck at 6 figures with no clear path to 7-figure monthly ad spend',
          'Every scaling attempt leads to diminishing returns and rising CPAs',
          'No framework for horizontal and vertical scaling with attribution data',
        ],
        solution:
          'The specific strategies used to scale low-ticket funnels past 7 figures — horizontal expansion, vertical scaling, and the HYROS data signals that tell you when and how to push harder. Move past the plateau.',
      },
      {
        id: '3.6',
        number: '3.6',
        title: 'Real Winning Creative Examples + Stats',
        videoId: 'i4h20rdgqk',
        problem: [
          'No reference point for what high-performing low-ticket creatives look like',
          'Creating ads in the dark without seeing real examples and their actual performance data',
          'Unable to reverse-engineer why certain creatives outperform others',
        ],
        solution:
          'Real creative examples from campaigns that have scaled to 7+ figures, complete with actual performance stats from HYROS. See what works, why it works, and how to apply the patterns to your own campaigns.',
      },
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'How to Optimize and Scale Webinar Funnels to 7 & 8 Figures',
    duration: '1 hr 21 min',
    description:
      'The complete webinar funnel scaling system — from creative testing and offline conversion optimization to data analysis frameworks and 7-figure scaling strategies.',
    subModules: [
      {
        id: '4.0',
        number: '4.0',
        title: 'Introduction & Overview',
        videoId: 'f2jmqavysr',
        problem: [
          'Webinar funnels have long attribution windows that platforms can\'t track',
          'No structured approach to scaling webinar-based campaigns profitably',
          'High upfront ad costs with delayed revenue make optimization difficult',
        ],
        solution:
          'An overview of the webinar funnel scaling framework — how HYROS solves the attribution challenge unique to webinar funnels and enables scaling strategies that account for delayed conversions and long sales cycles.',
      },
      {
        id: '4.1',
        number: '4.1',
        title: 'Setting Up Benchmarks to Prepare for Scaling',
        videoId: 'f2jmqavysr',
        problem: [
          'Webinar-specific metrics differ from other funnel types but the same benchmarks are being used',
          'No framework for evaluating webinar funnel health before committing to scale',
          'Registration rates, show-up rates, and conversion rates aren\'t being tracked together',
        ],
        solution:
          'Set the specific benchmarks that webinar funnels need before scaling — registration cost, show-up rate, offer conversion rate, and ROAS thresholds. Use HYROS to track the full journey from ad click to webinar purchase.',
      },
      {
        id: '4.2',
        number: '4.2',
        title: 'Creative Testing, Creative Formats, and Common Mistakes',
        videoId: 'bazrwpav0p',
        problem: [
          'Testing webinar creatives without knowing which formats drive actual registrations that convert',
          'Common creative mistakes that tank webinar show-up rates',
          'No system for iterating on creative based on down-funnel conversion data',
        ],
        solution:
          'The creative testing process specific to webinar funnels — which formats work best, the mistakes that kill show-up rates, and how to use HYROS attribution data to identify creatives that drive registrations that actually convert.',
      },
      {
        id: '4.3',
        number: '4.3',
        title: 'Optimizations: Offline Conversions, Emails, and Constraints',
        videoId: 'ln199x2956',
        problem: [
          'Webinar purchases happen offline or delayed, and ad platforms miss them entirely',
          'Email sequences drive conversions but get no attribution credit in ad platforms',
          'Budget constraints force tough choices without data on what\'s actually working',
        ],
        solution:
          'How to feed offline webinar conversions and email-driven sales back into ad platforms through HYROS. Optimize campaigns with the full picture of your revenue, not just the immediate clicks and purchases.',
      },
      {
        id: '4.4',
        number: '4.4',
        title: 'Data Analysis: Mindset, Rules, and Strategies',
        videoId: '1zwno9ouof',
        problem: [
          'Analyzing webinar funnel data with the wrong mindset leads to premature cuts',
          'Long attribution windows mean data looks different than other funnel types',
          'No rules for when to wait for more data vs. when to make a decision',
        ],
        solution:
          'The data analysis framework specifically for webinar funnels — the mindset shift needed for delayed-conversion businesses, rules for decision timing, and strategies for reading HYROS data in the context of long sales cycles.',
      },
      {
        id: '4.5',
        number: '4.5',
        title: 'Creative Concept Production & 7-Figure Scaling Strategies',
        videoId: 'i5hjqdmrbi',
        problem: [
          'Running out of creative ideas that drive webinar registrations at scale',
          'Scaling attempts cause creative fatigue and rising registration costs',
          'No production system for continuously generating fresh, high-converting concepts',
        ],
        solution:
          'A system for producing winning webinar creative concepts at scale, plus the 7-figure scaling strategies that work specifically for webinar funnels. Learn how to expand spend while maintaining registration quality and ROAS.',
      },
      {
        id: '4.6',
        number: '4.6',
        title: 'Key Takeaways & FAQ\'s',
        videoId: 'jz4uck8e1a',
        problem: [
          'Completed the webinar module but need a summary of the key action items',
          'Common questions about edge cases in webinar funnel attribution',
          'Need a reference guide for the most critical webinar scaling principles',
        ],
        solution:
          'A summary of the most important webinar funnel scaling principles plus answers to frequently asked questions. Use this as your action plan and quick reference as you implement the strategies with your agency clients.',
      },
    ],
  },
]

function SubModuleAccordion({
  subModule,
  isOpen,
  onToggle,
}: {
  subModule: SubModule
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b-2 border-black/5 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 lg:gap-8 px-6 lg:px-8 py-6 lg:py-8 text-left group"
      >
        <span className="font-display text-3xl lg:text-4xl font-black text-black/10 group-hover:text-black/20 transition-colors w-20 shrink-0">
          {subModule.number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black group-hover:text-black/70 transition-colors leading-tight">
            {subModule.title}
          </h3>
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
                  src={`https://fast.wistia.net/embed/iframe/${subModule.videoId}?seo=true&videoFoam=true`}
                  title={subModule.title}
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
                  {subModule.problem.map((item, i) => (
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
                <p className="text-[15px] text-black/60 leading-relaxed">{subModule.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ModuleSection({
  module,
  openSubModuleId,
  onToggleSubModule,
}: {
  module: Module
  openSubModuleId: string | null
  onToggleSubModule: (subModuleId: string) => void
}) {
  return (
    <div>
      {/* Module Header */}
      <div className="flex items-start gap-6 lg:gap-8 mb-8">
        <span className="font-display text-6xl lg:text-7xl font-black text-black/10 shrink-0 leading-none">
          {module.number}
        </span>
        <div>
          <h3 className="font-display text-xl lg:text-2xl font-black text-black leading-tight mb-1">
            {module.title}
          </h3>
          <p className="text-[13px] text-black/40 mb-3">
            {module.duration} &middot; {module.subModules.length} lessons
          </p>
          <p className="text-[15px] text-black/60 leading-relaxed max-w-xl">
            {module.description}
          </p>
        </div>
      </div>

      {/* Sub-Module Accordion */}
      <div className="bg-white border-2 border-black/10">
        {module.subModules.map((sub) => (
          <SubModuleAccordion
            key={sub.id}
            subModule={sub}
            isOpen={openSubModuleId === sub.id}
            onToggle={() => onToggleSubModule(sub.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default function AgencyTrainingPage() {
  const [openSubModules, setOpenSubModules] = useState<Record<number, string | null>>({
    1: '1.1',
    2: null,
    3: null,
    4: null,
  })

  const toggleSubModule = (moduleId: number, subModuleId: string) => {
    setOpenSubModules(prev => ({
      ...prev,
      [moduleId]: prev[moduleId] === subModuleId ? null : subModuleId,
    }))
  }

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

      {/* Course Content Section */}
      <section className="pt-32 lg:pt-44 pb-20 lg:pb-28 bg-[#FAF9F7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-black/40 hover:text-black/60 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all courses
          </Link>

          {/* Page Header */}
          <div className="max-w-xl mb-16">
            <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">
              Course Content
            </p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black text-black leading-tight">
              Expert Media Buying &amp; Scaling
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
              <span className="text-[14px] text-black/40">4 Modules</span>
              <span className="text-[14px] text-black/40">25 Videos</span>
              <span className="text-[14px] text-black/40">~5 hours total</span>
            </div>
          </div>

          {/* Coach Section */}
          <div className="mb-16">
            <div className="border-2 border-black bg-white p-8 lg:p-10">
              <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
                <div className="shrink-0">
                  <div className="w-28 h-28 lg:w-36 lg:h-36 overflow-hidden border-2 border-black">
                    <Image
                      src="/coach-mike.png"
                      alt="Mike Buontempo"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-3">
                    Your Coach
                  </p>
                  <h3 className="font-display font-black text-2xl lg:text-3xl text-black leading-tight mb-1">
                    Mike Buontempo
                  </h3>
                  <p className="text-[13px] text-black/40 mb-5">
                    Founder, Client Accelerators
                  </p>
                  <p className="text-[15px] text-black/60 leading-relaxed max-w-xl mb-8">
                    Mike Buontempo has been in the digital world and running paid ads since
                    2010. He&apos;s the founder of Client Accelerators, a full-service direct
                    response agency that has produced over $300M+ in sales from their
                    omni-channel approach running ads on YouTube, Facebook, Instagram, Google
                    &amp; TikTok. They specifically help info product brands scale profitably
                    through scripting, producing &amp; launching all of their ads across these
                    platforms. Buontempo is the #1 user of HYROS, with over 200 clients on
                    the platform.
                  </p>
                  <div className="flex flex-wrap gap-x-10 gap-y-4">
                    <div>
                      <p className="font-display font-black text-xl lg:text-2xl text-black">$300M+</p>
                      <p className="text-[12px] text-black/40 mt-0.5">Sales Generated</p>
                    </div>
                    <div>
                      <p className="font-display font-black text-xl lg:text-2xl text-black">200+</p>
                      <p className="text-[12px] text-black/40 mt-0.5">Clients on HYROS</p>
                    </div>
                    <div>
                      <p className="font-display font-black text-xl lg:text-2xl text-black">5 Platforms</p>
                      <p className="text-[12px] text-black/40 mt-0.5">YouTube, Meta, Google, TikTok</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-16 lg:space-y-20">
            {modules.map((module, index) => (
              <div key={module.id}>
                {index > 0 && (
                  <div className="border-t border-black/10 mb-16 lg:mb-20" />
                )}
                <ModuleSection
                  module={module}
                  openSubModuleId={openSubModules[module.id]}
                  onToggleSubModule={(subModuleId) => toggleSubModule(module.id, subModuleId)}
                />
              </div>
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
            &copy; 2025 HYROS Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
