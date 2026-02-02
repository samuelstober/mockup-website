'use client'

export default function ProjectOverlay({
  project,
  onClose,
}: {
  project: any
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="
  bg-white 
  w-[96vw] 
  h-[40vh] 
  md:w-[94vw] 
  md:h-[94vh] 
  max-w-[1400px]
">

   <iframe
  src={`${project.pdf.asset.url}#page=1&view=FitH&toolbar=0&navpanes=0`}
  className="w-full h-full"
  style={{ border: 'none' }}
/>

      </div>
    </div>
  )
}
