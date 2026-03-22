"use client"

import { Message as MessageType } from "@/lib/types"
import { getTime, renderMessage } from "@/lib/utils"

interface Props {
  message: MessageType
}

export default function Message({ message }: Props) {
  const isBot = message.role === "assistant"

  return (
    <div className={`flex gap-3 slide-in ${!isBot ? "flex-row-reverse" : ""}`}>
      
      {/* Avatar */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 font-['Space_Mono']"
        style={isBot
          ? { background: "linear-gradient(135deg, #00d084, #059669)", color: "#000" }
          : { background: "#131c26", border: "1px solid #1e2d3d", color: "#94a3b8", fontSize: "16px" }
        }
      >
        {isBot ? "TX" : "👤"}
      </div>

      {/* Bubble */}
      <div className={`flex flex-col max-w-[70%] ${!isBot ? "items-end" : ""}`}>
        <div
          className="px-4 py-3 rounded-xl text-[13px] leading-relaxed text-[#e2e8f0]"
          style={isBot
            ? { background: "#131c26", border: "1px solid #1e2d3d", borderTopLeftRadius: "4px" }
            : { background: "rgba(0,208,132,0.07)", border: "1px solid rgba(0,208,132,0.2)", borderTopRightRadius: "4px" }
          }
        >
          {isBot
            ? <div dangerouslySetInnerHTML={{ __html: renderMessage(message.content) }} />
            : <p>{message.content}</p>
          }
        </div>
        <span className="text-[10px] text-[#4a5568] mt-1 px-1 font-['Space_Mono']">
          {getTime(message.timestamp)}
        </span>
      </div>

    </div>
  )
}
