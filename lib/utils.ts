import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTime(date: Date) {
  return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
}

export function randomId() {
  return Math.random().toString(36).slice(2, 9)
}

export function renderMessage(text: string) {
  return text
    // bold
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#00d084">$1</strong>')
    // italic
    .replace(/\*(.*?)\*/g, '<em style="color:#f0b429;font-style:normal">$1</em>')
    // green stocks — good to consider
    .replace(/\{\{green\}\}(.*?)\{\{\/green\}\}/g,
      '<span style="color:#00d084;background:rgba(0,208,132,0.12);padding:2px 8px;border-radius:4px;font-weight:600">$1</span>'
    )
    // red stocks — at risk
    .replace(/\{\{red\}\}(.*?)\{\{\/red\}\}/g,
      '<span style="color:#ff4757;background:rgba(255,71,87,0.12);padding:2px 8px;border-radius:4px;font-weight:600">$1</span>'
    )
    .replace(/\n\n/g, '<div style="height:1px;background:#1e2d3d;margin:10px 0"></div>')
    .replace(/\n/g, "<br />")
}