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
  className="
    fixed inset-0 z-[100]
    bg-black/40
    flex items-center justify-center
    px-4        /* 📱 Luft zum Rand */
    md:px-8     /* 🖥 mehr Luft */
  "
  onClick={onClose}
>

 <div
  className="
    bg-white
    w-full
    max-h-[85vh]
    overflow-y-auto

    px-3 py-4        /* 📱 kompakt */
    text-sm
    leading-snug

    md:w-[90vw]
    md:max-w-3xl
    md:max-h-none
    md:px-12 md:py-10 /* 🖥 luftig */
    md:text-base
    md:leading-normal
  "
  onClick={(e) => e.stopPropagation()}
>





        <div className="flex gap-4 md:gap-8 flex-col md:flex-row items-center md:items-start text-center md:text-left">


          {aboutImage && (
            <img
              src={urlFor(aboutImage).width(400).url()}
              className="w-40 md:w-48 h-auto object-contain flex-shrink-0"

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
