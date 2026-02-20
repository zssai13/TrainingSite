'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react'

const lessons = [
  {
    id: 1,
    number: '01',
    title: 'Scaling',
    duration: '7 min',
    videoId: 'drhan93ocz',
    problem: [
      'Campaigns break when you try to scale past a certain spend level',
      'You don\'t know which campaigns are truly ready to scale',
      'Scaling decisions are based on platform data that over-reports performance',
    ],
    solution:
      'Learn the exact framework for identifying scale-ready campaigns using AI attribution data. This lesson covers how to increase spend confidently without sacrificing profitability.',
  },
  {
    id: 2,
    number: '02',
    title: 'Lowering CPA',
    duration: '6 min',
    videoId: 'drhan93ocz',
    problem: [
      'Your CPA is too high but you don\'t know which lever to pull',
      'Cutting campaigns often cuts profitable traffic along with unprofitable',
      'You can\'t identify the specific audiences or creatives dragging down performance',
    ],
    solution:
      'Discover how to use granular attribution data to surgically reduce CPA. Learn to identify exactly where waste is occurring and eliminate it without losing your best-performing traffic.',
  },
  {
    id: 3,
    number: '03',
    title: 'Using LTV for Huge Gains',
    duration: '8 min',
    videoId: 'drhan93ocz',
    problem: [
      'You\'re making decisions based on first-purchase value only',
      'Profitable long-term customers are being ignored because they don\'t convert immediately',
      'Your competitor can outbid you because they understand LTV better',
    ],
    solution:
      'Master the art of LTV-based optimization. This lesson shows you how to forecast customer lifetime value and use it to make bolder, more profitable advertising decisions.',
  },
  {
    id: 4,
    number: '04',
    title: 'AI Optimization',
    duration: '7 min',
    videoId: 'drhan93ocz',
    problem: [
      'Your AI campaigns (Advantage+, Performance Max) aren\'t performing well',
      'You don\'t know how to feed the right data to AI systems',
      'Broad targeting feels like a black box you can\'t control',
    ],
    solution:
      'Learn how to make AI-powered campaigns work by feeding them clean, accurate attribution data. This lesson reveals the specific signals that help Meta and Google AI find your best customers.',
  },
  {
    id: 5,
    number: '05',
    title: 'Adding AI Remarketing (Master)',
    duration: '10 min',
    videoId: 'drhan93ocz',
    problem: [
      'Your remarketing audiences are too broad and waste spend',
      'You\'re showing the same ads to buyers and non-buyers',
      'You can\'t create sophisticated segments based on real purchase behavior',
    ],
    solution:
      'This master-level lesson teaches you to build AI-powered remarketing campaigns that target exactly the right people with the right message. Learn to create dynamic audiences based on actual revenue data, not just website visits.',
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

export default function TacticalApplicationPage() {
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
            href="/ad-course"
            className="inline-flex items-center gap-2 text-[13px] text-black/40 hover:text-black/60 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to AI Attribution Course
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-video bg-black overflow-hidden order-2 lg:order-1">
              <iframe
                src="https://fast.wistia.net/embed/iframe/drhan93ocz?seo=true&videoFoam=true"
                title="Welcome to Tactical Application"
                allow="autoplay; fullscreen"
                frameBorder="0"
                className="w-full h-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">
                Module 2
              </p>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-black text-black leading-tight mb-6">
                Tactical Application
              </h2>
              <p className="text-black/60 leading-relaxed mb-6">
                Put the Essential Keys into action with advanced tactics for scaling,
                lowering CPA, and leveraging AI optimization.
              </p>
              <p className="text-black/60 leading-relaxed">
                These lessons show you exactly how to implement what you&apos;ve learned
                and achieve measurable results in your campaigns.
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
              5 tactical lessons
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
              Continue learning
            </h2>
            <p className="text-black/60 leading-relaxed mb-10">
              Now explore the industry-specific modules to learn tactics tailored
              to your business type.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/ad-course/ecom"
                className="group inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 text-[15px] font-medium hover:bg-black/80 transition-all"
              >
                E-Commerce Module
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/ad-course"
                className="inline-flex items-center gap-2 text-[15px] text-black/60 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to course overview
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
