import { Stock, Index } from "./types"

export const tickers: Stock[] = [
  { symbol: "AAPL",  price: "213.45", change: "+2.62",  percent: "+1.23%", up: true },
  { symbol: "MSFT",  price: "415.30", change: "+3.58",  percent: "+0.87%", up: true },
  { symbol: "NVDA",  price: "875.20", change: "+29.15", percent: "+3.45%", up: true },
  { symbol: "GOOGL", price: "172.80", change: "-0.59",  percent: "-0.34%", up: false },
  { symbol: "AMZN",  price: "198.50", change: "+3.05",  percent: "+1.56%", up: true },
  { symbol: "TSLA",  price: "178.90", change: "-3.84",  percent: "-2.10%", up: false },
  { symbol: "META",  price: "524.30", change: "+3.23",  percent: "+0.62%", up: true },
  { symbol: "JPM",   price: "234.60", change: "-1.06",  percent: "-0.45%", up: false },
  { symbol: "SPY",   price: "587.30", change: "+3.17",  percent: "+0.54%", up: true },
  { symbol: "QQQ",   price: "498.90", change: "+4.53",  percent: "+0.91%", up: true },
  { symbol: "NFLX",  price: "734.20", change: "+16.80", percent: "+2.34%", up: true },
  { symbol: "AMD",   price: "165.40", change: "-2.15",  percent: "-1.28%", up: false },
]

export const indices: Index[] = [
  { name: "S&P 500", value: "5,872.16", change: "+0.54%", up: true },
  { name: "NASDAQ",  value: "19,341.78", change: "+0.91%", up: true },
  { name: "DOW",     value: "43,428.02", change: "+0.23%", up: true },
]

export const watchlist: Stock[] = [
  { symbol: "AAPL",  price: "213.45", change: "+1.23%", percent: "+1.23%", up: true },
  { symbol: "TSLA",  price: "178.90", change: "-2.10%", percent: "-2.10%", up: false },
  { symbol: "NVDA",  price: "875.20", change: "+3.45%", percent: "+3.45%", up: true },
  { symbol: "MSFT",  price: "415.30", change: "+0.87%", percent: "+0.87%", up: true },
  { symbol: "GOOGL", price: "172.80", change: "-0.34%", percent: "-0.34%", up: false },
]
