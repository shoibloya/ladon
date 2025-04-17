"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const MarketingTranslationArticle = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Marketing Material Translation Services
      </h1>

      <h2 className="text-2xl font-bold">Content Gap</h2>
      <p>
        This long-tail term is likely searched by marketing managers or localization directors who need brochures, flyers, product catalogs, or ad copy translated. Presently, many search results are agency pages promising creative translation or “transcreation” to keep the brand message effective. They often state that simply translating isn’t enough and one must adapt to the local culture – which is true – but they rarely provide examples or a deep explanation. There’s also ample content about translation fails in marketing (with humorous examples of slogans gone wrong). While entertaining – e.g. HSBC’s tagline “Assume Nothing” infamously translated to “Do Nothing,” costing the bank $10 million to fix its campaign (The Top 10 Most Hilarious Marketing Translation Gaffes) – these don’t guide the user on how to avoid such mistakes beyond “hire professionals.” The gap here is a lack of methodology and reassurance: a B2B user wants to ensure their brand voice and nuance carry over in translation. The existing content doesn’t walk through how an agency will achieve that (e.g. reviewing style guides, doing cultural consultations), nor does it address how to handle various content types (a technical datasheet vs. a creative tagline require different approaches).
      </p>

      <h2 className="text-2xl font-bold">How Ladon Can Fill It</h2>
      <p>
        Ladon should publish a piece like “Translating Marketing Materials Without Losing Your Brand Voice.” This article can close the gap by being educational and specific. It could start with a few quick “lost in translation” examples (to hook the reader and acknowledge the risk), then pivot to constructive advice. Ladon can describe its transcreation process in accessible terms – for instance: step 1, understanding the campaign goals and tone; step 2, creating a glossary of branded terms; step 3, testing taglines or messages with native speakers for feedback. Including a mini-case (fictional or real) could be powerful, such as “How a product brochure was adapted for the Latin American market – and what changed beyond just language.” This shows Ladon’s attention to detail (maybe the case highlights adapting measurements, using local imagery references, etc.). Additionally, the content should address the concern of consistency: ensuring that all marketing collateral (brochures, web content, ads) convey a coherent message across languages. Ladon can mention tools like style guides and translation memory for maintaining terminology across different materials. By explaining these processes, Ladon’s article goes far beyond the typical “we have creative translators, trust us” page. It effectively guides the reader on what superior marketing translation entails (thus filling the knowledge gap) and simultaneously convinces them that Ladon provides this higher level of service. This kind of thorough, transparent content would resonate with B2B clients who are protective of their brand image and need assurance that a translation partner truly “gets” marketing.
      </p>
    </div>
  )
}

const keywordsData = [
  { keyword: "marketing material translation", intent: "Transactional" },
  { keyword: "brochure translation service", intent: "Transactional" },
  { keyword: "transcreation agency", intent: "Informational" },
  { keyword: "how to translate product catalogs", intent: "Informational" },
  { keyword: "brand voice in translation", intent: "Informational" },
  { keyword: "multilingual marketing content", intent: "Informational" },
]

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: Marketing Material Translation Services
          </h1>
          <p className="mt-2 text-muted-foreground">
            A detailed guide for marketing teams who want to adapt campaigns across languages without losing brand identity.
          </p>
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
              <div className="bg-blue-200 text-blue-900 font-bold p-4 rounded-xl text-lg text-center">
                Blog Content Idea
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MarketingTranslationArticle />
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
