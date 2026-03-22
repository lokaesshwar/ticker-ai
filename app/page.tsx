"use client"

import { useState, useRef, useEffect } from "react"
import Header from "@/components/Header"
import TickerTape from "@/components/TickerTape"
import Sidebar from "@/components/Sidebar"
import Message from "@/components/Message"
import TypingDots from "@/components/TypingDots"
import Landing from "@/components/Landing"
import Input from "@/components/Input"
import { Message as MessageType } from "@/lib/types"
import { randomId } from "@/lib/utils"
import { AlertTriangle } from "lucide-react"

export default function Page() {
  const [messages, setMessages] = useState<MessageType[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const bottom = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  async function send(text: string) {
    if (loading) return
    setError("")

    const userMsg: MessageType = {
      id: randomId(),
      role: "user",
      content: text,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg])
    setLoading(true)

    const history = [...messages, userMsg].map((m) => ({
      role: m.role,
      content: m.content,
    }))

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || "Something went wrong")

      setMessages((prev) => [...prev, {
        id: randomId(),
        role: "assistant",
        content: data.content,
        timestamp: new Date(),
      }])

    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#080b0f]">
      <TickerTape />
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar onPrompt={send} />

        <div className="flex flex-col flex-1 overflow-hidden">
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 md:px-6 py-5 flex flex-col gap-4">
            {messages.length === 0 && !loading
              ? <Landing onPrompt={send} />
              : messages.map((msg) => <Message key={msg.id} message={msg} />)
            }

            {loading && <TypingDots />}

            {error && (
              <div className="flex items-center gap-2 text-[#ff4757] text-sm bg-[#ff4757]/5 border border-[#ff4757]/20 rounded-xl px-4 py-3 slide-in">
                <AlertTriangle size={14} />
                <span>{error}</span>
                <button onClick={() => setError("")} className="ml-auto text-xs underline opacity-60 hover:opacity-100">
                  dismiss
                </button>
              </div>
            )}

            <div ref={bottom} />
          </div>

          <Input onSend={send} disabled={loading} />
        </div>
      </div>
    </div>
  )
}
