'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import ProjectItem from '@/components/ProjectItem'
import ProjectOverlay from '@/components/ProjectOverlay'
import AboutOverlay from '@/components/AboutOverlay'

export default function Home() {
  const [images, setImages] = useState<any[]>([])
  const [activeProject, setActiveProject] = useState<any | null>(null)
  const [showAbout, setShowAbout] = useState(false)
const [isMobile, setIsMobile] = useState(false)
const [bgColor, setBgColor] = useState('#ffffff')


useEffect(() => {
  setIsMobile(window.innerWidth < 768)
}, [])

useEffect(() => {
  const fetchBackground = async () => {
    const data = await client.fetch(`
      *[_type == "siteSettings"][0]{
        backgroundColor
      }
    `)

    if (data?.backgroundColor) {
      setBgColor(data.backgroundColor)
    }
  }

  fetchBackground()
}, [])


  // 🔹 Bilder laden + Layout einmalig 
  useEffect(() => {
  const fetchImages = async () => {
    const data = await client.fetch(`
      *[_type == "imageEntry"] | order(order asc) {
        _id,
        size,
        offsetX,
        spacing,
        image { asset->{url} },
        project->{
          _id,
          title,
          pdf { asset->{url} }
        }
      }
    `)

    setImages(data)
  }

  fetchImages()
}, [])


  // 🔹 Zufällige Startposition (einmalig)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const pageHeight = document.body.scrollHeight
      const viewportHeight = window.innerHeight
      const maxScroll = pageHeight - viewportHeight

      if (maxScroll > 0) {
        window.scrollTo({
          top: Math.random() * maxScroll,
          behavior: 'instant',
        })
      }
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return (
<main
  className="relative min-h-screen"
  style={{ backgroundColor: bgColor }}
>




      {/* NAME LINKS */}
      <div
        className="fixed left-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        onClick={() => setShowAbout(true)}
      >
        <span className="text-xs tracking-[0.25em] text-gray-400 hover:text-black transition">
          SAMUEL STOBER
        </span>
      </div>

      {/* BILDER */}
      <div className="py-32">
        {images.map((item) => (
          <ProjectItem
  key={item._id}
  item={item}
  onClick={() => {
    // 📱 MOBILE → PDF extern öffnen
    if (isMobile) {
      window.open(item.project.pdf.asset.url, '_blank')
      return
    }

    // 🖥 DESKTOP → Overlay
    setActiveProject(item.project)
  }}
/>

        ))}
      </div>

      {/* PROJEKT OVERLAY */}
      {activeProject && (
        <ProjectOverlay
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* ABOUT OVERLAY */}
      {showAbout && (
        <AboutOverlay onClose={() => setShowAbout(false)} />
      )}
    </main>
  )
}
