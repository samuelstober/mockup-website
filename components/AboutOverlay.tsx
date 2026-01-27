'use client'

export default function AboutOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90vw] max-w-3xl p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-8">
          <img
            src="/samuel.jpg"
            className="w-48 h-auto"
            alt="Samuel Stober"
          />

          <div className="text-sm leading-relaxed">
            <p>
              Samuel Stober </p>
              <p>  
                Diplom-Designer Industrial Design </p>
            <p className="mt-4"></p>

            <p> www.samuelstober.com </p>
            <p> samuelstober@outlook.com  </p>
            <p> @samuelstober</p>
          </div>
        </div>
      </div>
    </div>
  )
}
