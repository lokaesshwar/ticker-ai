import { NextRequest, NextResponse } from "next/server"
import { systemPrompt } from "@/lib/prompts"

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "GROQ_API_KEY not set" }, { status: 500 })
  }

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 1024,
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      return NextResponse.json({ error: err.error?.message || "API error" }, { status: res.status })
    }

    const data = await res.json()
    const reply = data.choices?.[0]?.message?.content ?? ""
    return NextResponse.json({ content: reply })

  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
