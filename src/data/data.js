import {TrendingUp} from 'lucide-react';
import blog1 from '@/assets/blog1.png'
import blog2 from '@/assets/blog2.png'
import blog3 from '@/assets/blog3.png'

export const features = [
    {
      title: "Financial Planning",
      description:
        "Secure Your Financial Future with Expert Financial Planning. Start Today!",
    },
    {
      title: "Money Management",
      description:
        "With experience in all market conditions, we recognize what processes and solutions.",
    },
    {
      title: "Strategic Partner",
      description:
        "With experience in all market conditions, we recognize what processes and solutions.",
    },
  ];

export const plans = [
    {
      name: "STARTER PLAN",
      price: "$49",
      features: [
        "Get paid 2 days early",
        "Fee Free Overdraft",
        "Detailed spend insights",
        "Priority Support",
        "Basic Analytics",
        "Email Support"
      ],
      highlight: false,
    },
    {
      name: "ENTERPRISE PLAN",
      price: "$99",
      features: [
        "Everything in Starter",
        "No Debit Card Fees",
        "Advanced Analytics",
        "24/7 Phone Support",
        "Custom Integrations",
        "Dedicated Account Manager"
      ],
      highlight: true,
    },
    {
      name: "PRO PLAN",
      price: "$139",
      features: [
        "Everything in Enterprise",
        "Premium Support",
        "Custom Reporting",
        "API Access",
        "Training Sessions",
        "SLA Guarantee"
      ],
      highlight: false,
    },
  ];  

  export const faqs = [
    {
      question: "How do you ensure the security of my personal and financial information?",
      answer: "We employ bank-level encryption, multi-factor authentication, and regular security audits to protect your data. All sensitive information is encrypted both in transit and at rest, ensuring complete privacy and security for your financial data."
    },
    {
      question: "How do you help with finance management?",
      answer: "Our platform provides comprehensive financial management tools including budgeting, expense tracking, investment monitoring, and personalized financial insights. We help you create and maintain healthy financial habits through automated savings and smart spending analysis."
    },
    {
      question: "How can I apply for a loan with your company?",
      answer: "You can apply for a loan through our online portal in just a few minutes. We offer competitive rates and flexible repayment terms. Our streamlined application process requires minimal documentation, and you'll receive a decision within 24 hours in most cases."
    },
    {
      question: "What services does your company offer?",
      answer: "We offer a complete suite of financial services including personal and business banking, investment management, loan services, credit counseling, retirement planning, and wealth management. Our services are designed to meet all your financial needs in one place."
    },
    {
      question: "How do I contact customer support?",
      answer: "Our customer support team is available 24/7 through multiple channels. You can reach us via live chat on our website, email at support@wealthwise.com, or phone at +1 (555) 123-4567. We also offer in-person consultations at our local branches."
    }
  ];

  export const historyData = [
    { 
      year: '2005', 
      desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', 
      date: '07 June 2012',
      icon: TrendingUp
    },
    { 
      year: '2010', 
      desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', 
      date: '07 June 2012',
      icon: TrendingUp
    },
    { 
      year: '2013', 
      desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', 
      date: '07 June 2012',
      icon: TrendingUp
    },
    { 
      year: '2020-Now', 
      desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.', 
      date: '07 June 2012',
      icon: TrendingUp
    }
  ];


  export const blogPost = [
  {
    id: 1,
    img: blog1,
    title: 'Finance and Economics',
    desc: 'Big tech’s dominance is straining the logic of passive investing',
    slug: 'Read More',
    content: `
      Big tech companies have become so large that they now dominate the major stock indexes. 
      This dominance has created a dilemma for passive investors who track these indexes—by simply following market-weighted funds, they’re becoming overexposed to a handful of powerful firms.
      The consequence is that what was once considered a diversified investment strategy is now increasingly concentrated.
      
      Experts suggest that investors reconsider how they define diversification. 
      Allocating to sector-specific ETFs, international markets, or value-oriented funds can help balance exposure. 
      As passive investing continues to shape the global market, understanding its systemic risks becomes essential to maintaining long-term portfolio health.
    `,
    author: 'Sarah Mitchell',
    date: 'August 12, 2025',
    category: 'Economics',
    readTime: '5 min read',
    likes: 248,
  },
  {
    id: 2,
    img: blog2,
    title: 'Fintech Revolution',
    desc: 'The story of how Dave took the long road to become a neobank',
    slug: 'Read More',
    content: `
      Dave started as a simple budgeting app helping users avoid overdraft fees. 
      Over time, it transformed into a fully licensed neobank, offering checking accounts, credit-building tools, and small cash advances.
      
      This journey reflects a broader trend in fintech: consumer apps evolving into full-fledged digital banks. 
      However, growth wasn’t easy. Navigating regulations, maintaining liquidity, and managing user trust all required innovation and patience.
      
      Today, neobanks like Dave are redefining banking by prioritizing transparency, user experience, and accessibility. 
      The future of banking lies in personalization—apps that not only hold your money but help you make smarter financial decisions every day.
    `,
    author: 'David Brooks',
    date: 'July 24, 2025',
    category: 'Fintech',
    readTime: '6 min read',
    likes: 322,
  },
  {
    id: 3,
    img: blog3,
    title: 'The Psychology of Saving',
    desc: 'How small habits lead to big financial changes over time',
    slug: 'Read More',
    content: `
      Building wealth doesn’t happen overnight—it’s built through consistent, small decisions. 
      Behavioral economists have shown that automatic savings systems work because they remove emotional friction from the process. 
      When you “set and forget” your savings, you bypass the temptation to spend impulsively.
      
      The key is to align your habits with your goals. 
      Whether you’re saving for a down payment, retirement, or travel, create a plan that fits your lifestyle. 
      Small contributions, made regularly, compound into significant results over the years.
      
      Remember: smart saving isn’t about sacrifice—it’s about designing a system that works for your future self.
    `,
    author: 'Emily Carter',
    date: 'September 1, 2025',
    category: 'Personal Finance',
    readTime: '4 min read',
    likes: 180,
  },
  {
    id: 4,
    img: blog3,
    title: 'Cryptocurrency Insights',
    desc: 'Why Bitcoin’s halving cycle still matters to investors',
    slug: 'Read More',
    content: `
      Bitcoin’s halving—an event that cuts the block reward for miners in half—occurs roughly every four years. 
      This built-in scarcity mechanism has historically triggered bullish trends due to reduced supply entering circulation.
      
      However, as the market matures, the effect of each halving has become more nuanced. 
      Institutional participation, regulation, and macroeconomic conditions now play larger roles in price dynamics.
      
      For investors, understanding Bitcoin’s halving cycle is less about timing the market and more about appreciating the underlying economics that make it a deflationary digital asset.
    `,
    author: 'Jason Lee',
    date: 'June 15, 2025',
    category: 'Crypto',
    readTime: '7 min read',
    likes: 410,
  },
  {
    id: 5,
    img: blog3,
    title: 'Personal Finance 101',
    desc: 'How to build wealth even on a modest income',
    slug: 'Read More',
    content: `
      Building wealth isn’t about how much you earn—it’s about how much you keep and grow. 
      The 50/30/20 budgeting rule (needs, wants, savings) remains one of the simplest frameworks for managing personal finances effectively.
      
      Automate investments into index funds, track your spending, and build an emergency fund before chasing high returns. 
      Compound interest rewards consistency far more than luck or timing.
      
      Remember: financial freedom is built on habits, not windfalls. 
      Start small, stay patient, and let time do the heavy lifting.
    `,
    author: 'Olivia Fernandez',
    date: 'October 3, 2025',
    category: 'Finance Tips',
    readTime: '5 min read',
    likes: 289,
  },
  {
    id: 6,
    img: blog3,
    title: 'The Future of Fintech',
    desc: 'AI and automation are reshaping how we manage money',
    slug: 'Read More',
    content: `
      Artificial intelligence is transforming financial services faster than ever. 
      From robo-advisors that build personalized portfolios to chatbots handling customer service, automation is improving both efficiency and accessibility.
      
      However, the rise of AI also brings new challenges—data privacy, algorithmic bias, and cybersecurity threats. 
      Regulators and innovators alike must balance progress with protection.
      
      The next wave of fintech will merge personalization with predictive analytics, helping people make smarter financial decisions in real-time.
    `,
    author: 'Michael Tan',
    date: 'May 18, 2025',
    category: 'Technology',
    readTime: '6 min read',
    likes: 357,
  },
  {
    id: 7,
    img: blog3,
    title: 'Global Economics',
    desc: 'How inflation trends are redefining global trade',
    slug: 'Read More',
    content: `
      The post-pandemic economy has introduced a new era of inflationary pressure. 
      Rising wages, energy costs, and supply chain disruptions have shifted how nations approach trade and monetary policy.
      
      Central banks face the delicate task of curbing inflation without stalling growth. 
      Meanwhile, businesses are reassessing sourcing strategies to reduce vulnerability to global shocks.
      
      In this evolving environment, adaptability is the new competitive advantage—for governments, companies, and investors alike.
    `,
    author: 'Laura Green',
    date: 'April 9, 2025',
    category: 'Economics',
    readTime: '5 min read',
    likes: 231,
  },
];
