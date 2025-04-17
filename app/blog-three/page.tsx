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

const VideoTranslationArticle = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Corporate Video Translation and Voice-Over Services
      </h1>

      <h2 className="text-2xl font-bold">Content Gap</h2>
      <p>
        This query comes from businesses wanting to translate videos – perhaps training videos, corporate communications, or marketing content – complete with subtitles or voice-overs. Currently, a user finds either service pages advertising multilingual voice-over and subtitling, or blog posts about benefits of video localization. These often mention broader reach and engagement, but might not address specific concerns a business has (like choosing subtitles vs. dubbing for their use case, or preserving brand tone in voice-overs). Moreover, while there are stats out there (e.g. 80% of viewers are more likely to watch a video to completion if it has subtitles (How Many People Use Subtitles in 2024? - Kapwing)), not all existing content leverages such data to make the case. And there’s a notable gap in discussing International SEO for videos (few mention that translated subtitles can improve a video’s SEO via transcripts (The Benefits of Video Translation and Multilingual Videos)) or the technical workflow for adding multi-language audio tracks. In sum, existing resources aren’t deeply satisfying the intent of a B2B user who not only wants to find a service, but also understand how to effectively implement video translation.
      </p>

      <h2 className="text-2xl font-bold">How Ladon Can Fill It</h2>
      <p>
        Ladon should develop an insightful article or guide like “Translating Corporate Videos: Subtitles, Voice-Overs, and Best Practices.” To stand out, this piece can begin with hard-hitting data about video engagement – for example, citing that captioned videos see significantly higher view times and share rates (Why Video Captions Are Key to Greater Engagement and Showing ...), and how non-English speaking employees or customers greatly prefer content in their language. Then, Ladon can fill the informational gap by comparing localization methods: when is simple subtitling sufficient versus when a professional voice-over (or even dubbing) is warranted. The guide could include a pros and cons table for subtitles vs. voice-over in corporate contexts (subtitles are cheaper and good for quick info videos; voice-overs are more engaging for training or marketing narratives, etc.). Additionally, Ladon can mention often-overlooked steps to quality: ensuring the timing of subtitles matches on-screen action, using native voice talent for voice-overs to sound authentic, and checking that any on-screen text in the video is translated (or at least explained via subtitles). By also talking about process, Ladon’s article could outline how a company can prepare their videos for translation (e.g. providing scripts, separate audio tracks) and how Ladon handles the workflow seamlessly. This level of detail and helpful advice would make the content far more useful than the prevailing generic offers. It assures the reader that Ladon understands the full picture – from boosting engagement to the nuts and bolts of producing a multilingual video that looks and sounds professional for any audience.
      </p>
    </div>
  )
}

const keywordsData = [
  { keyword: "corporate video translation", intent: "Transactional" },
  { keyword: "multilingual voice-over services", intent: "Transactional" },
  { keyword: "subtitle vs dubbing business", intent: "Informational" },
  { keyword: "video localization for training", intent: "Informational" },
  { keyword: "translated video SEO subtitles", intent: "Informational" },
  { keyword: "how to prepare videos for translation", intent: "Informational" },
]

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SEO Keyword Plan: Corporate Video Translation and Voice-Over
          </h1>
          <p className="mt-2 text-muted-foreground">
            A B2B-focused blog answering the full intent behind translating corporate video content across languages.
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
            <VideoTranslationArticle />
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
