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
      date: "2025-03-31T00:00:00Z",
      colorIndex: 4,
      //location: "Conference Room A",
      tags: ["Admin"],
      completed: true, 
    },
    {
      id: 2,
      title: "Client Onboarded",
      description: "Start of Subscription",
      date: "2025-03-24T00:00:00Z",
      colorIndex: 3,
      //location: "Conference Room A",
      tags: ["Admin"],
      completed: true,
    },
    {
        id: 3,
        title: "First Blog Post",
        description: "First blog post will be targeting the keyword: 'Best Investments in Singapore/Investment Opportunity Singapore'. DareToFinance has a log of blogs on specific issues. However, not many on general topics. These two keywords are easy to rank for based on our data (Keyword difficulty 2/100). Let's start with these to see how it goes.",
        date: "2025-04-03T00:00:00Z",
        colorIndex: 2,
        //location: "Conference Room A",
        tags: ["Blog"],
        completed: false,
    },
    
    {
      id: 4,
      title: "Second Blog Post",
      description: "Blog post targeting the keyword 'finance tracker' emphasising what are best ways to keep track of personal finances with a excel template. We want to explore this new area, your competitors do provide templates for simple finance related topics. We want to start creating templates as well to see how they perform. 'finance tracker' is a good keyword to start with because it has a Keyword difficulty of 1/100",
      date: "2025-04-10T00:00:00Z",
      colorIndex: 2,
      //location: "Zoom",
      tags: ["Blog"],
      completed: false,
    },
    {
        id: 5,
        title: "Third Blogpost",
        description: "This is where we want to try to create a guide on Budget 2025 (Singapore budget 2025). A simple worded guide to budget 2025. This article is created with a purpose to share (on daretofinance socials) and to attract backlinks.",
        date: "2025-04-18T00:00:00Z",
        colorIndex: 2,
        //location: "Zoom",
        tags: ["Blog"],
        completed: false,
      },
    {
      id: 6,
      title: "Fourth Blog Post",
      description: "A guide to mutual funds in Singapore. Suprisingly, the keyword 'mutual funds singapore' has a keyword difficulty of 6/100. With this blog post, we want to capitalise on this opportunity.",
      date: "2025-04-23T00:00:00Z",
      colorIndex: 2,
      //location: "Production",
      tags: ["Blog"],
      completed: false,
    },
    {
      id: 7,
      title: "Monthly Report",
      description: "Report on everything that happened in this month of subscription. Going through each article we posted and how they are performing as of 23rd March.",
      date: "2025-04-23T00:00:00Z",
      colorIndex: 4,
      //location: "Production",
      tags: ["Admin"],
      completed: false,
    },


    {
      id: 8,
      title: "Subscription Renewable",
      description: "Subscription Renew Date.",
      date: "2025-04-24T00:00:00Z",
      colorIndex: 3,
      //location: "Production",
      tags: ["Admin"],
      completed: false,
    },

  ];
  