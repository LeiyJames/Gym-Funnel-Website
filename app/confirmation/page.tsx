import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Download, Share } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { submitReferral } from "@/lib/actions"

export default function ConfirmationPage() {
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
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to the Program!</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Your purchase was successful. You now have full access to the 30-Day Fitness Program.
              </p>
              <div className="mx-auto max-w-sm pt-4 space-y-4">
                <Button asChild className="w-full" size="lg">
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" /> Download Program Guide
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full" size="lg">
                  <Link href="/">Go to Member Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Access Instructions */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border bg-white p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Download Your Materials</h3>
                      <p className="text-sm text-gray-500">
                        Click the download button above to get your program guide, workout calendar, and meal plan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Check Your Email</h3>
                      <p className="text-sm text-gray-500">
                        We've sent your login details to your email. Use them to access the member portal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Join Our Community</h3>
                      <p className="text-sm text-gray-500">
                        Access our private Facebook group using the link in your welcome email for support and
                        motivation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                      4
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Start Your Journey</h3>
                      <p className="text-sm text-gray-500">
                        Begin Day 1 of your program tomorrow. Remember to take before photos to track your progress!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border-2 border-blue-100 bg-blue-50 p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:flex-1 space-y-4">
                    <h2 className="text-2xl font-bold">Refer a Friend, Get Rewarded</h2>
                    <p className="text-gray-600">
                      Know someone who would love this program? Refer them and get a $10 Amazon gift card when they sign
                      up!
                    </p>
                    <form action={submitReferral} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="friend-email">Friend's Email</Label>
                        <Input id="friend-email" name="friendEmail" type="email" required />
                      </div>
                      <Button type="submit" className="w-full">
                        <Share className="mr-2 h-4 w-4" /> Send Referral
                      </Button>
                    </form>
                  </div>
                  <div className="md:flex-1">
                    <Image
                      src="https://i.imgur.com/1kMLDvd.png/q7vr5Q8.png?height=200&width=200"
                      alt="Referral"
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Upsell */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Premium Upgrade</div>
              <h2 className="text-3xl font-bold tracking-tighter">Want Faster Results?</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Upgrade to include 1-on-1 coaching sessions with our certified fitness trainers.
              </p>
              <div className="mx-auto max-w-lg rounded-xl border bg-white p-6 md:p-8 shadow-sm mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Personal Coaching Package</h3>
                  <div className="flex justify-center gap-2">
                    <div className="text-3xl font-bold text-blue-600">$99</div>
                    <div className="text-lg text-gray-500 line-through">$199</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>4 one-on-one coaching sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Personalized workout adjustments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Custom nutrition guidance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Weekly progress check-ins</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="#">
                      Add Coaching <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
