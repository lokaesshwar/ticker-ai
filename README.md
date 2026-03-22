# Ticker — Stock Market AI Chatbot

Ask it anything about the stock market — P/E ratios, candlestick charts, options, Fed policy, ETFs. It answers like a knowledgeable friend, not a textbook.

**Live:** [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

## Why stocks

Most people feel like they *should* understand the market but never quite got there. There's a lot of noise online — Reddit, Twitter, YouTube — but very little that actually meets you where you are. I wanted to build something that felt like messaging a friend who works in finance.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Groq API — llama-3.3-70b (free, fast)
- Lucide React

## Run locally

```bash
git clone https://github.com/yourusername/ticker-ai
cd ticker-ai
npm install
```

Create `.env.local`:
```
GROQ_API_KEY=gsk_xxxxxxxxxxxx
```

```bash
npm run dev
```

## Project structure

```
app/
  page.tsx              # main page, all state lives here
  api/chat/route.ts     # calls Groq, key never hits the client
components/
  Header.tsx            # logo + indices + live status
  TickerTape.tsx        # scrolling prices at the top
  Sidebar.tsx           # watchlist + quick prompts
  Message.tsx           # single chat bubble
  TypingDots.tsx        # loading state
  Landing.tsx           # shown when chat is empty
  Input.tsx             # textarea + send + hint chips
lib/
  types.ts              # Message, Stock, Index types
  stocks.ts             # mock ticker/watchlist/index data
  prompts.ts            # quick prompts, hints, system prompt
  utils.ts              # cn(), getTime(), renderMessage()
```

## Deploy

```bash
npx vercel --prod
```

Add `GROQ_API_KEY` in Vercel → Settings → Environment Variables, then redeploy.

## Note on AI

Used Claude to help scaffold components. Design decisions, layout, and this README are mine.
