# Ticker - Stock Market AI Chatbot

**Live:** [ticker-ai-three.vercel.app](https://ticker-ai-three.vercel.app) 

## What I built

A chatbot that helps you understand the stock market. You can ask it anything from "what is a P/E ratio" to "how does the Fed affect markets" and it gives you a straight answer, no fluff.

The UI is built around the Bloomberg terminal aesthetic - dark, dense, data-forward. The goal was for the interface itself to tell you what kind of tool this is before you even type anything.

## Why this topic

I've been trying to get into investing and kept running into the same problem. Everything online is either too simple or assumes too much. I wanted to build something that actually meets you where you are and explains things clearly.

## Decisions I made

The landing screen shows four cards instead of an empty input. It tells you what the bot is good at so you're not staring at a blank box wondering what to ask.

The ticker tape at the top isn't just decoration. It sets the context before the conversation starts.

The sidebar watchlist is clickable. Each stock fires a prompt about that ticker so the UI does work, not just sits there.

Hint chips below the input (RSI, MACD, VIX, EPS) act as breadcrumbs for beginners and shortcuts for everyone else.

Bot responses auto-color numbers. Positive goes green, negative goes red. Small detail but it makes answers feel like they belong in this interface.

## Stack

- Next.js 14, TypeScript
- Tailwind CSS, no UI library
- Groq API with llama-3.3-70b
- Deployed on Vercel

## Running locally

```bash
git clone https://github.com/lokaesshwar/ticker-ai.git
cd ticker-ai
npm install
```

Add a `.env.local` file:
```
GROQ_API_KEY=gsk_your_key_here
```

Get a free key at [console.groq.com](https://console.groq.com), then run:

```bash
npm run dev
```

## AI usage

I used Claude to move faster on components and styling. The thinking behind what to build, how the UI should feel, and what makes this more than a chat wrapper was mine. These tools are useful when you know what you want and just need to get there quicker. 
