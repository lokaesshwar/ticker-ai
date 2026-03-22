export const quickPrompts = [
  { icon: "📊", label: "P/E Ratio",      text: "Explain P/E ratio with a simple example" },
  { icon: "🕯",  label: "Candlesticks",  text: "How do I read a candlestick chart?" },
  { icon: "💰", label: "DCA",            text: "What is dollar cost averaging?" },
  { icon: "📈", label: "Options",        text: "Explain options trading basics" },
  { icon: "💥", label: "Market Crashes", text: "What causes stock market crashes?" },
  { icon: "🏛",  label: "Fed & Rates",   text: "How does the Fed affect stock markets?" },
  { icon: "🗂",  label: "ETFs",          text: "What are ETFs and index funds?" },
  { icon: "📉", label: "Short Selling",  text: "Explain short selling and the risks" },
]

export const hints = [
  { label: "Market Cap", text: "What is market capitalization?" },
  { label: "Dividends",  text: "How do stock dividends work?" },
  { label: "VIX",        text: "What is the VIX volatility index?" },
  { label: "EPS",        text: "What are earnings per share?" },
  { label: "EBITDA",     text: "What is EBITDA?" },
  { label: "RSI",        text: "What is the RSI indicator?" },
  { label: "MACD",       text: "Explain the MACD indicator" },
]

export const landingCards = [
  {
    icon: "🔬",
    title: "Analysis Methods",
    desc: "Technical vs fundamental",
    text: "Explain technical analysis vs fundamental analysis",
  },
  {
    icon: "🌱",
    title: "Getting Started",
    desc: "Invest your first $1,000",
    text: "How do I start investing with $1000?",
  },
  {
    icon: "🎯",
    title: "Key Indicators",
    desc: "Metrics every investor watches",
    text: "What are the key market indicators I should track?",
  },
  {
    icon: "🛡",
    title: "Risk Management",
    desc: "Protect your portfolio",
    text: "Explain portfolio diversification and risk management",
  },
]

export const systemPrompt = `You are TICKER, a stock market AI assistant inside a trading terminal.

Your style:
- Talk like a knowledgeable friend, not a textbook
- Use **bold** for key terms
- Keep it to 2-4 paragraphs max
- End with a 💡 takeaway when it makes sense

ALWAYS follow this rule in every single response — no exceptions:
Whenever you mention a stock name, sector name, ETF, or company name, you must tag it based on its outlook in the context of the question:
- Positive outlook or worth considering → {{green}}Name{{/green}}
- Negative outlook or at risk → {{red}}Name{{/red}}
- If neutral or just explaining, still tag it as {{green}} or {{red}} based on general sentiment

Every stock, sector, ETF, or company name must be tagged. Never leave them untagged.

Examples:
- {{green}}Apple{{/green}} has strong fundamentals while {{red}}Intel{{/red}} has been losing market share.
- {{green}}S&P 500 ETFs{{/green}} are great for beginners whereas {{red}}meme stocks{{/red}} carry high risk.
- {{green}}Energy sector{{/green}} benefits from inflation while {{red}}Retail sector{{/red}} struggles.

You know: stocks, trading strategies, market mechanics, economic indicators, ETFs, options, risk management, market history.

Never give specific buy/sell advice. Always remind users this is educational, not financial advice.`