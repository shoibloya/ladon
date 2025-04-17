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
    title: "Client Onboarded",
    description: "Start of Subscription",
    date: "2025-04-14T00:00:00Z",
    colorIndex: 3,
    tags: ["Admin"],
    completed: true,
  },
  {
    id: 2,
    title: "Website Analysed",
    description: "Nuggt team analysed the website and created the blog strategy.",
    date: "2025-04-17T00:00:00Z",
    colorIndex: 4,
    tags: ["Admin"],
    completed: true,
  },
  {
    id: 3,
    title: "First Blog Post",
    description: "Industrial Wastewater Treatment Automation Systems",
    date: "2025-04-25T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 4,
    title: "Second Blog Post",
    description: "Energy Efficiency in Wastewater Treatment Plants",
    date: "2025-05-02T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 5,
    title: "Third Blog Post",
    description: "Predictive Maintenance for Wastewater Treatment Equipment",
    date: "2025-05-09T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 6,
    title: "Fourth Blog Post",
    description: "Digital Twin for Wastewater Treatment Plant Operations",
    date: "2025-05-12T00:00:00Z",
    colorIndex: 2,
    tags: ["Blog"],
    completed: false,
  },
  {
    id: 7,
    title: "Monthly Report",
    description: "Report on everything that happened in this month of subscription. Going through each article we posted.",
    date: "2025-05-13T00:00:00Z",
    colorIndex: 4,
    tags: ["Admin"],
    completed: false,
  },
  {
    id: 8,
    title: "Subscription Renewable",
    description: "Subscription Renew Date.",
    date: "2025-05-14T00:00:00Z",
    colorIndex: 3,
    tags: ["Admin"],
    completed: false,
  },
]
