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
          Proposed Blog Topic: “Singapore Fitness Studio Legal Checklist: Licenses, Permits, and Insurance Explained.”
        </h1>
        <p>
          <span className="font-bold">Content Gap & Rationale:</span> This topic addresses searches from cautious studio owners who want to “do it right” legally. Currently, the information is scattered – one might find a law firm PDF with heavy legal jargon outlining gym regulations, or generic business setup guides that don’t get into niche details like music licensing. There is no friendly, fitness-specific compliance checklist in search results. By creating an easy-to-read legal guide, Vibefam can fill a crucial gap. It will translate dense requirements (e.g. Bird & Bird’s legal brief) into actionable steps for a layperson. This helps establish trust with prospects (positioning Vibefam as a knowledgeable local expert). Importantly, this content does not duplicate existing Vibefam blogs – it’s a new angle. Where Vibefam’s past posts focus on operations and growth, this one focuses on compliance, which has been missing. For example, new owners often ask if they need a permit – we directly answer that with evidence that no special license is required, and then provide additional guidance on things they might not realize they need (like music rights or insurance). This directly aligns with their search intent (questions about licenses or legal steps) and gives more value than the sparse info currently available. By filling this content gap, Vibefam’s blog can become the go-to resource that new Singapore studio owners reference (and possibly share) when ensuring their business is legally sound.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Introduction:</h2>
        <p>
          Starting a fitness or wellness studio isn’t just about finding a space and setting up classes – owners must also navigate the legal and regulatory landscape. Explain that Singapore is a business-friendly environment with relatively straightforward requirements for gyms and studios, which is good news. However, there are still important legal steps and best practices (from business registration to insurance) that studio owners need to know. This section sets the stage that the article will demystify those requirements in simple terms.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Business Registration and Entity Setup:</h2>
        <p>
          Cover the first legal step – registering the business with ACRA. Outline choices (sole proprietorship vs. private limited company, etc.) and recommend based on liability concerns (many studio owners may opt for an LLC/Pte Ltd for liability protection). This ensures the studio is a legal entity. (Keep this brief as it’s general to all businesses, but it’s the foundation.)
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Licenses and Permits – What’s Not Needed:</h2>
        <p>
          Address the common question upfront: “Do I need any special license to run a gym/studio?” – The answer: No specific operating license is required for gyms or fitness studios in Singapore. Emphasize this to relieve confusion (many other countries mandate fitness center licenses, but SG does not). Clarify that as long as you have a legally registered business, you can operate a fitness studio – there isn’t a government fitness authority issuing permits for studios.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Zoning and Location Approval:</h2>
        <p>
          Explain that while no fitness license is needed, choosing a location has to comply with zoning laws. In Singapore, not every space can be a gym by default (planning permissions depend on property type):
        </p>
        <p>
          If renting a commercial unit or shophouse, ensure it’s approved for “Commercial – Gym/Fitness” use. Some spaces are zoned for offices or retail; you may need landlord or URA permission to use as a fitness studio.
        </p>
        <p>
          Note URA guidelines: gyms are generally allowed in commercial buildings; for some mixed-use or industrial spaces, special approval might be needed (e.g. small gyms sometimes operate in light industrial buildings under specific class permits). Provide a tip: you can use URA’s online resources or ask the landlord to confirm if fitness activities are permitted at that address. This saves headaches later.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Safety and Facility Compliance:</h2>
        <p>
          Outline any local regulations related to safety – for example, if the studio renovation involves structural changes, BCA approvals might be needed (major renovations). Also mention fire safety: any public space in SG (including studios) should comply with SCDF fire code (e.g. exit signs, extinguishers on premises). While this is usually handled by the building, a studio owner should double-check these basics when setting up. Additionally, if offering certain services (like a spa corner or massage therapy), those might require separate licenses (massage establishment license), but typical fitness classes do not.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Music Licensing:</h2>
        <p>
          Many studios will play music during classes (for aerobics, dance, etc.). Inform owners that playing copyrighted music in a commercial setting does require licenses in Singapore. They need to obtain a public performance license from organizations for musical compositions and sound recordings. Explain in simple terms: if you use popular music playlists in your classes, you should pay the annual fees to legally play music. This is a commonly overlooked legal requirement.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Health and Safety Regulations:</h2>
        <p>
          Mention any health regulations – for instance, during the COVID-19 period there were strict measures (safe distancing, mask/vaccine rules). As of now those are relaxed, but it’s good practice to maintain hygiene (cleaning equipment, etc.). No specific health license is needed, but maintaining a safe environment is part of compliance with general laws (workplace safety, etc.). If relevant, note guidelines from SportSG or industry associations on class size limits or ventilation.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Selling Products or Food/Beverages:</h2>
        <p>
          If the studio plans to have a juice bar or sell smoothies/protein snacks on-site, highlight that an F&B license from SFA is required for handling and selling food. Summarize the rule: any preparation of food/drink for sale requires a Food Shop License, and staff must have basic hygiene training. Also mention the Nutri-Grade requirements if selling beverages. Advise owners to consider whether they want to offer F&B; if not, they can skip this, but if yes, be prepared to comply with these additional regulations.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Employment Regulations:</h2>
        <p>
          Briefly note that when hiring staff or trainers, normal Singapore employment laws apply. If hiring foreigners as instructors, you’ll need to get them work permits or Employment Passes – which has its own quota and criteria. Ensure any freelance instructors are properly contracted. Also, the Work Injury Compensation Act (WICA) means you must have insurance/workers’ compensation for employees. This reminds owners that being an employer carries legal responsibilities (CPF contributions for local staff, etc.) and they should consult MOM guidelines.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Business Insurance – Protecting Your Studio:</h2>
        <p>
          Strongly advise studios to carry relevant insurance even if not legally mandated. Highlight three key types of insurance recommended:
        </p>
        <p>
          <span className="font-bold">Public Liability Insurance:</span> Protects against claims if a client gets injured in your studio. Important since fitness activities can lead to accidents – without insurance, one claim could be financially devastating.
        </p>
        <p>
          <span className="font-bold">Property Insurance:</span> Covers damage to your studio equipment or premise (fire, flood, theft). Often includes content coverage and business interruption coverage.
        </p>
        <p>
          <span className="font-bold">Employee Insurance:</span> If you have employees, work injury insurance is required by law for certain staff and is generally a good practice. This may include coverage for freelance trainers via a group personal accident policy.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Data Protection (PDPA):</h2>
        <p>
          Touch on the Personal Data Protection Act – as the studio will collect client data (names, contact info, perhaps health info), they must comply with PDPA. Basic tips: obtain consent when collecting data (e.g. a signup form with a consent checkbox), secure the data, and allow clients to unsubscribe from communications.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Checklist Summary:</h2>
        <p>
          Provide a bullet list “Compliance Checklist” summarizing all points for easy reference. For example:
        </p>
        <p>
          • Business registered (ACRA)<br/>
          • No special fitness license needed (✅)<br/>
          • Location use approved (URA zoning ✅)<br/>
          • Music license obtained if playing copyrighted music<br/>
          • Food license obtained if selling drinks/food<br/>
          • Hiring done per MOM rules (work passes if needed, CPF, etc.)<br/>
          • Insurance policies in place (liability, property, employee)<br/>
          • PDPA measures in place for member data
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Conclusion:</h2>
        <p>
          Encourage the reader that while the list seems long, Singapore’s clear regulations mean once these boxes are ticked, they can operate with peace of mind. Emphasize that compliance is not a hurdle but a safety net – it protects their business and customers. End by positioning Vibefam as a partner that not only provides software but understands the fitness industry landscape in Singapore.
        </p>
      </div>
    </div>
  )
}

const keywordsData = [
  { keyword: "gym license Singapore", intent: "Transactional" },
  { keyword: "fitness studio permits SG", intent: "Transactional" },
  { keyword: "open gym legal requirements Singapore", intent: "Transactional" },
  { keyword: "do I need a license to open a gym in Singapore", intent: "Informational" },
  { keyword: "permits needed for fitness studio Singapore", intent: "Informational" },
  { keyword: "regulations for opening a yoga studio Singapore", intent: "Informational" },
  { keyword: "insurance for fitness studio Singapore", intent: "Informational" },
]

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: Singapore Fitness Studio Legal Checklist: Licenses, Permits, and Insurance Explained.
          </h1>
          <p className="mt-2 text-muted-foreground">
            Here's the SEO plan and localized business guide for fitness studio owners in Singapore.
          </p>
          
          <div className="flex justify-end">
          <Button asChild>
              <a
                href="https://docs.google.com/document/d/1S-i_9oJ1FyXwnrJRA3AtNh6Y_DTw4uV-eppevyj8F5k/edit?usp=sharing"
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
