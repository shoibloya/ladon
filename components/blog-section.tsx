"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample blog data - replace with your actual data source
const blogPosts = [
  {
    id: 1,
    title: "[OUTLINE] Technical Manual Translation Services",
    excerpt: "Blog Outline",
    imageUrl: "/outline.png",
    date: "Apr 21",
    readTime: "N/A",
    url: "/blog-one",
    status: "pending",
  },
  {
    id: 2,
    title: "[OUTLINE] eLearning Translation Services for Corporate Training",
    excerpt: "Blog Outline",
    imageUrl: "/outline.png",
    date: "Apr 25",
    readTime: "N/A",
    url: "/blog-two",
    status: "pending",
  },
  {
    id: 3,
    title: "[OUTLINE] Corporate Video Translation and Voice-Over Services",
    excerpt: "Blog Outline",
    imageUrl: "/outline.png",
    date: "May 2",
    readTime: "N/A",
    url: "/blog-three",
    status: "pending",
  },
  {
    id: 4,
    title: "[OUTLINE] Marketing Material Translation Services",
    excerpt: "Blog Outline",
    imageUrl: "/outline.png",
    date: "May 8",
    readTime: "N/A",
    url: "/blog-four",
    status: "pending",
  },
]



// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function BlogSection() {
  // Filter posts by status
  const publishedPosts = blogPosts.filter((post) => post.status === "published")
  const pendingPosts = blogPosts.filter((post) => post.status === "pending")

  // Blog card component to avoid repetition
  const BlogCard = ({ post }: { post: (typeof blogPosts)[0] }) => (
    <motion.div variants={itemVariants}>
      <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <img
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Badge variant={post.status === "published" ? "default" : "outline"} className="rounded-full">
              {post.status === "published" ? (
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Published
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Pending
                </span>
              )}
            </Badge>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-semibold line-clamp-2 mb-2">{post.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button variant="link" className="px-0 text-primary" asChild>
            <a href={post.url} className="flex items-center gap-1">
              Read more <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
      <Tabs defaultValue="pending">
        <Card className="border bg-card/50 shadow-md backdrop-blur-sm overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Blogs</h2>
                <p className="text-muted-foreground mt-1">List of Blogs</p>
              </div>
              <TabsList className="bg-background/80 backdrop-blur-sm">
                <TabsTrigger value="published">Published</TabsTrigger>
                <TabsTrigger value="pending">Pending Approval</TabsTrigger>
              </TabsList>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <TabsContent value="published" className="mt-0">
              {publishedPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {publishedPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/20 bg-muted/10 p-10 text-center">
                  <CheckCircle className="mb-2 h-10 w-10 text-muted-foreground/60" />
                  <h3 className="mb-2 text-lg font-medium">No published blogs</h3>
                  <p className="text-sm text-muted-foreground">Your published blogs will appear here.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="pending" className="mt-0">
              {pendingPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {pendingPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/20 bg-muted/10 p-10 text-center">
                  <Clock className="mb-2 h-10 w-10 text-muted-foreground/60" />
                  <h3 className="mb-2 text-lg font-medium">No pending blogs</h3>
                  <p className="text-sm text-muted-foreground">Blogs waiting for approval will appear here.</p>
                </div>
              )}
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </motion.div>
  )
}

