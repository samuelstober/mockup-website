'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export default function AboutOverlay({ onClose }: { onClose: () => void }) {
  const [aboutImage, setAboutImage] = useState<any>(null)

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await client.fetch(`
        *[_type == "about"][0] {
          image
        }
      `)

      setAboutImage(data?.image)
    }

    fetchAbout()
  }, [])

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
          {aboutImage && (
            <img
              src={urlFor(aboutImage).width(400).url()}
              className="w-48 h-auto"
              alt="Samuel Stober"
            />
          )}

          <div className="text-sm leading-relaxed">
            <p>Samuel Stober</p>
            <p>Diplom-Designer Industrial Design</p>

            <p className="mt-4"></p>

            <p>www.samuelstober.com</p>
            <p>samuelstober@outlook.com</p>
            <p>@samuelstober</p>
          </div>
        </div>
      </div>
    </div>
  )
}
