import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TestimonialsCarousel from "@/components/sections/testimonials-carousel"
import BeforeAfterImages from "@/components/sections/before-after-images"
import { submitLeadForm } from "@/lib/actions"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-blue-600">Fit</span>
            <span>In 30</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#results" className="text-sm font-medium hover:underline underline-offset-4">
              Results
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <Button asChild>
            <Link href="#signup">Get Started</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  30-Day Fitness Challenge
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Get Fit in 30 Days – <span className="text-blue-600">No Gym Required!</span>
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join over 10,000 others transforming their health from home with our proven fitness program.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <a href="#signup">
                      Get Your Free Workout Plan <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>No equipment needed</span>
                  <CheckCircle className="h-4 w-4 text-blue-600 ml-4" />
                  <span>30 minutes per day</span>
                  <CheckCircle className="h-4 w-4 text-blue-600 ml-4" />
                  <span>Money-back guarantee</span>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] relative">
                <Image
                  src="https://i.imgur.com/ZXPWNxp.png?height=600&width=500"
                  alt="Fitness Transformation"
                  width={500}
                  height={600}
                  className="mx-auto rounded-xl shadow-xl"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm font-medium">Trusted by</div>
                  <div className="text-2xl font-bold text-blue-600">10,000+</div>
                  <div className="text-sm text-gray-500">happy customers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section id="signup" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-md space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Your Free Workout Plan</h2>
                <p className="text-gray-500 md:text-lg">
                  Enter your details below to receive your personalized workout plan instantly.
                </p>
              </div>
              <form action={submitLeadForm} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
                <Button type="submit" size="lg" className="w-full group">
                  Get Your Free Workout Plan
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transformations That Inspire
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from people just like you who have transformed their bodies and lives with our 30-day program.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section id="results" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Real Results</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Before & After Transformations
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See the incredible transformations our members have achieved in just 30 days.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <BeforeAfterImages />
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <a href="#signup">
                  Start Your Transformation Today <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about the 30-day fitness program.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">Do I need any equipment?</h3>
                <p className="text-gray-500 mt-1">
                  No, our program is designed to be done with just your bodyweight. No gym or equipment required!
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">How much time do I need each day?</h3>
                <p className="text-gray-500 mt-1">
                  Each workout takes just 30 minutes per day, making it easy to fit into even the busiest schedules.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">Is this suitable for beginners?</h3>
                <p className="text-gray-500 mt-1">
                  The program includes modifications for all fitness levels, from complete beginners to advanced.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">What if I'm not satisfied?</h3>
                <p className="text-gray-500 mt-1">
                  We offer a 30-day money-back guarantee. If you're not happy with the program, we'll refund your
                  purchase.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" asChild>
                <a href="#signup">
                  Get Your Free Workout Plan <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 px-4 md:px-6">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <span className="text-blue-600">Fit</span>
              <span>In 30</span>
            </div>
            <p className="text-sm text-gray-500">
              Transform your body and health in just 30 days with our proven home workout program.
            </p>
          </div>
          <div className="flex-1 space-y-4">
            <div className="font-medium">Quick Links</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#" className="hover:underline underline-offset-4">
                Home
              </Link>
              <Link href="#testimonials" className="hover:underline underline-offset-4">
                Testimonials
              </Link>
              <Link href="#results" className="hover:underline underline-offset-4">
                Results
              </Link>
              <Link href="#faq" className="hover:underline underline-offset-4">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex-1 space-y-4">
            <div className="font-medium">Legal</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#" className="hover:underline underline-offset-4">
                Terms of Service
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Refund Policy
              </Link>
            </nav>
          </div>
          <div className="flex-1 space-y-4">
            <div className="font-medium">Contact</div>
            <p className="text-sm text-gray-500">
              Email: support@fitin30.com
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-gray-500">
          <div className="container px-4 md:px-6">&copy; {new Date().getFullYear()} FitIn30. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
