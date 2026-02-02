'use client'

import { useEffect, useState } from 'react'

export default function ProjectOverlay({
  project,
  onClose,
}: {
  project: any
  onClose: () => void
}) {
  const [iframeKey, setIframeKey] = useState(0)

  // 🔁 iframe jedes Mal neu laden, wenn Overlay erscheint
  useEffect(() => {
    setIframeKey((k) => k + 1)
  }, [project])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="
          bg-white
          w-[96vw]
          h-[40vh]
          md:w-[94vw]
          md:h-[94vh]
          max-w-[1400px]
        "
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
  key={iframeKey}
  src={`${project.pdf.asset.url}?v=${iframeKey}#page=1&view=FitH&zoom=page-width&toolbar=0&navpanes=0`}
  className="w-full h-full"
  style={{ border: 'none' }}
/>

      </div>
    </div>
  )
}
