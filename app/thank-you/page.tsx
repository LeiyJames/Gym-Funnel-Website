import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/sections/countdown-timer"

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-blue-600">Fit</span>
            <span>In 30</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        {/* Thank You Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Thank You for Signing Up!</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Your free workout plan has been sent to your email. Check your inbox (and spam folder) to get started.
              </p>
              <div className="mx-auto max-w-sm pt-4">
                <Button asChild className="w-full" size="lg">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Upsell Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 md:p-10 shadow-xl border border-blue-100">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                    Limited Time Offer
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">Upgrade to the Full 30-Day Program</h2>
                  <p className="text-gray-500">
                    Get the complete program with daily workout videos, meal plans, and personal coaching for just $29
                    (regular price $99).
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>30 daily workout videos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Complete meal plan with recipes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Progress tracking tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Private community access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold text-blue-600">$29</div>
                    <div className="text-lg text-gray-500 line-through">$99</div>
                    <div className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">Save 70%</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-red-600" />
                    <span className="text-red-600 font-medium">This offer expires in:</span>
                  </div>
                  <CountdownTimer minutes={15} />
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/checkout">
                      Unlock Full Program Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="mx-auto w-full max-w-sm">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-md">
                    <div className="flex items-center justify-center h-full">
                      <Image
                        src="https://i.imgur.com/C0TpkpJ.png?height=200&width=320"
                        alt="Program Preview"
                        width={320}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-white/80 p-3">
                          <svg
                            xmlns="https://i.imgur.com/Fl3TltI.png"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-blue-600"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-blue-600"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">Instant Access</div>
                        <div className="text-gray-500">Start your journey today</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-blue-600"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">Money-Back Guarantee</div>
                        <div className="text-gray-500">30-day satisfaction guarantee</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">What Our Members Are Saying</h2>
              <div className="mx-auto max-w-2xl rounded-xl border p-6 md:p-8 shadow-sm">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="https://i.imgur.com/Fl3TltI.png?height=64&width=64"
                      alt="Testimonial"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-lg italic">
                      "I was skeptical at first, but after just 30 days I lost 12 pounds and feel more energetic than
                      ever. The program is easy to follow and the results are amazing!"
                    </p>
                    <div className="font-medium">Sarah J.</div>
                    <div className="text-sm text-gray-500">Lost 12 lbs in 30 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container py-6 text-center text-sm text-gray-500 px-4 md:px-6">
          &copy; {new Date().getFullYear()} FitIn30. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
