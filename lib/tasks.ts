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
      title: "Website Analysed",
      description: "Nuggt team analysed the website and created the blog strategy.",
      date: "2025-04-08T00:00:00Z",
      colorIndex: 4,
      //location: "Conference Room A",
      tags: ["Admin"],
      completed: true, 
    },
    {
      id: 2,
      title: "Client Onboarded",
      description: "Start of Subscription",
      date: "2025-03-30T00:00:00Z",
      colorIndex: 3,
      //location: "Conference Room A",
      tags: ["Admin"],
      completed: true,
    },
    {
        id: 3,
        title: "First Blog Post",
        description: "How to Start a Dance Studio in Singapore (Step-by-Step Guide)",
        date: "2025-04-11T00:00:00Z",
        colorIndex: 2,
        //location: "Conference Room A",
        tags: ["Blog"],
        completed: false,
    },
    
    {
      id: 4,
      title: "Second Blog Post",
      description: "Opening a Yoga Studio in Singapore: Licenses, Costs, and Setup Guide",
      date: "2025-04-18T00:00:00Z",
      colorIndex: 2,
      //location: "Zoom",
      tags: ["Blog"],
      completed: false,
    },
    {
        id: 5,
        title: "Third Blogpost",
        description: "10 Effective Marketing Strategies to Boost Your Fitness Studio’s Membership in Singapore.",
        date: "2025-04-25T00:00:00Z",
        colorIndex: 2,
        //location: "Zoom",
        tags: ["Blog"],
        completed: false,
      },
    {
      id: 6,
      title: "Fourth Blog Post",
      description: "Singapore Fitness Studio Legal Checklist: Licenses, Permits, and Insurance Explained.",
      date: "2025-04-28T00:00:00Z",
      colorIndex: 2,
      //location: "Production",
      tags: ["Blog"],
      completed: false,
    },
    {
      id: 7,
      title: "Monthly Report",
      description: "Report on everything that happened in this month of subscription. Going through each article we posted.",
      date: "2025-04-29T00:00:00Z",
      colorIndex: 4,
      //location: "Production",
      tags: ["Admin"],
      completed: false,
    },


    {
      id: 8,
      title: "Subscription Renewable",
      description: "Subscription Renew Date.",
      date: "2025-04-30T00:00:00Z",
      colorIndex: 3,
      //location: "Production",
      tags: ["Admin"],
      completed: false,
    },

  ];
  