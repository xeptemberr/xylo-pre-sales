// 블록체인 지갑 주소 예시 데이터
export const walletAddresses = [
  {
    id: 1,
    address: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
    network: "Ethereum",
    balance: "1,250.50 ETH",
    shortAddress: "0x742d...4d8b6"
  },
  {
    id: 2,
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    network: "Bitcoin",
    balance: "0.85 BTC",
    shortAddress: "bc1q...0wlh"
  },
  {
    id: 3,
    address: "rN7n7otQDd6FczFgLdSqtcsAUxDkw6fzRH",
    network: "XRP Ledger",
    balance: "15,420.75 XRP",
    shortAddress: "rN7n...6fzRH"
  },
  {
    id: 4,
    address: "0x8ba1f109551bD432803012645Hac136c",
    network: "Polygon",
    balance: "5,680.25 MATIC",
    shortAddress: "0x8ba1...36c"
  },
  {
    id: 5,
    address: "bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2",
    network: "BNB Chain",
    balance: "2,150.80 BNB",
    shortAddress: "bnb1...46h2"
  },
  {
    id: 6,
    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    network: "Arbitrum",
    balance: "3,420.15 ETH",
    shortAddress: "0x9f8f...79a2"
  },
  {
    id: 7,
    address: "0x1234567890123456789012345678901234567890",
    network: "Optimism",
    balance: "890.45 ETH",
    shortAddress: "0x1234...7890"
  },
  {
    id: 8,
    address: "0xabcdef1234567890abcdef1234567890abcdef12",
    network: "Avalanche",
    balance: "1,750.30 AVAX",
    shortAddress: "0xabcd...ef12"
  }
];

// XLT Ledger 전용 주소 예시 (XRP Ledger 형식 기반)
export const xltWalletAddresses = [
  {
    id: 1,
    address: "rXLT1234567890abcdefghijklmnopqrstuvwxyz",
    network: "XLT Ledger",
    balance: "25,000.50 XLT",
    balanceUSD: "$2,330.05",
    shortAddress: "rXLT...vwxyz"
  },
  {
    id: 2,
    address: "rXLTabcdefghijklmnopqrstuvwxyz1234567890",
    network: "XLT Ledger", 
    balance: "18,750.25 XLT",
    balanceUSD: "$1,747.52",
    shortAddress: "rXLT...7890"
  },
  {
    id: 3,
    address: "rXLT9876543210zyxwvutsrqponmlkjihgfedcba",
    network: "XLT Ledger",
    balance: "42,100.75 XLT", 
    balanceUSD: "$3,923.79",
    shortAddress: "rXLT...edcba"
  },
  {
    id: 4,
    address: "rXLTqwertyuiopasdfghjklzxcvbnm123456789",
    network: "XLT Ledger",
    balance: "33,500.00 XLT",
    balanceUSD: "$3,122.20",
    shortAddress: "rXLT...6789"
  },
  {
    id: 5,
    address: "rXLTmnbvcxzlkjhgfdsapoiuytrewq098765432",
    network: "XLT Ledger",
    balance: "67,250.80 XLT",
    balanceUSD: "$6,267.77",
    shortAddress: "rXLT...5432"
  },
  {
    id: 6,
    address: "rXLTasdfghjklqwertyuiopzxcvbnm0987654321",
    network: "XLT Ledger",
    balance: "15,420.30 XLT",
    balanceUSD: "$1,437.17",
    shortAddress: "rXLT...4321"
  },
  {
    id: 7,
    address: "rXLTzxcvbnmasdfghjklqwertyuiop1234567890",
    network: "XLT Ledger",
    balance: "89,750.15 XLT",
    balanceUSD: "$8,364.71",
    shortAddress: "rXLT...7890"
  },
  {
    id: 8,
    address: "rXLTpoiuytrewqlkjhgfdsamnbvcxz9876543210",
    network: "XLT Ledger",
    balance: "52,300.60 XLT",
    balanceUSD: "$4,874.42",
    shortAddress: "rXLT...3210"
  },
  {
    id: 9,
    address: "rXLTlkjhgfdsapoiuytrewqmnbvcxz4567890123",
    network: "XLT Ledger",
    balance: "76,850.90 XLT",
    balanceUSD: "$7,162.50",
    shortAddress: "rXLT...0123"
  },
  {
    id: 10,
    address: "rXLTmnbvcxzlkjhgfdsapoiuytrewq5678901234",
    network: "XLT Ledger",
    balance: "31,200.45 XLT",
    balanceUSD: "$2,907.88",
    shortAddress: "rXLT...1234"
  }
];

// 최근 거래 내역 예시
export const recentTransactions = [
  {
    id: 1,
    from: "rXLT1234567890abcdefghijklmnopqrstuvwxyz",
    to: "rXLTabcdefghijklmnopqrstuvwxyz1234567890",
    amount: "1,250.50 XLT",
    timestamp: "2024-01-15 14:30:25",
    status: "completed"
  },
  {
    id: 2,
    from: "rXLT9876543210zyxwvutsrqponmlkjihgfedcba",
    to: "rXLT1234567890abcdefghijklmnopqrstuvwxyz", 
    amount: "5,680.25 XLT",
    timestamp: "2024-01-15 12:15:10",
    status: "completed"
  },
  {
    id: 3,
    from: "rXLTabcdefghijklmnopqrstuvwxyz1234567890",
    to: "rXLT9876543210zyxwvutsrqponmlkjihgfedcba",
    amount: "2,150.80 XLT", 
    timestamp: "2024-01-15 10:45:33",
    status: "pending"
  }
];
