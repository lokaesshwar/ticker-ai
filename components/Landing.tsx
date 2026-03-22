"use client"

import { landingCards } from "@/lib/prompts"

interface Props {
  onPrompt: (text: string) => void
}

export default function Landing({ onPrompt }: Props) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 text-center fade-up">
      
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 border border-[#00d084]/30"
        style={{ background: "rgba(0,208,132,0.08)", boxShadow: "0 0 20px rgba(0,208,132,0.1)" }}
      >
        📈
      </div>

      <h1 className="text-[#e2e8f0] font-['DM_Serif_Display'] text-2xl mb-1">
        Market Intelligence, <em>on demand.</em>
      </h1>
      <p className="text-[#4a5568] text-xs max-w-xs leading-loose mb-7 font-['IBM_Plex_Mono']">
        Ask anything about stocks, trading strategies, or market concepts.
      </p>

      {/* Quick start cards */}
      <div className="grid grid-cols-2 gap-2.5 max-w-sm w-full">
        {landingCards.map((card, i) => (
          <button
            key={card.title}
            onClick={() => onPrompt(card.text)}
            className={`bg-[#131c26] border border-[#1e2d3d] rounded-xl p-4 text-left hover:border-[#00d084]/40 hover:bg-[#00d084]/5 transition-all hover:-translate-y-0.5 opacity-0 fade-up card-${i + 1}`}
          >
            <p className="text-lg mb-1.5">{card.icon}</p>
            <p className="text-[#e2e8f0] text-xs font-semibold mb-0.5">{card.title}</p>
            <p className="text-[#4a5568] text-[11px]">{card.desc}</p>
          </button>
        ))}
      </div>

    </div>
  )
}
