export interface InsightItem {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image?: string;
  category: string;
}

export const insightsData: InsightItem[] = [
  {
    id: 1,
    title: "RWA Issuance Technology",
    description: "XRG is the next-generation RWA protocol that revolutionizes how real-world assets are tokenized and traded on blockchain networks.",
    date: "Jul 23, 2025",
    readTime: "5 min read",
    image: "/images/img_insights.png",
    category: "Technology"
  },
  {
    id: 2,
    title: "CoinMarketCap Integration",
    description: "XRG token now listed on major cryptocurrency exchanges with real-time price tracking and market analysis.",
    date: "Jul 22, 2025",
    readTime: "3 min read",
    category: "Market"
  },
  {
    id: 3,
    title: "DeFi Protocol Updates",
    description: "Latest updates to our decentralized finance protocol including new staking mechanisms and yield farming opportunities.",
    date: "Jul 21, 2025",
    readTime: "4 min read",
    category: "DeFi"
  },
  {
    id: 4,
    title: "RWA Tokenization Standards",
    description: "XRG is the next-generation RWA protocol that sets new industry standards for asset tokenization with enhanced security and compliance features.",
    date: "Jul 20, 2025",
    readTime: "6 min read",
    image: "/images/img_insights.png",
    category: "Standards"
  },
  {
    id: 5,
    title: "Blockchain Security Framework",
    description: "XRG is the next-generation RWA protocol implementing advanced security measures to protect digital assets and ensure transaction integrity.",
    date: "Jul 19, 2025",
    readTime: "7 min read",
    image: "/images/img_insights.png",
    category: "Security"
  },
  {
    id: 6,
    title: "Cross-Chain Compatibility",
    description: "XRG protocol now supports multiple blockchain networks enabling seamless asset transfers across different ecosystems.",
    date: "Jul 18, 2025",
    readTime: "4 min read",
    category: "Interoperability"
  },
  {
    id: 7,
    title: "Smart Contract Optimization",
    description: "Recent improvements to XRG smart contracts resulting in 40% reduction in gas fees and faster transaction processing.",
    date: "Jul 17, 2025",
    readTime: "5 min read",
    category: "Optimization"
  },
  {
    id: 8,
    title: "RWA Market Analysis",
    description: "XRG is the next-generation RWA protocol driving the growth of real-world asset tokenization with comprehensive market insights and future projections.",
    date: "Jul 16, 2025",
    readTime: "8 min read",
    image: "/images/img_insights.png",
    category: "Analysis"
  },
  {
    id: 9,
    title: "Governance Token Mechanics",
    description: "XRG is the next-generation RWA protocol featuring innovative governance mechanisms that empower token holders in decision-making processes.",
    date: "Jul 15, 2025",
    readTime: "6 min read",
    image: "/images/img_insights.png",
    category: "Governance"
  },
  {
    id: 10,
    title: "Liquidity Pool Strategies",
    description: "Advanced liquidity management strategies for XRG token holders to maximize returns while maintaining portfolio stability.",
    date: "Jul 14, 2025",
    readTime: "5 min read",
    category: "Liquidity"
  },
  {
    id: 11,
    title: "Regulatory Compliance",
    description: "XRG protocol's compliance framework ensuring adherence to global financial regulations and legal requirements.",
    date: "Jul 13, 2025",
    readTime: "4 min read",
    category: "Compliance"
  },
  {
    id: 12,
    title: "Future Roadmap",
    description: "XRG is the next-generation RWA protocol with an ambitious roadmap including AI integration, advanced analytics, and global expansion plans.",
    date: "Jul 12, 2025",
    readTime: "7 min read",
    image: "/images/img_insights.png",
    category: "Roadmap"
  }
];
