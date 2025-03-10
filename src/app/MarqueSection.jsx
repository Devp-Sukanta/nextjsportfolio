'use client'

import { useEffect, useRef, useState } from "react"

export default function ImageMarquee({
  images,
  speed = 20,
  direction = "left",
  gap = 20,
  className = "",
}) {
  const [duplicatedImages, setDuplicatedImages] = useState([])
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)
  const [animationDuration, setAnimationDuration] = useState(0)

  // Duplicate images to create a seamless loop
  useEffect(() => {
    // Duplicate the images array to ensure continuous scrolling
    setDuplicatedImages([...images, ...images])
  }, [images])

  // Calculate animation duration based on content width
  useEffect(() => {
    if (!scrollerRef.current) return

    const scrollerWidth = scrollerRef.current.offsetWidth
    // Calculate duration based on content width and speed
    // The larger the content, the longer the duration needs to be
    const calculatedDuration = scrollerWidth / speed
    setAnimationDuration(calculatedDuration)
  }, [speed])

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden ${className}`}
      aria-hidden="true" // Hide from screen readers as this is decorative
    >
      <div
        ref={scrollerRef}
        className="flex whitespace-nowrap"
        style={{
          animation: `scroll${direction === "left" ? "Left" : "Right"} ${animationDuration}s linear infinite`,
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div key={`${image}-${index}`} className="flex-shrink-0" style={{ marginRight: `${gap}px` }}>
            <div className="relative h-14 w-24 ">
              <img src={image || "/placeholder.svg"} alt="" className="h-full w-full object-contain object-center" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

