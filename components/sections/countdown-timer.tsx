"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  minutes: number
}

export default function CountdownTimer({ minutes }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60)

  useEffect(() => {
    if (timeLeft <= 0) return

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-blue-100 rounded-lg">
          <span className="font-mono text-2xl font-bold text-blue-600">{formatTime(timeLeft)}</span>
          <span className="text-xs text-blue-600">minutes:seconds</span>
        </div>
      </div>
    </div>
  )
}
