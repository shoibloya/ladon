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

// InvestmentArticleDisplay Component – article content with updated text
const InvestmentArticleDisplay = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Which Are the Best Investments in Singapore? It Depends — Follow Alex and Su Lin’s Journey
      </h1>
      <Image src="/blog-one.png" alt="blog-one" width={800} height={600} className="mx-auto" />
      <p>
        When people Google for the best investments in Singapore or search for promising investment options Singapore has to offer, the results can be overwhelming. Stocks, bonds, crypto, property… what’s truly “best”? The real answer is: it depends.
      </p>
      <p>
        To explore that, let’s join Alex and Su Lin, a young Singaporean couple starting their investment journey over kopi si and kaya toast. With a baby on the way and dreams of upgrading from their HDB flat, they plan to invest $50,000 over the next year. As they sip their kopi, they ask themselves, "Which investment is best in Singapore?" and "Where can I get a 10% return on my money?" They even wonder, "Where is the best place to invest 50k in Singapore for a year?" Like many Singaporeans, they’re excited yet unsure where to begin.
      </p>
      <p>
        In this guide, we’ll follow their story as they chat with friends and family, uncovering the most popular investment options in Singapore from government bonds to robo-advisors and crypto. Along the way, you’ll learn what each investment is, who it suits, the risk/return tradeoffs, how to get started, and key tips. It’s like eavesdropping on a heartfelt kopi chat — no jargon, just a friendly financial discussion.
      </p>

      <h2 className="text-2xl font-bold">1. Safe and Steady: T-Bills and SGS Bonds</h2>
      <Image src="/blog-one-1.png" alt="blog-one-1" width={800} height={600} className="mx-auto" />
      <p>
        Their quest begins at breakfast with Su Lin's father, Uncle Lee, who is a staunch believer in Treasury Bills (T-Bills) and Singapore Government Securities (SGS) bonds. "They're like lending the government some money," he explains, "you'll get steady interest, hardly any risk." Perfect for short-term savings or emergency funds, these government-backed securities offer around 2.5%–3% annual returns for T-Bills and slightly more for SGS bonds. Uncle Lee reassures Alex, "It's like your money is sleeping safely and soundly."
      </p>
      <p><strong>What They Are:</strong> Loans to the Singapore government — short-term (T-Bills) and long-term (SGS bonds).</p>
      <p><strong>Returns:</strong> ~2.5%–3% p.a., backed by the government.</p>
      <p><strong>Risks:</strong> Virtually none — unless you sell early.</p>
      <p><strong>How to Start:</strong> Apply via your bank’s internet banking or ATM. Minimum: $1,000.</p>
      <p><strong>Best For:</strong> Emergency funds, home downpayment savings, and low-risk starters.</p>
      <p>Uncle Lee calls these the “kopi-o kosong” of investing — basic, dependable, and always available.</p>

      <h2 className="text-2xl font-bold">2. Flexibility with Safety: Singapore Savings Bonds (SSBs)</h2>
      <Image src="/blog-one-2.png" alt="blog-one-2" width={800} height={600} className="mx-auto" />
      <p>
        Later that day, Su Lin's colleague and friend Priya brings up another safe investment: Singapore Savings Bonds (SSBs). "It's flexible—like an enhanced savings account," Priya tells her over kopi. SSBs offer a new step-up interest rate, which incentivizes longer-term holding but with the option to redeem anytime without penalty. SSBs yield approximately 2.7%–3% annually and are ideal for medium-term goals, especially where flexibility is a priority.
      </p>
      <p><strong>Returns:</strong> Start around 2.5% in year one, step up to ~2.9% by year 10.</p>
      <p><strong>Risk:</strong> Extremely low.</p>
      <p><strong>How to Start:</strong> Apply online via bank/ATM, minimum $500.</p>
      <p><strong>Perks:</strong> Redeem anytime (with $2 fee), tax-free interest.</p>
      <p><strong>Best For:</strong> Emergency funds, medium-term savings, flexibility with returns.</p>
      <p>Priya calls it “emergency fund++” — safer than stocks, but more rewarding than a regular savings account.</p>

      <h2 className="text-2xl font-bold">3. Everyday Growth: High-Yield Savings Accounts & Fixed Deposits</h2>
      <Image src="/blog-one-3.png" alt="blog-one-3" width={800} height={600} className="mx-auto" />
      <p>
        When Alex loudly inquires how they can stash their money, their friend Karen is quick to answer. "High-yield savings accounts and fixed deposits get your money working harder," she replies. Savings accounts like OCBC 360 or DBS Multiplier give 2%–4% interest per annum, depending on fulfilling some conditions. Fixed deposits lock up money for the short term (3–12 months) at slightly higher fixed interest rates.
      </p>
      <p><strong>Returns:</strong> Up to 4%–7% if you meet criteria; FDs offer ~2.3%–2.5% (some promos go higher).</p>
      <p><strong>Risk:</strong> Practically zero.</p>
      <p><strong>How to Start:</strong> Open online, credit salary, spend on linked credit card.</p>
      <p><strong>Tips:</strong> Stick to one good account rather than chasing every promo.</p>
      <p>Karen calls this “easy money hygiene” — no thrills, but quietly compounding in the background.</p>

      <h2 className="text-2xl font-bold">4. Long-Term Security: CPF</h2>
      <Image src="/blog-one-4.png" alt="blog-one-4" width={800} height={600} className="mx-auto" />
      <p>
        "Don't forget CPF!" David, their financially savvy friend, reminds them over dinner. CPF accumulates quietly at assured rates—2.5% for the Ordinary Account (OA) and 4% for the Special Account (SA). "It's a steady, long-term wealth-building tool," David observes, referring to voluntary top-ups for more tax relief and increased retirement security.
      </p>
      <p><strong>Returns:</strong> 2.5% (OA), 4% (SA), plus bonus interest on first $60k.</p>
      <p><strong>Risk:</strong> Zero — guaranteed by the government.</p>
      <p><strong>Lock-in:</strong> Can’t withdraw until retirement age, except for housing/medical.</p>
      <p><strong>How to Maximize:</strong> Voluntary top-ups, transfer OA to SA, CPFIS if you’re confident.</p>
      <p><strong>Best For:</strong> Retirement planning, housing, medical safety net.</p>
      <p>As David says, “CPF is boring — and sometimes boring is good.”</p>

      <h2 className="text-2xl font-bold">5. Disciplined Saving: Insurance Endowment Plans</h2>
      <Image src="/blog-one-5.png" alt="blog-one-5" width={800} height={600} className="mx-auto" />
      <p>
        The subject matter shifts as Auntie May introduces the topic of endowment plans. "It's forced savings," she states, "perfect for your child's education in the future." Endowments provide 3%–4% returns and combine guaranteed cover and savings. Auntie May advises caution—"Make sure you can commit, early surrender has penalties."
      </p>
      <p><strong>Returns:</strong> ~2%–4% p.a., partially guaranteed.</p>
      <p><strong>Risk:</strong> Low, but early withdrawal is penalizing.</p>
      <p><strong>Best For:</strong> Parents saving for kids’ education or anyone who values structure.</p>
      <p><strong>Commitment:</strong> Multi-year (e.g., 10–25 years), regular premiums.</p>
      <p>Su Lin likes the idea of “forced savings” — peace of mind for their child’s future.</p>

      <h2 className="text-2xl font-bold">6. Singapore’s Favourite Asset: Property</h2>
      <Image src="/blog-one-6.png" alt="blog-one-6" width={800} height={600} className="mx-auto" />
      <p>
        "Property always appreciates," chimes in Uncle Chan, remembering his first condo investment. Real estate yields rental income (~3%) and capital growth (another 2%–5%), but requires much capital and a long-term outlook.
      </p>
      <p><strong>Returns:</strong> Historically ~5% p.a. (rental + appreciation).</p>
      <p><strong>Risk:</strong> Medium — big capital, leverage, and market sensitivity.</p>
      <p><strong>Liquidity:</strong> Low — can’t sell quickly.</p>
      <p><strong>Costs:</strong> Stamp duties, property tax, maintenance.</p>
      <p><strong>Suitability:</strong> For those ready for long-term commitment and holding power.</p>
      <p>Uncle Chan warns, “You must angkat your property — through thick and thin.”</p>

      <h2 className="text-2xl font-bold">7. Accessible Property Exposure: REITs</h2>
      <Image src="/blog-one-7.png" alt="blog-one-7" width={800} height={600} className="mx-auto" />
      <p>
        For low-cost property investment, their friend Ben suggests Real Estate Investment Trusts (REITs). "Own a share of Orchard Road malls," he grins. REITs offer decent dividends (4%–8%) and potential appreciation without enormous upfront investments. "It's property investment without the trouble," says Ben with a grin.
      </p>
      <p><strong>Returns:</strong> 4%–8% dividend yield + capital gains.</p>
      <p><strong>Risk:</strong> Medium — market-linked.</p>
      <p><strong>How to Start:</strong> Buy on SGX with a brokerage (min. 100 units), or via ETF.</p>
      <p><strong>Perks:</strong> No landlord headaches, tax-free dividends.</p>
      <p><strong>Best For:</strong> Regular income, property exposure without millions.</p>
      <p>Ben calls REITs “income machines in disguise.”</p>

      <h2 className="text-2xl font-bold">8. Growth & Dividends: Singapore Stocks & ETFs</h2>
      <Image src="/blog-one-8.png" alt="blog-one-8" width={800} height={600} className="mx-auto" />
      <p>
        Grace shares her own bit of stock market wisdom over dessert. "Stocks can yield good dividends and growth," she explains, mentioning blue-chip stocks like DBS or Singtel. Or Exchange-Traded Funds (ETFs) provide diversified exposure to markets, with stable returns (around 5%–7%) in the long term. "Think long-term," Grace smiles warmly, "stocks reward patience."
      </p>
      <p><strong>Returns:</strong> 4%–7% long-term average (dividends + price growth).</p>
      <p><strong>Risk:</strong> Medium to high, depending on stock.</p>
      <p><strong>Best For:</strong> Long-term wealth building, retirement, children’s education.</p>
      <p><strong>How to Start:</strong> Brokerage + CDP, or Regular Savings Plan (e.g. $100/month into STI ETF).</p>
      <p>Grace says, “I sleep well holding DBS and get paid dividends while I wait.”</p>

      <h2 className="text-2xl font-bold">9. Hands-Off Investing: Robo-Advisors</h2>
      <Image src="/blog-one-9.png" alt="blog-one-9" width={800} height={600} className="mx-auto" />
      <p>
        Hari, familiar with mutual funds, suggests professionally managed unit trusts. "They make investing simple, though fees matter," he responds. Robo-advisors, Michelle interjects, are new automatic options, delivering diversified, international portfolios at reduced costs and straightforward apps. "Perfect for time-poor parents like you!"
      </p>
      <p><strong>Returns:</strong> ~4%–8% depending on risk level.</p>
      <p><strong>Risk:</strong> Depends on portfolio.</p>
      <p><strong>Best For:</strong> Busy professionals, tech-savvy beginners.</p>
      <p><strong>How to Start:</strong> Sign up on app/website (e.g., StashAway, Syfe, Endowus), fund your account, pick a risk level.</p>
      <p>It’s like putting your investments on autopilot, but smarter.</p>

      <h2 className="text-2xl font-bold">10. Store of Value: Gold & Commodities</h2>
      <Image src="/blog-one-10.png" alt="blog-one-10" width={800} height={600} className="mx-auto" />
      <p>
        Observing Su Lin's gold necklace, Alex's father, Mr. Tan, recommends considering gold. "It's ageless," he explains, "a wise hedge against the uncertain." Commodity investments don't generate consistent returns, but gold has a long history of holding its value, particularly during economic turmoil. "A small fraction in gold will protect your portfolio," offers Mr. Tan sage advice.
      </p>
      <p><strong>Returns:</strong> ~4%–5% long-term, no income.</p>
      <p><strong>Risk:</strong> Price volatility, no cash flow.</p>
      <p><strong>How to Invest:</strong> Physical gold, ETFs (e.g., SPDR Gold Shares), gold savings accounts.</p>
      <p><strong>Best For:</strong> Diversification, crisis hedge.</p>
      <p>Mr. Tan says, “Gold is insurance — you hope not to use it, but it’s comforting to have.”</p>

      <h2 className="text-2xl font-bold">11. High Risk, High Reward: Cryptocurrency</h2>
      <Image src="/blog-one-11.png" alt="blog-one-11" width={800} height={600} className="mx-auto" />
      <p>
        "Crypto is exciting but risky," Jason warns, his eyes gleaming. Cryptocurrencies like Bitcoin have eye-popping potential returns but equally eye-popping volatility. "Invest only money you can afford to lose," Jason advises, suggesting a small portion of their portfolio if they're in a reckless mood.
      </p>
      <p><strong>Returns:</strong> Historically massive (but extremely volatile).</p>
      <p><strong>Risk:</strong> Very high — prices can crash &gt;50%.</p>
      <p><strong>How to Start:</strong> Platforms like Coinbase, Gemini, or Coinhako. Buy a small amount.</p>
      <p><strong>Best For:</strong> Those with spare cash and strong nerves.</p>
      <p>Jason’s advice: “Only invest what you’re willing to see go to zero — or moon.”</p>

      <h2 className="text-2xl font-bold">12. Investing in Startups: Private Equity & Venture Capital</h2>
      <Image src="/blog-one-12.png" alt="blog-one-12" width={800} height={600} className="mx-auto" />
      <p>
        Rahim, from the startup world, discusses private equity and venture capital. "It's high-risk, high-reward," he says, "good if you're well-off financially and like to fund new ideas." He describes how early entry in successful startups has the potential to yield astronomical returns but cautions against illiquidity and high costs of entry.
      </p>
      <p><strong>Returns:</strong> Potentially huge, but rare.</p>
      <p><strong>Risk:</strong> Extremely high, long lock-in, illiquid.</p>
      <p><strong>Access:</strong> Angel investing, crowdfunding, VC funds (usually for accredited investors).</p>
      <p><strong>Best For:</strong> High net worth individuals or those in the startup scene.</p>
      <p>For most, this is not the starting point — but something to explore later.</p>

      <h2 className="text-2xl font-bold">So… What’s the Best Investment in Singapore?</h2>
      <Image src="/blog-one-13.png" alt="blog-one-13" width={800} height={600} className="mx-auto" />
      <p>
        As Alex and Su Lin learn, there’s no one-size-fits-all answer. The best investment depends on your goals, timeline, risk appetite, and even personality.
      </p>
      <p>
        Think of your investments like a meal:<br /><br />
        <strong>Rice</strong> = Safe staples (CPF, SSBs, T-Bills)
      </p>
      <p>
        <strong>Protein</strong> = Growth (stocks, REITs, property)
      </p>
      <p>
        <strong>Chili padi</strong> = A little spice (crypto, VC)
      </p>
      <p>
        Start small, stay consistent, and remember: investing isn’t about chasing fads — it’s about building a future, one decision at a time. Embarking on your investment journey in Singapore can be both exciting and complex. If you are looking for some personalised guidance regarding your finances, you can always book a free consultation with our team at DaretoFinance!  
      </p>
    </div>
  )
}

// Types and Interfaces
interface Keyword {
  keyword: string
  intent: string
  difficulty: number
  volume: number
}

interface SearchResult {
  id: string
  title: string
  url: string
  description: string
  images: {
    id: string
    src: string
    alt: string
  }[]
}

// Sample Data for keywords and search results
const keywordsData: Keyword[] = [
  { keyword: "Best Investments in Singapore", intent: "Informational", difficulty: 2, volume: 1300 },
  { keyword: "Investment options in singapore", intent: "Commercial", difficulty: 2, volume: 2500 },
]

const searchResults: SearchResult[] = [
  {
    id: "investment1",
    title: "First Google Result: Investment Insights",
    url: "https://www.example.com/investment-insights",
    description: "Explore the latest investment insights in Singapore.",
    images: [
      {
        id: "inv1",
        src: "/blog-one.png",
        alt: "Investment Insights Image 1",
      },
      {
        id: "inv2",
        src: "/blog-one-1.png",
        alt: "Investment Insights Image 2",
      },
    ],
  },
  {
    id: "investment2",
    title: "Second Google Result: Investment Opportunities",
    url: "https://www.example.com/investment-opportunities",
    description: "Discover promising investment opportunities in Singapore.",
    images: [
      {
        id: "inv3",
        src: "/blog-one-2.png",
        alt: "Investment Opportunities Image 1",
      },
      {
        id: "inv4",
        src: "/blog-one-3.png",
        alt: "Investment Opportunities Image 2",
      },
    ],
  },
]

// Modal and ImageGallery components for search result images
interface ModalProps {
  images: SearchResult["images"]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

function Modal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: ModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="relative mx-auto max-w-6xl w-full px-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black/90 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative h-full w-full"
            >
              <Image
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation()
                onPrevious()
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            <X className="h-5 w-5" />
          </Button>
          <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface ImageGalleryProps {
  images: SearchResult["images"]
  onImageClick: (index: number) => void
}

function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-muted"
          onClick={() => onImageClick(index)}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
        </motion.div>
      ))}
    </div>
  )
}

export default function Page() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentIndex: 0,
    currentImages: searchResults[0].images,
  })

  const handleImageClick = (resultImages: SearchResult["images"], index: number) => {
    setModalState({
      isOpen: true,
      currentIndex: index,
      currentImages: resultImages,
    })
  }

  const handleClose = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  const handleNext = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.currentImages.length,
    }))
  }

  const handlePrevious = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.currentImages.length) % prev.currentImages.length,
    }))
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!modalState.isOpen) return
    if (e.key === "ArrowRight") handleNext()
    if (e.key === "ArrowLeft") handlePrevious()
    if (e.key === "Escape") handleClose()
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [modalState.isOpen])

  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: Best Investments in Singapore
          </h1>
          <p className="mt-2 text-muted-foreground">
            Here's the SEO plan and analysis for investment opportunities in Singapore.
          </p>
          <div className="flex justify-end">
            <Button asChild>
              <a href="https://docs.google.com/document/d/1I77Gr3qNhdNnPoGc_AAxxdedi91JPEK_NOaMe6lC7bA/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                Edit Document
              </a>
            </Button>
          </div>
        </header>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Keyword Analysis</CardTitle>
            <CardDescription>
              Overview of target keywords and their metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Keyword</TableHead>
                    <TableHead>Intent</TableHead>
                    <TableHead className="text-right">Difficulty</TableHead>
                    <TableHead className="text-right">Traffic Potential</TableHead>
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
                      <TableCell className="text-right">{item.difficulty}</TableCell>
                      <TableCell className="text-right">{item.volume}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {searchResults.map((result, idx) => (
          <div key={result.id}>
            {idx === 1 && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>
                    <div className="bg-green-200 text-green-900 font-bold p-4 rounded-xl text-lg text-center">
                      ✅ This article is ready for feedback. The article will be published - <span className="underline">pending your approval</span>.
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <InvestmentArticleDisplay />
                </CardContent>
              </Card>
            )}
          </div>
        ))}

        <AnimatePresence>
          {modalState.isOpen && (
            <Modal
              images={modalState.currentImages}
              currentIndex={modalState.currentIndex}
              isOpen={modalState.isOpen}
              onClose={handleClose}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}
