'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Banner {
  id: number
  image: string
  alt: string
}

interface SwipeableBannerProps {
  banners: Banner[]
}

export function SwipeableBanner({ banners }: SwipeableBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)
  }

  return (
    <div className="relative w-full h-48">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={banner.image || "/placeholder.svg"}
            alt={banner.alt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/50 dark:bg-background/30 rounded-full p-2"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/50 dark:bg-background/30 rounded-full p-2"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

