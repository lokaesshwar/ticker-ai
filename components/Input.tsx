"use client"

import { useState, useRef } from "react"
import { Send } from "lucide-react"
import { hints } from "@/lib/prompts"

interface Props {
  onSend: (text: string) => void
  disabled: boolean
}

export default function Input({ onSend, disabled }: Props) {
  const [value, setValue] = useState("")
  const ref = useRef<HTMLTextAreaElement>(null)

  function submit() {
    const msg = value.trim()
    if (!msg || disabled) return
    onSend(msg)
    setValue("")
    if (ref.current) ref.current.style.height = "auto"
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value)
    e.target.style.height = "auto"
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px"
  }

  return (
    <div className="px-4 md:px-5 pb-5 pt-3 border-t border-[#1e2d3d] bg-[#080b0f] flex-shrink-0">
      
      {/* Text input */}
      <div className={`flex items-end gap-2 bg-[#131c26] border rounded-xl px-4 py-3 transition-all ${
        disabled ? "opacity-60 border-[#1e2d3d]" : "border-[#1e2d3d] focus-within:border-[#00d084]/50"
      }`}>
        <span className="text-[#00d084]/50 font-['Space_Mono'] text-sm mb-0.5 select-none">›_</span>
        <textarea
          ref={ref}
          rows={1}
          value={value}
          onChange={onChange}
          onKeyDown={onKey}
          disabled={disabled}
          placeholder="Ask about stocks, markets, strategies..."
          className="flex-1 bg-transparent border-none outline-none resize-none text-[13px] text-[#e2e8f0] placeholder:text-[#4a5568] font-['IBM_Plex_Mono'] leading-relaxed max-h-[120px]"
        />
        <button
          onClick={submit}
          disabled={disabled || !value.trim()}
          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all mb-0.5 ${
            value.trim() && !disabled
              ? "bg-[#00d084] hover:scale-105 active:scale-95"
              : "bg-[#00d084]/20 cursor-not-allowed"
          }`}
        >
          <Send size={13} className={value.trim() && !disabled ? "text-black" : "text-[#00d084]/40"} />
        </button>
      </div>

      {/* Hint chips */}
      <div className="flex gap-1.5 mt-2.5 flex-wrap">
        {hints.map((hint) => (
          <button
            key={hint.label}
            onClick={() => onSend(hint.text)}
            disabled={disabled}
            className="text-[10px] text-[#4a5568] border border-[#1e2d3d] rounded-full px-2.5 py-0.5 hover:text-[#00d084] hover:border-[#00d084]/30 transition-colors disabled:opacity-40 font-['IBM_Plex_Mono']"
          >
            {hint.label}
          </button>
        ))}
      </div>

      <p className="text-[10px] text-[#4a5568] text-center mt-2.5">
        ⚠ Educational only — not financial advice
      </p>

    </div>
  )
}
