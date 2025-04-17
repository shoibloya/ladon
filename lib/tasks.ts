// lib/tasks.ts
export type Task = {
  id: number
  title: string
  description: string
  date: string
  completed?: boolean
  location?: string
  tags?: string[]
  colorIndex?: number
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Subscription Renewed",
    description: "Start of Subscription",
    date: "2025-04-10T00:00:00Z",
    colorIndex: 3,
    tags: ["Admin"],
    completed: true,
  },
  {
    id: 2,
    title: "Website Analysed",
    description: "Nuggt team analysed the website and created the blog strategy.",
    date: "2025-04-18T00:00:00Z",
    colorIndex: 4,
    tags: ["Admin"],
    completed: true,
  },
  {
    id: 3,
    title: "First Blog Post",
    description: "Technical Manual Translation Services",
    date: "2025-04-21T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 4,
    title: "Second Blog Post",
    description: "eLearning Translation Services for Corporate Training",
    date: "2025-04-25T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 5,
    title: "Third Blog Post",
    description: "Corporate Video Translation and Voice-Over Services",
    date: "2025-05-02T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 6,
    title: "Fourth Blog Post",
    description: "Marketing Material Translation Services",
    date: "2025-05-08T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 7,
    title: "Subscription Renewable",
    description: "Subscription Renew Date.",
    date: "2025-05-10T00:00:00Z",
    colorIndex: 3,
    tags: ["Admin"],
    completed: false,
  },
]
