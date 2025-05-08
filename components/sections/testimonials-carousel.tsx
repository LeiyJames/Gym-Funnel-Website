"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://i.imgur.com/Gpm6v1C.png?height=80&width=80",
    text: "I've tried so many fitness programs before, but this is the only one that actually worked for me. I lost 15 pounds in 30 days and feel amazing!",
    rating: 5,
    achievement: "Lost 15 lbs in 30 days",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    image: "https://i.imgur.com/4T1xOVS.png?height=80&width=80",
    text: "As a busy dad, I never thought I'd find time to work out. This program made it easy with just 30 minutes a day. I've gained muscle and lost my dad bod!",
    rating: 5,
    achievement: "Lost 10 lbs and gained muscle",
  },
  {
    id: 3,
    name: "Jennifer Lee",
    image: "https://i.imgur.com/4qlCAWD.png?height=80&width=80",
    text: "The meal plans were a game-changer for me. I finally understand how to eat healthy without feeling deprived. My energy levels are through the roof!",
    rating: 5,
    achievement: "Increased energy and lost 8 lbs",
  },
  {
    id: 4,
    name: "David Thompson",
    image: "https://i.imgur.com/JmP5l3p.png?height=80&width=80",
    text: "I was skeptical at first, but the results speak for themselves. My friends keep asking what my secret is. This program is worth every penny!",
    rating: 5,
    achievement: "Lost 12 lbs and 3 inches off waist",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative">
      <div className="mx-auto max-w-2xl rounded-xl border p-6 md:p-8 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <Image
              src={currentTestimonial.image || "/placeholder.svg"}
              alt={currentTestimonial.name}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="flex">
            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="space-y-2 text-center">
            <p className="text-lg italic">"{currentTestimonial.text}"</p>
            <div className="font-medium">{currentTestimonial.name}</div>
            <div className="text-sm text-gray-500">{currentTestimonial.achievement}</div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
      <div className="mt-4 flex justify-center gap-1">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${i === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(i)}
          >
            <span className="sr-only">Testimonial {i + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
