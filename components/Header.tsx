"use client"

import { indices } from "@/lib/stocks"

export default function Header() {
  return (
    <header className="bg-[#0d1117] border-b border-[#1e2d3d] px-5 py-3 flex items-center justify-between flex-shrink-0">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#00d084] rounded-lg flex items-center justify-center text-black font-bold text-xs font-['Space_Mono']">
          TX
        </div>
        <div>
          <p className="text-white font-['DM_Serif_Display'] text-xl leading-none">TICKER</p>
          <p className="text-[#4a5568] text-[10px] tracking-widest uppercase mt-0.5">AI Market Intelligence</p>
        </div>
      </div>

      {/* Right side — indices + live dot */}
      <div className="flex items-center gap-5">
        <div className="hidden md:flex gap-5">
          {indices.map((idx) => (
            <div key={idx.name} className="text-right">
              <p className="text-[#4a5568] text-[10px] uppercase tracking-wider">{idx.name}</p>
              <p className="text-white text-xs font-['Space_Mono'] font-bold">{idx.value}</p>
              <p className={`text-[10px] font-['Space_Mono'] ${idx.up ? "text-[#00d084]" : "text-[#ff4757]"}`}>
                {idx.change}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-[#94a3b8] text-xs">
          <span className="w-2 h-2 rounded-full bg-[#00d084] pulse block" />
          <span className="font-['Space_Mono'] text-[10px] tracking-widest">LIVE</span>
        </div>
      </div>

    </header>
  )
}
