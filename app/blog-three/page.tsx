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
      <div>
        <h1 className="text-3xl font-bold">
          Proposed Blog Topic: “10 Effective Marketing Strategies to Boost Your Fitness Studio’s Membership in Singapore.”
        </h1>
        <p>
          <span className="font-bold">Content Gap Rationale:</span> A search for fitness studio marketing advice in Singapore yields limited and fragmented information. The top hits are often generic tips from marketing agencies or global articles. For example, MediaOne’s blog on marketing a gym in Singapore gives a cursory list of ideas​ but lacks depth and real studio-owner insights (it reads more like an agency pitch). There is no comprehensive guide that ties together digital marketing, local partnerships, and community engagement specific to Singapore’s market. Vibefam’s own blog has covered specific tactics in separate posts (email marketing tools, referral programs, TikTok, etc.), but not a one-stop strategy guide. This proposed post fills the gap by consolidating all key marketing strategies into a focused, step-by-step playbook. It aligns with search intent (“how to attract more members to my gym”) by providing practical examples and local context. By citing local trends and integrating knowledge from Vibefam’s niche posts, this article would outperform generic content and become a go-to resource for Singapore studio owners looking to grow their customer base.

        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Introduction:</h2>
        <p>
          <span className="font-bold">Overview:</span> Acknowledge that Singapore has a saturated fitness market (with many gyms, yoga and dance studios), so smart marketing is crucial to stand out. Note that traditional methods alone won’t suffice – studio owners need a mix of digital and community-focused strategies to thrive. Promise actionable strategies tailored to Singapore’s context (high social media usage, dense urban community, etc.).
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Optimize Your Online Presence:</h2>
        <p>
          <span className="font-bold">Key Points:</span> Emphasize that most clients find studios via Google or social media. Advise to set up Google My Business with a correct address and class info so that your studio appears in local searches/maps. Mention SEO basics for a studio website (target local keywords like “&lt;fitness type&gt; studio Singapore”). Note that many studios in SG still underutilize SEO, offering an advantage to those who do it properly.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Leverage Social Media Marketing:</h2>
        <p>
          <span className="font-bold">Strategies:</span> Outline how platforms like Instagram, Facebook, and TikTok are popular in Singapore’s fitness scene. Provide tips such as posting client transformation stories, behind-the-scenes of classes, and staff spotlights to humanize the brand. Highlight using Instagram Stories and TikTok trends to reach younger demographics. Emphasize that TikTok marketing can be cost-effective through local micro-influencers who charge modest fees.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Run Targeted Online Ads:</h2>
        <p>
          <span className="font-bold">Approach:</span> Explain the value of Facebook/Instagram ads targeting local demographics (e.g. women 25-40 in Singapore interested in yoga) and using Google Ads for keywords like “&lt;type&gt; classes Singapore” to capture active searchers. Stress that landing pages should be optimized for easy sign-ups for trial classes.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Local Partnerships and Cross-Promotion:</h2>
        <p>
          <span className="font-bold">Collaboration:</span> Suggest partnering with nearby businesses and communities. For example, collaborate with a healthy cafe for mutual promotions or team up with offices and condos nearby to offer corporate or group rates. This cross-promotion taps into established customer bases in your vicinity.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Host Events and Workshops:</h2>
        <p>
          <span className="font-bold">Event Ideas:</span> Encourage organizing free or low-cost events such as open house workout days, wellness workshops, or charity fitness events. For instance, a dance studio might host a “Dance Jam at East Coast Park” to draw newcomers. Such events create buzz, generate social media content, and may even attract media coverage.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Referral Programs:</h2>
        <p>
          <span className="font-bold">Implementation:</span> Explain how referral schemes can be powerful in Singapore’s close-knit communities. Describe setting up a referral program (e.g. offering a free class or merchandise for each friend referred) and stress the importance of making referrals easy through digital codes or software tracking.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Loyalty Incentives and Engagement:</h2>
        <p>
          <span className="font-bold">Engagement Tactics:</span> Discuss strategies to keep current members engaged so they become ambassadors. Ideas include a loyalty punch card (e.g. 10 classes attended = 1 free), celebrating member milestones, and running friendly challenges like a 30-day yoga challenge with prizes.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Email Marketing & Community Updates:</h2>
        <p>
          <span className="font-bold">Best Practices:</span> Even with robust social media, email newsletters remain effective. Advise building an email list during sign-ups and sending newsletters filled with class updates, member success stories, fitness tips, and event information. Emphasize tailoring content for different segments to improve conversion.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Leverage ClassPass Strategically:</h2>
        <p>
          <span className="font-bold">Balanced Use:</span> Acknowledge that many Singapore studios use aggregators like ClassPass to fill classes. Advise that while ClassPass offers exposure, studios must convert users into direct members to avoid high commission fees. Provide tips like limiting ClassPass slots for peak classes and encouraging users to join mailing lists or follow on social media.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Monitor, Analyze, Adapt:</h2>
        <p>
          <span className="font-bold">Continuous Improvement:</span> Encourage the use of analytics to track marketing effectiveness. Suggest monitoring sign-ups per campaign with tools like Facebook/Instagram insights, Google Analytics, or other dashboards. Emphasize that if something isn’t working, adjust the strategy or reallocate the budget.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Conclusion:</h2>
        <p>
          <span className="font-bold">Summary:</span> Sum up that implementing these strategies—from online marketing to grassroots community-building—can significantly grow a fitness studio’s membership base in Singapore. Reiterate that tailoring content to local consumer behavior and partnerships is key, and end with a call-to-action for further engagement.
        </p>
      </div>
    </div>
  )
}

const keywordsData = [
  { keyword: "fitness studio marketing Singapore", intent: "Transactional" },
  { keyword: "gym marketing strategies Singapore", intent: "Transactional" },
  { keyword: "promote yoga studio Singapore", intent: "Transactional" },
  { keyword: "how to market a dance studio in Singapore", intent: "Informational" },
  { keyword: "how to get more members for my gym Singapore", intent: "Informational" },
  { keyword: "marketing ideas for yoga/pilates studios Singapore", intent: "Informational" },
  { keyword: "attract customers to fitness studio Singapore", intent: "Informational" },
]

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: 10 Effective Marketing Strategies to Boost Your Fitness Studio’s Membership in Singapore
          </h1>
          <p className="mt-2 text-muted-foreground">
            Here's the SEO plan and localized business guide for boutique fitness studio owners in Singapore.
          </p>
          <div className="flex justify-end">
          <Button asChild>
              <a
                href="https://docs.google.com/document/d/1qPgazwUCkoU9gkC3EKkfcxKzJ2FcHyq-ODo_22xE8iE/edit?usp=sharing"
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
