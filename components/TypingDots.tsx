export default function TypingDots() {
  return (
    <div className="flex gap-3 slide-in">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 font-['Space_Mono']"
        style={{ background: "linear-gradient(135deg, #00d084, #059669)", color: "#000" }}
      >
        TX
      </div>
      <div className="bg-[#131c26] border border-[#1e2d3d] rounded-xl rounded-tl-sm px-4 py-4">
        <div className="flex gap-1.5 items-center">
          <span className="w-1.5 h-1.5 bg-[#00d084] rounded-full dot" />
          <span className="w-1.5 h-1.5 bg-[#00d084] rounded-full dot" />
          <span className="w-1.5 h-1.5 bg-[#00d084] rounded-full dot" />
        </div>
      </div>
    </div>
  )
}
