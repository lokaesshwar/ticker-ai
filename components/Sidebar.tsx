"use client"

import { watchlist } from "@/lib/stocks"
import { quickPrompts } from "@/lib/prompts"

interface Props {
  onPrompt: (text: string) => void
}

export default function Sidebar({ onPrompt }: Props) {
  return (
    <aside className="hidden lg:flex w-48 bg-[#0d1117] border-r border-[#1e2d3d] flex-col flex-shrink-0 overflow-y-auto">
      
      {/* Quick ask */}
      <div className="p-3 border-b border-[#1e2d3d]">
        <p className="text-[10px] text-[#4a5568] uppercase tracking-widest mb-2">Quick Ask</p>
        <div className="flex flex-col gap-1">
          {quickPrompts.map((p) => (
            <button
              key={p.label}
              onClick={() => onPrompt(p.text)}
              className="text-left text-[11px] text-[#94a3b8] px-2 py-1.5 rounded hover:bg-[#131c26] hover:text-[#00d084] transition-colors"
            >
              <span className="mr-1.5">{p.icon}</span>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Watchlist */}
      <div className="p-3">
        <p className="text-[10px] text-[#4a5568] uppercase tracking-widest mb-2">Watchlist</p>
        {watchlist.map((stock) => (
          <button
            key={stock.symbol}
            onClick={() => onPrompt(`Tell me about ${stock.symbol} stock`)}
            className="w-full flex justify-between items-center py-2 border-b border-[#1e2d3d] last:border-0 hover:opacity-70 transition-opacity"
          >
            <div className="text-left">
              <p className="text-white text-xs font-bold font-['Space_Mono']">{stock.symbol}</p>
              <p className="text-[#4a5568] text-[10px]">${stock.price}</p>
            </div>
            <span className={`text-[10px] font-['Space_Mono'] px-1.5 py-0.5 rounded ${
              stock.up
                ? "text-[#00d084] bg-[#00d084]/10"
                : "text-[#ff4757] bg-[#ff4757]/10"
            }`}>
              {stock.change}
            </span>
          </button>
        ))}
      </div>

    </aside>
  )
}
