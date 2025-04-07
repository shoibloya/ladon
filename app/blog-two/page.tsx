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
          Opening a Yoga Studio in Singapore: Licenses, Costs, and Setup Guide
        </h1>
        <p>
          <span className="font-bold">Content Gap Rationale:</span> Current top results focus on cost breakdowns​ or global how-to guides, but none thoroughly address Singapore’s licensing and permit questions. For example, prospective owners may not realize that most fitness businesses in Singapore don’t require a special operating license​, aside from standard business registration and specific situations (like an Arts Entertainment License for public events). Right now, this information is scattered across official sites and PDFs, which are not user-friendly. A Vibefam blog can objectively compile all needed steps – from ACRA registration and URA space usage guidelines to industry certifications and music copyright licenses – in one place. This meets user intent more directly than the patchy, often non-specific content currently available.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Introduction:</h2>
        <p>
          <span className="font-bold">The Growing Popularity of Yoga in Singapore:</span> Discuss the increasing interest in yoga and the opportunities it presents for new studios.​
        </p>
        <p>
          <span className="font-bold">Purpose of the Guide:</span> Highlight the lack of consolidated, Singapore-specific resources and introduce the guide as a solution.​
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Understanding the Yoga Market in Singapore:</h2>
        <p>
          <span className="font-bold">Market Research:</span> Emphasize the importance of analyzing local demand, identifying target demographics, and assessing competition.​
        </p>
        <p>
          <span className="font-bold">Identifying Your Niche:</span> Discuss the benefits of specializing in specific yoga styles or targeting particular client segments to differentiate the studio.​
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Business Registration and Legal Requirements:</h2>
        <p>
          <span className="font-bold">Choosing a Business Structure:</span> Outline options such as Sole Proprietorship, Limited Liability Partnership (LLP), and Private Limited Company, including their implications.​
        </p>
        <p>
          <span className="font-bold">Business Registration Process:</span> Provide a step-by-step guide on registering with the Accounting and Corporate Regulatory Authority (ACRA).​
        </p>
        <p>
          <span className="font-bold">Licenses and Permits:</span>
        </p>
        <p>
          <span className="font-bold">Music Copyright License:</span> Explain the necessity of obtaining a license from the Composers and Authors Society of Singapore (COMPASS) for playing music in classes.
        </p>
        <p>
          <span className="font-bold">Public Entertainment License:</span> Clarify that this is generally not required for regular yoga classes but may be needed for special events or performances.​
        </p>
        <p>
          <span className="font-bold">Urban Redevelopment Authority (URA) Compliance:</span> Discuss the importance of ensuring the chosen location is zoned appropriately for a yoga studio and the process for applying for a Change of Use if necessary.​
        </p>
        <p>
          <span className="font-bold">Insurance Considerations:</span> Highlight the importance of obtaining liability insurance to protect against potential claims.​
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Financial Planning and Cost Analysis:</h2>
        <p>
          <span className="font-bold">Startup Costs Breakdown:</span>
        </p>
        <p>
          <span className="font-bold">Studio Rental:</span> Provide insights into rental costs in various districts, emphasizing the balance between location desirability and affordability.​
        </p>
        <p>
          <span className="font-bold">Renovations and Furnishings:</span> Estimate costs for essential renovations, mirrors, flooring, lighting, and reception area setup.​
        </p>
        <p>
          <span className="font-bold">Equipment Purchases:</span> Detail expenses for yoga mats, blocks, straps, and other necessary equipment.​
        </p>
        <p>
          <span className="font-bold">Initial Marketing Budget:</span> Suggest allocating funds for branding, website development, and initial promotional efforts.​
        </p>
        <p>
          <span className="font-bold">Ongoing Operational Expenses:</span>
        </p>
        <p>
          <span className="font-bold">Utilities and Maintenance:</span> Estimate monthly costs for electricity, water, and routine maintenance.​
        </p>
        <p>
          <span className="font-bold">Staff Salaries:</span> Discuss budgeting for instructors and administrative staff, considering full-time and part-time options.​
        </p>
        <p>
          <span className="font-bold">Software Subscriptions:</span> Mention costs for studio management software to handle bookings and payments.​
        </p>
        <p>
          <span className="font-bold">Funding Options:</span> Explore avenues such as personal savings, bank loans, and government grants available for small businesses in Singapore.​
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Selecting the Ideal Location:</h2>
        <p>
          <span className="font-bold">Factors to Consider - Accessibility:</span> Emphasize the importance of proximity to public transport and parking facilities.​
        </p>
        <p>
          <span className="font-bold">Target Demographic:</span> Align location choice with the preferences and habits of the intended client base.​
        </p>
        <p>
          <span className="font-bold">Competition Analysis:</span> Evaluate the presence of other yoga studios in the vicinity and identify potential opportunities or challenges.​
        </p>
        <p>
          <span className="font-bold">Space Requirements - Studio Size:</span> Recommend space dimensions based on class sizes and types of yoga offered.​
        </p>
        <p>
          <span className="font-bold">Amenities:</span> Discuss the need for changing rooms, showers, storage, and reception areas.​
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Designing and Outfitting the Studio:</h2>
        <p>
          <span className="font-bold">Creating a Welcoming Atmosphere:</span> Offer tips on interior design elements that promote relaxation and focus.​
        </p>
        <p>
          <span className="font-bold">Equipment and Props - Quality Considerations:</span> Stress the importance of investing in durable, high-quality yoga mats and props.​
        </p>
        <p>
          <span className="font-bold">Sourcing Suppliers:</span> Provide information on reputable local suppliers and average costs.​
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Hiring Qualified Instructors:</h2>
        <p>
          <span className="font-bold">Qualifications and Certifications:</span> Outline the credentials to look for, such as Yoga Alliance certification.​
        </p>
        <p>
          <span className="font-bold">Recruitment Strategies:</span> Suggest methods for finding instructors, including job portals, yoga teacher training programs, and networking within the yoga community.​
        </p>
        <p>
          <span className="font-bold">Employment Terms:</span> Discuss considerations for hiring full-time versus freelance instructors and the implications for scheduling and budgeting.​
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Marketing and Client Acquisition:</h2>
        <p>
          <span className="font-bold">Building an Online Presence - Website Development:</span> Highlight the importance of a user-friendly website with class schedules, instructor bios, and online booking capabilities.​
        </p>
        <p>
          <span className="font-bold">Social Media Engagement:</span> Recommend platforms like Instagram and Facebook for sharing content, promoting events, and engaging with the community.​
        </p>
        <p>
          <span className="font-bold">Community Engagement - Introductory Offers:</span> Suggest offering free trial classes or discounted packages to attract new clients.​
        </p>
        <p>
          <span className="font-bold">Partnerships:</span> Explore collaborations with local businesses, such as health food cafes or fitness apparel stores, for cross-promotions.​
        </p>
        <p>
          <span className="font-bold">Workshops and Events:</span> Host special events or guest instructor workshops to generate interest and showcase the studio's offerings.​
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Implementing Studio Management Systems:</h2>
        <p>
          <span className="font-bold">Class Scheduling and Booking - Software Solutions:</span> Discuss the benefits of using studio management software for streamlining class bookings, cancellations, and waitlists.​
        </p>
        <p>
          <span className="font-bold">Payment Processing - Online Payments:</span> Emphasize the convenience of integrating secure online payment systems for memberships and class packages.​
        </p>
        <p>
          <span className="font-bold">Client Communication - Email Newsletters:</span> Highlight the effectiveness of regular newsletters for updates, promotions, and community building.​
        </p>
        <p>
          <span className="font-bold">Feedback Mechanisms:</span> Implement systems for collecting and responding to client feedback to improve services.​
        </p>
      </div>
    </div>
  )
}

const keywordsData = [
  { keyword: "open yoga studio Singapore", intent: "Transactional" },
  { keyword: "start pilates studio Singapore", intent: "Transactional" },
  { keyword: "yoga studio Singapore requirements", intent: "Informational" },
  { keyword: "licenses needed to open a yoga studio in Singapore", intent: "Informational" },
  { keyword: "how to start a yoga studio in Singapore", intent: "Informational" },
  { keyword: "what do I need to open a yoga studio in Singapore", intent: "Informational" },
  { keyword: "starting a pilates studio in Singapore", intent: "Informational" },
]

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: Start a Yoga Studio in Singapore
          </h1>
          <p className="mt-2 text-muted-foreground">
            Here's the SEO plan and localised business guide for aspiring yoga studio founders in Singapore.
          </p>
          <div className="flex justify-end">
            <Button asChild>
              <a
                href="https://docs.google.com/document/d/1LKskHxCrTn7HxwiCYFluLB2SM1Eztg0lFVYNg9cnPmg/edit?usp=sharing"
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
