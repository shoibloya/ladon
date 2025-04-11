"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const DanceStudioArticleDisplay = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        How to Start a Dance Studio in Singapore – A Step-by-Step Guide
      </h1>
      <Image
        src="/blog-one.png"
        alt="How to Start a Dance Studio in Singapore"
        width={800}
        height={400}
      />
      <h2 className="text-2xl font-bold">Introduction</h2>
      <p>
        Singapore's dance scene is more vibrant than ever. Dance culture is growing rapidly, from K-pop cover groups to ballet performances at the Esplanade. New dance studios are increasing across the island, fueled by rising interest, especially among youths​ vibefam.com. Yet, if you're an aspiring dance studio founder, you might have noticed a gap – there aren't many comprehensive local guides on how to start a studio in Singapore.
      </p>

      <h2 className="text-2xl font-bold">Find Your Niche & Validate the Idea</h2>
      <p>
        <strong>Define Your Niche:</strong> Begin by clarifying what type of dance studio you wish to be. Will you be a ballet studio for children, a K-pop and street dance studio for teenagers, a high-end adult dance studio for fitness, or a cultural dance forms studio?
      </p>
      <p>
        <strong>Conduct Research on Local Demand:</strong> Knowing the niche, determine whether there is demand. Conduct casual market research by observing how many existing studios provide that genre, particularly within your desired location. In Singapore, dance studios must cluster into specific areas (e.g., the Bugis/Bras Basah has a few ​vibefam.com).
      </p>
      <p>
        <strong>Trial Classes Test:</strong> Test your concept before renting by running several trial classes. You can hire spaces hourly to do that – check out community club multipurpose rooms, school auditoriums, or other dance studios when off-peak. Some locations in Singapore allow you to rent out dance studios hourly. For instance, The Common Good at Joo Chiat remunerates about S$40/hour for a 550 sqft studio accommodating 12 dancers. (Source: Vibefam)
      </p>

      <h2 className="text-2xl font-bold">Business Plan & Budget (With Local Numbers)</h2>
      <p>
        <strong>Initial Cost Breakdown:</strong> What does it cost to get a dance studio up and running in Singapore? Here's a rough breakdown of significant expenses:
      </p>
      <p>
        <strong>Rent and Deposit:</strong> Rent will likely be your most significant ongoing expense. Prices vary by location and type of space. A small studio (~800–1000 sq ft) in a heartland area (say, a HDB town centre or an industrial estate) might cost around S$1,000–$5,000 monthly rent. In a prime location or shopping mall, that size could easily be S$8,000–$12,000+ monthly. (Source: WodGuru)
      </p>
      <p>
        <strong>Renovation and Fit-Out:</strong> Dance studios require specialized renovations. At minimum, you'll need mirrors on the walls, proper flooring, and sound equipment. A basic fit-out for a small studio can cost ~S$10,000–$50,000. (Source: The Studio Director guide)
      </p>
      <p>
        <strong>Equipment and Furniture:</strong> Factor in the cost of sound systems (speakers, mixer, maybe wireless mic – say S$1,000–$4,000 depending on quality), a laptop or iPad for managing music/booking, fans or AC enhancements, and basic furnishings. The total cost can add up to around S$5,000–$20,000 (Source: WodGuru)
      </p>
      <p>
        <strong>Licenses and Initial Fees:</strong> Account for registration fees (ACRA charges S$115 for registering a sole proprietorship or S$315 for a private limited company, for example) and a music licensing fee if you'll be playing copyrighted music (COMPASS license fees can be a few hundred dollars annually for a small studio—the exact amount varies with your usage). (Source: ACRA , COMPASS)
      </p>
      <p>
        <strong>Operating Buffer:</strong> It's wise to have 3–6 months of operating expenses saved as a buffer. This covers rent, utilities, and salaries, even if student sign-ups are initially slow. (Source: Enterprise Singapore)
      </p>
      <p>
        <strong>Revenue Projections:</strong> Now, how will money come in? Typically, through class fees. Let's do a simple projection example. Suppose you offer S$45 per drop-in class, with package rates that bring the per-class fee to around S$40 (common in many studios). If you run three classes a day, 6 days a week, that's about 18 weekly. If each class averages 10 students paying ~S$40, that's S$400 per class, or S$7,200 per week, roughly S$28,000+ per month in gross revenue. (Source: ActiveSg)
      </p>

      <h2 className="text-2xl font-bold">Legal Setup & Registration</h2>
      <Image
        src="/blog-one-1.png"
        alt="Legal Setup & Registration"
        width={800}
        height={400}
      />
      <p>
        <strong>Choose a Business Entity & Register with ACRA:</strong> In Singapore, any business needs to be registered with the Accounting and Corporate Regulatory Authority (ACRA). You have a few options for business structure:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Sole Proprietorship:</strong> Easiest and cheapest to register – basically, you are operating under a business name. This has low compliance requirements but offers no liability protection (you are personally liable for debts).
        </li>
        <li>
          <strong>Private Limited Company (Pte. Ltd.):</strong> A separate legal entity from you. It limits your liability and can be advantageous for taxes and growth (investors prefer companies). It's a bit more costly to set up and has ongoing filing requirements (annual returns, etc.).
        </li>
      </ul>
      <p>(Source: ACRA)</p>
      <p>
        <strong>Licenses to Operate a Studio:</strong> Next, consider what licenses you need to run a dance studio legally:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Public Entertainment Licence:</strong> This one often confuses. Issued by the police (SPF), a Public Entertainment License is typically needed for venues that entertain the public (like live music, dancing, karaoke, etc.).
        </li>
        <li>
          <strong>Music Copyright Licenses (COMPASS/RIAS):</strong> If you'll be playing music in your studio (which you almost certainly will – try dancing in silence and see how that goes), you must obtain the proper music license.
        </li>
        <li>
          <strong>URA Zoning Approval:</strong> Ensure that your physical studio location is approved for dance or fitness studio use. Different properties are zoned for other uses (commercial, residential, industrial).
        </li>
        <li>
          <strong>Insurance:</strong> Protecting your business (and students) with insurance is crucial. At minimum, get Public Liability Insurance – this covers you if a student or visitor gets injured on your premises and holds you responsible.
        </li>
      </ul>
      <p>(Source: COMPASS)</p>

      <h2 className="text-2xl font-bold">Choose the Right Studio Space</h2>
      <Image
        src="/blog-one-2.png"
        alt="Choose the Right Studio Space"
        width={800}
        height={400}
      />
      <p>
        "Location, location, location!" may be a cliché, but it holds true for dance studios, too, given the reality of rental costs. In Singapore, choosing the right space involves weighing location convenience against rent, considering the type of building, and thinking creatively about space usage.
      </p>
      <p>
        <strong>Shophouse, Mall, Industrial or Community Center?</strong> Here are your choices:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>HDB Shophouses/Street Shophouses:</strong> These are the units in HDB towns or along streets (like those two-story shops in Bugis, Chinatown, Joo Chiat, etc.). (Source: Shophouses.sg)
        </li>
        <li>
          <strong>Shopping Mall Units:</strong> If you want foot traffic and visibility, a mall or commercial building space can be great. (Source: Tagvenue)
        </li>
        <li>
          <strong>Industrial Buildings:</strong> This is a popular choice for fitness gyms and some dance studios on a budget. Industrial or B1/B2 buildings (in areas like Tai Seng, Bukit Merah, or Jurong) often have large floor plates and lower rents per square foot.
        </li>
        <li>
          <strong>Community Centres (CCs) / Sports Facilities:</strong> You might not lease a CC studio permanently (People's Association usually runs them), but here's a thought: some private dance businesses partner with CCs to conduct classes without having their premises full-time. (Source: PAP)
        </li>
      </ul>
      <p>
        <strong>Space and Layout Considerations:</strong> Once you narrow the type of location, look at the specific unit with a dancer's eye:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Size:</strong> How many students do you plan per class? As a rough comfort guideline, you want at least 4x4 feet per dancer. An 800 sq ft studio might comfortably accommodate ~15 dancers for group classes.
        </li>
        <li>
          <strong>Shape:</strong> Rectangular studios without pillars are ideal (unobstructed movement and sightlines). Odd L-shapes or many columns can break the flow – you might partition or use only part of it effectively.
        </li>
        <li>
          <strong>Flooring:</strong> This is very important—check what's currently in the unit. Concrete or tile floors are a no-go for dance due to injury risk. Budget to install a wooden sprung floor or lay dance vinyl (Marley) on cushioning.
        </li>
        <li>
          <strong>Mirrors & Walls:</strong> At least one long wall for mirrors is standard.
        </li>
        <li>
          <strong>Sound and Noise:</strong> You may need soundproofing if the unit shares walls with offices or residences. Carpets, curtains (or even acoustic foam panels) can help muffle sound.
        </li>
      </ul>
      <p>(Source:StageStep)</p>

      <h2 className="text-2xl font-bold">Hire Instructors & Build a Team</h2>
      <Image
        src="/blog-one-3.png"
        alt="Hire Instructors & Build a Team"
        width={800}
        height={400}
      />
      <p>
        Who will teach at your studio? Initially, the answer might be you – many studio founders start by teaching most classes themselves (after all, it's your passion!). But as you grow, or if you want to offer styles beyond your expertise, you'll need a team of instructors.
      </p>
      <p>
        <strong>What to Look for in an Instructor:</strong> Beyond dance skills, look for teachers who align with your studio's values and vibe. Key qualities:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Expertise & Qualifications:</strong> Having formally certified instructors for specific genres like ballet is a huge plus. For example, RAD (Royal Academy of Dance) certification for ballet instructors or equivalent credentials shows they've been trained to teach safely and effectively. (Souce: royal academy of dance)
        </li>
        <li>
          <strong>Experience vs. Enthusiasm:</strong> An experienced teacher with 10+ years of teaching knows how to handle mixed-level classes and retain students. However, newer instructors can be just as good if they are passionate communicators and willing to learn. (Source: Dance Magazine)
        </li>
        <li>
          <strong>Personality & Reliability:</strong> A friendly, motivating instructor creates your desired welcoming atmosphere. They should also be reliable (cancelling class at the last minute is a big no-no).
        </li>
        <li>
          <strong>Qualifications for Kids' Classes:</strong> If your studio offers kids' programs, ensure instructors know how to work with young ones.
        </li>
        <li>
          <strong>Employment Terms:</strong> Decide how you'll structure pay. Common models:
          <ul className="list-disc ml-6">
            <li>
              <strong>Hourly/Per Class Rate:</strong> e.g., S$50 per class taught (exact rate depends on experience and class size). This is straightforward for part-time instructors. (Source: Glassdoor)
            </li>
            <li>
              <strong>Revenue Share:</strong> Some studios do a split (e.g., instructor gets 50% of the class revenue). If the class is small, they may at least get a minimum.
            </li>
            <li>
              <strong>Full-time Salary:</strong> If you have a key instructor or co-founder-type, you might bring them on full-time with a salary, and they teach X classes per week, plus help with admin.
            </li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-bold">Set Up Booking & Payment Systems</h2>
      <Image
        src="/blog-one-4.png"
        alt="How to Start a Dance Studio in Singapore"
        width={800}
        height={400}
      />
      <p>
        When your studio is small, it might seem feasible to handle scheduling and payments manually – jotting down class sign-ups in a notebook or Google Sheet and collecting cash or PayNow transfers from students. But as interest grows, trust us, automation is key. Singaporeans are tech-savvy and accustomed to convenience.
      </p>
      <p>
        <strong>Introducing Vibefam – Studio Management Made Easy:</strong> Instead of stitching together Google Sheets for attendance and separate apps for payments, consider a dedicated studio management software. Vibefam is one such platform explicitly designed for boutique fitness and dance studios. It's proudly used by many local studios (including dance studios in SG), so it's tailored to our needs. What can Vibefam do for you?
      </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Online Class Scheduling & Booking:</strong> You input your class schedule into VibeFam's system (one-time setup). Students can then view the schedule on their VibeFam page or app and book classes 24/7. They'll only see available slots—the system prevents overbooking and handles waitlists automatically​ . VibeFam.com.
        </li>
        <li>
          <strong>Trial Class and Package Management:</strong> Vibefam lets you configure intro offers easily—say you offer one free trial or a $10 first class. You can set that up. It also handles class packages or memberships: e.g., a 10-class package that expires in 3 months or unlimited monthly passes​ vibefam.com​ vibefam.com.
        </li>
        <li>
          <strong>Payments Integration:</strong> No more chasing payments – vibefam can integrate with payment gateways so that when students book, they can pay by credit card or even PayNow.
        </li>
        <li>
          <strong>Mobile App Experience:</strong> Vibefam offers a member app and an admin app​ at vibefam.com.
        </li>
        <li>
          <strong>Client Management & Marketing:</strong> Good software doubles as a mini-CRM. Vibefam keeps a database of your members, including their contact information, attendance history, etc.
        </li>
      </ul>
      <p>
        One of our cherished clients, Rebel Gym Singapore, switched to Vibefam and grew its business by 150%​ , vibefam.com, largely thanks to automating payments and bookings, which allowed their team to focus on teaching and marketing.
      </p>

      <h2 className="text-2xl font-bold">Marketing Your Studio (Singapore-Specific Tactics)</h2>
      <ol className="list-decimal ml-6">
        <li>
          Ace the Local SEO & Online Presence: When someone wants to find a dance class, they Google it in Singapore. Make sure you show up!
        </li>
        <li>
          Leverage Singapore Events & Culture in Marketing: We have a rich multicultural calendar and national events that you can tie into.
        </li>
        <li>
          Offline Outreach – It still works: Don't rely solely on digital. Old-school outreach can yield results.
        </li>
        <li>
          Early-Bird Promotions & Referral Incentives: When you're new, promotions help get people in the door.
        </li>
        <li>
          Tap on Platforms like ClassPass and Klook.
        </li>
        <li>
          Engage the Community and Content Marketing.
        </li>
      </ol>

      <h2 className="text-2xl font-bold">Final Words & What to Do Next</h2>
      <p>
        Starting a dance studio in Singapore is no small feat – but look at yourself now; you have the knowledge to do it! We've journeyed through finding your niche, crunching numbers, cutting through legal red tape, picking the perfect space, assembling a rockstar team, setting up seamless systems, and hustling on marketing.
      </p>
      <p>
        As a final call to action, consider how Vibefam can support you in this journey of studio entrepreneurship. Vibefam isn't just software—it's a partner that has helped many boutique studios in Singapore streamline their operations and even grow revenues by significant percentages​ vibefam.com.
      </p>
      <p>
        Now take a deep breath, do a little happy dance (why not?), and then get cracking on your following action item – registering your business, scouting that perfect studio space, or scheduling your first intro class event. We wish you all the success as you bring your dance studio dream to life. And remember, when the going gets tough, the tough dance through it.
      </p>
    </div>
  )
}

const keywordsData = [
  { keyword: "start dance studio Singapore", intent: "Transactional" },
  { keyword: "open dance studio Singapore", intent: "Transactional" },
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
                href="https://docs.google.com/document/d/1UxOSlk3x8QSfG75taRCH5JljeVdG58o9o-ls9AgFQ0k/edit?usp=sharing"
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
              <div className="bg-green-200 text-green-900 font-bold p-4 rounded-xl text-lg text-center">
                This is the blog is ready for your feedback
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
