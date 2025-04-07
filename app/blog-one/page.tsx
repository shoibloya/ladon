"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const DanceStudioArticleDisplay = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Blog Outline: How to Start a Dance Studio in Singapore – A Step-by-Step Guide
      </h1>
      <p className="text-blue-700">
        <strong>How This Outline Fills the Gap:</strong> This blog outline directly addresses the shortcomings in current content by providing specific, localised guidance. Each section is included to answer real questions a Singapore entrepreneur would have (e.g., licensing in Section 4 clarifies a confusing area where other sources are silent or overly general; Section 8 gives Singapore-centric marketing ideas beyond the generic social media advice​). By structuring the post as a step-by-step journey from idea to opening day, with local examples and actionable tips, the content will be far more comprehensive and useful than what the SERP currently offers. This not only establishes Vibefam’s authority in the niche but also builds trust with readers (future clients) by genuinely helping them where existing resources fall short.
      </p>
      <p>
        <strong>Overview:</strong>
        <br />
        This guide offers aspiring dance studio owners in Singapore a detailed, practical roadmap – from validating your idea to launching your studio and attracting your first students. Unlike generic global resources, this blog focuses entirely on Singapore-specific regulations, costs, tools, and strategies.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Introduction:</h2>
          <p>
            <span className="font-bold">Trend Highlight:</span> Rise of dance culture in Singapore – stats or trends.
          </p>
          <p>
            <span className="font-bold">Problem:</span> Lack of comprehensive local guides leaves founders confused.
          </p>
          <p>
            <span className="font-bold">What to Expect:</span> A full walkthrough covering legal, financial, and marketing aspects tailored to Singapore.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Find Your Niche & Validate the Idea:</h2>
          <p>
            <span className="font-bold">Define your niche:</span> ballet, K-pop, street dance, kids’ enrichment, etc.
          </p>
          <p>
            <span className="font-bold">Explore demand:</span> and existing competition by neighborhood.
          </p>
          <p>
            <span className="font-bold">Low-risk testing:</span> Try trial classes with friends or community spaces.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Business Plan & Budget (With Local Numbers):</h2>
          <p>
            <span className="font-bold">Core elements:</span> budget, cost breakdown, revenue projections.
          </p>
          <p>
            <span className="font-bold">Include typical Singapore expenses:</span> rent, mirrors, flooring, etc.
          </p>
          <p>
            <span className="font-bold">Set a breakeven goal:</span> (e.g., within 6–12 months) and calculate required student count.
          </p>
          <p>
            <span className="font-bold">Gap Filled:</span> Localized cost planning – often missing in other guides.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Legal Setup & Registration:</h2>
          <p>
            <span className="font-bold">ACRA registration:</span> choose between Sole Proprietor vs Pte Ltd.
          </p>
          <p>
            <span className="font-bold">Licenses:</span> COMPASS music license, public entertainment license (if needed).
          </p>
          <p>
            <span className="font-bold">If offering kids classes:</span> enrichment compliance, not full MOE registration.
          </p>
          <p>
            <span className="font-bold">URA zoning:</span> confirm use classification or apply for change.
          </p>
          <p>
            <span className="font-bold">Liability insurance:</span> a must for safety and peace of mind.
          </p>
          <p>
            <span className="font-bold">Gap Filled:</span> Clarity around what licenses are and aren’t required.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Choose the Right Studio Space:</h2>
          <p>
            <span className="font-bold">Options:</span> shophouses, malls, community centers, industrial buildings.
          </p>
          <p>
            <span className="font-bold">Rental rates:</span> across districts and negotiation tips.
          </p>
          <p>
            <span className="font-bold">Studio size and layout considerations:</span> (e.g., 600–800 sq ft for 15–20 pax).
          </p>
          <p>
            <span className="font-bold">Renovation checklist:</span> mirrors, floors, sound, lighting, ventilation.
          </p>
          <p>
            <span className="font-bold">Hourly rental:</span> as a low-cost starter (e.g., GetSpaces).
          </p>
          <p>
            <span className="font-bold">Local case examples:</span> Orchard vs. HDB community studios.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Hire Instructors & Build a Team:</h2>
          <p>
            <span className="font-bold">Start solo:</span> if qualified, then scale.
          </p>
          <p>
            <span className="font-bold">Instructor qualifications:</span> that build credibility (e.g., RAD, certifications).
          </p>
          <p>
            <span className="font-bold">Talent sources:</span> Facebook groups, arts job boards, referrals.
          </p>
          <p>
            <span className="font-bold">Run auditions:</span> or trial sessions before hiring.
          </p>
          <p>
            <span className="font-bold">Future team:</span> receptionist or admin, if scaling beyond solo.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Set Up Booking & Payment Systems [Vibefam is introduced in this section]:</h2>
          <p>
            <span className="font-bold">Importance of automation:</span> from Day 1 (avoid manual admin burnout).
          </p>
          <p>
            <span className="font-bold">Options:</span> Google Sheets vs. studio management tools (e.g., Vibefam).
          </p>
          <p>
            <span className="font-bold">Highlight features:</span> class sign-ups, trial classes, email marketing.
          </p>
          <p>
            <span className="font-bold">Set up PayNow:</span> credit card options – cashless expectations in SG.
          </p>
          <p>
            <span className="font-bold">Seamless trials:</span> software helps convert leads quickly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Marketing Your Studio (Singapore-Specific Tactics):</h2>
          <p>
            <span className="font-bold">Local SEO:</span> Google My Business, class schedules on-site.
          </p>
          <p>
            <span className="font-bold">Social media:</span> IG reels at SG landmarks, dance trends during local holidays.
          </p>
          <p>
            <span className="font-bold">Offline outreach:</span> school demos, holiday camps, CC collaborations.
          </p>
          <p>
            <span className="font-bold">Early offers:</span> first-class free, founding discounts, group packages.
          </p>
          <p>
            <span className="font-bold">Distribution:</span> list on Klook, ClassPass, parenting forums.
          </p>
          <p>
            <span className="font-bold">Retention from day one:</span> build a WhatsApp group, CRM emails.
          </p>
          <p>
            <span className="font-bold">Mini-case:</span> Local studio that filled 50 slots in 2 months via CC demo.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Final Words & What to Do Next:</h2>
          <p>
            <span className="font-bold">Recap:</span> idea → setup → operations → launch → growth.
          </p>
          <p>
            <span className="font-bold">Encouragement:</span> it’s tough but doable with the right roadmap.
          </p>
          <p>
            <span className="font-bold">Gentle CTA:</span> Tools like Vibefam can help automate so you can focus on your passion – the dancing.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold">Why This Guide Stands Out</h2>
      <div className="space-y-2">
        <p>Hyper-localized: Singapore-specific licenses, costs, tools, and examples.</p>
        <p>Actionable: Not just inspirational – gives numbers, tools, checklists.</p>
        <p>Trust-building: Helps aspiring founders before pitching a product.</p>
        <p>Fills Gaps: Current online guides skip local licensing and real-world startup costs – this one doesn’t.</p>
      </div>
    </div>
  )
}

const keywordsData = [
  { keyword: "start dance studio Singapore", intent: "Transactional" },
  { keyword: "open dance studio Singapore", intent: "Transactional" },
  { keyword: "dance studio business Singapore", intent: "Informational" },
  { keyword: "how to start a dance studio in Singapore", intent: "Informational" },
  { keyword: "steps to open a dance academy in Singapore", intent: "Informational" },
  { keyword: "licenses for dance studio Singapore", intent: "Informational" },
  { keyword: "cost to start a dance studio in Singapore", intent: "Informational" },
]

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: Start a Dance Studio in Singapore
          </h1>
          <p className="mt-2 text-muted-foreground">
            Here's the SEO plan and localised business guide for aspiring dance studio founders in Singapore.
          </p>
          <div className="flex justify-end">
            <Button asChild>
              <a
                href="https://docs.google.com/document/d/1r_Mggur7UBf4ZyySZBYlmGTaic37SuAFYtkUpshXoko/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit Document
              </a>
            </Button>
          </div>
        </header>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Keyword Analysis</CardTitle>
            <CardDescription>
              Target keywords and their search intent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Keyword</TableHead>
                    <TableHead>Intent</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordsData.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{item.keyword}</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {item.intent}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              <div className="bg-yellow-200 text-yellow-900 font-bold p-4 rounded-xl text-lg text-center">
                This is the blog outline - awaiting your feedback
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DanceStudioArticleDisplay />
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
