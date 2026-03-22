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

// formats bot markdown-ish text into styled HTML
export function renderMessage(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#00d084">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em style="color:#f0b429;font-style:normal">$1</em>')
    .replace(/\n\n/g, '<div style="height:1px;background:#1e2d3d;margin:10px 0"></div>')
    .replace(/\n/g, "<br />")
}
