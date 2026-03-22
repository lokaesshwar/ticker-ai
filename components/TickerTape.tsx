"use client"

import { tickers } from "@/lib/stocks"

// doubled so the scroll loop is seamless
const items = [...tickers, ...tickers]

export default function TickerTape() {
  return (
    <div className="relative bg-[#0d1117] border-b border-[#1e2d3d] overflow-hidden py-2 flex-shrink-0">
      <div className="fade-left absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none" />
      <div className="fade-right absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none" />

      <div className="ticker flex w-max">
        {items.map((stock, i) => (
          <div key={i} className="flex items-center gap-2 px-5 border-r border-[#1e2d3d] text-xs font-['Space_Mono'] flex-shrink-0">
            <span className="text-white font-bold">{stock.symbol}</span>
            <span className="text-[#94a3b8]">${stock.price}</span>
            <span className={stock.up ? "text-[#00d084]" : "text-[#ff4757]"}>{stock.percent}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
