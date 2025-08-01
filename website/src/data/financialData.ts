// Financial data for the presentation
// Source: CoinGecko, Investopedia, Charles Schwab reports

export const performanceData = {
  historical: [
    {
      period: "YTD 2024",
      bitcoin: 129.0,
      ethereum: 85.0, // Estimated based on crypto market
      sp500: 28.3,
      gold: 32.2,
      traditional401k: 18.1,
      treasuries5y: 5.3,
      treasuries10y: 8.2
    },
    {
      period: "1-Year",
      bitcoin: 153.1,
      ethereum: 120.0, // Estimated
      sp500: 33.1,
      gold: 34.8,
      traditional401k: 18.1,
      treasuries5y: -2.5,
      treasuries10y: -0.4
    },
    {
      period: "3-Year",
      bitcoin: 79.0,
      ethereum: 45.0, // Estimated
      sp500: 34.1,
      gold: 53.1,
      traditional401k: 9.7, // Average annual
      treasuries5y: 267.8,
      treasuries10y: 218.0
    },
    {
      period: "5-Year",
      bitcoin: 1283.6,
      ethereum: 650.0, // Estimated
      sp500: 96.7,
      gold: 84.6,
      traditional401k: 9.7, // Average annual
      treasuries5y: 169.5,
      treasuries10y: 149.9
    },
    {
      period: "10-Year",
      bitcoin: 26931.1,
      ethereum: 8500.0, // Estimated (Ethereum launched in 2015)
      sp500: 193.3,
      gold: 125.8,
      traditional401k: 8.0, // Historical average
      treasuries5y: 157.1,
      treasuries10y: 86.8
    }
  ]
};

export const retirementStats = {
  median401kBalance: 35000,
  average401kBalance: 132300,
  percentageUnder10k: 30,
  totalUSAssets: 9000000000000, // $9 trillion
  averageContributionRate: 14.1,
  menAverageBalance: 157489,
  womenAverageBalance: 112401
};

export const schwabStats = {
  q1Revenue2025: 5.6, // billions
  netIncome2025: 1.9, // billions
  revenueGrowth: 18, // percent YoY
  clientAssets: 8000, // billions (estimated)
  activeClients: 35000000 // estimated
};

export const projectedRevenue = {
  alternativeAssetsFee: 0.75, // percent
  estimatedAssetCapture: 500, // billions in alternative assets by 2027
  projectedAdditionalRevenue: 2.8, // billions
  newClientGrowth: 20, // percent increase
  marketOpportunity: 25 // percent of total 401k market addressable
};
