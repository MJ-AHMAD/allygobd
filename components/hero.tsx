"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Discover Bangladesh with AllyGo",
      description: "Your ultimate companion for exploring, shopping, learning, and connecting in Bangladesh.",
      cta: "Start Exploring",
      link: "/explore",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "Shop Local, Support Local",
      description: "Discover unique products from talented Bangladeshi designers and artisans.",
      cta: "Visit Store",
      link: "/store",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "Student Resources",
      description: "Tools, resources, and communities designed for Bangladeshi students.",
      cta: "For Students",
      link: "/students",
      image: "/placeholder.svg?height=600&width=1200",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative overflow-hidden rounded-lg mt-8 mb-16">
      <div className="relative h-[500px] md:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl">{slide.description}</p>
              <div>
                <Button asChild size="lg" className="group">
                  <Link href={slide.link}>
                    {slide.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
