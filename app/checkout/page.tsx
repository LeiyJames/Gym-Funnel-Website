import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Lock, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { processCheckout } from "@/lib/actions"

export default function CheckoutPage() {
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
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-2 mb-8">
                <Link
                  href="/thank-you"
                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Link>
                <div className="text-sm text-gray-500">/</div>
                <div className="text-sm font-medium">Checkout</div>
              </div>
              <div className="grid gap-10 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <h1 className="text-2xl font-bold mb-6">Checkout</h1>
                    <form action={processCheckout} className="space-y-6">
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Contact Information</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" name="firstName" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" name="lastName" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" required />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Payment Method</h2>
                        <RadioGroup defaultValue="card" className="grid gap-4">
                          <div className="flex items-center space-x-2 rounded-lg border p-4">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex-1 cursor-pointer">
                              Credit Card
                            </Label>
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-10 rounded bg-gray-200"></div>
                              <div className="h-6 w-10 rounded bg-gray-200"></div>
                              <div className="h-6 w-10 rounded bg-gray-200"></div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 rounded-lg border p-4">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                              PayPal
                            </Label>
                            <div className="h-6 w-10 rounded bg-gray-200"></div>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Card Details</h2>
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <div className="relative">
                            <Input id="card-number" name="cardNumber" placeholder="1234 5678 9012 3456" required />
                            <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                          <div className="space-y-2">
                            <Label htmlFor="expiry-month">Expiry Month</Label>
                            <Input id="expiry-month" name="expiryMonth" placeholder="MM" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="expiry-year">Expiry Year</Label>
                            <Input id="expiry-year" name="expiryYear" placeholder="YY" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" name="cvc" placeholder="123" required />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-4">
                        <Button type="submit" size="lg" className="w-full">
                          <Lock className="mr-2 h-4 w-4" /> Pay $29.00
                        </Button>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Lock className="h-4 w-4" />
                        <span>Secure checkout</span>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                          <Image
                            src="https://i.imgur.com/q7vr5Q8.png?height=64&width=64"
                            alt="Product"
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">30-Day Fitness Program</div>
                          <div className="text-sm text-gray-500">Complete digital package</div>
                        </div>
                        <div className="font-medium">$29.00</div>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between">
                          <div className="text-sm text-gray-500">Subtotal</div>
                          <div className="font-medium">$29.00</div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="text-sm text-gray-500">Discount</div>
                          <div className="font-medium text-green-600">-$70.00</div>
                        </div>
                        <div className="flex justify-between pt-4 text-lg font-bold">
                          <div>Total</div>
                          <div>$29.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <div className="font-medium">30-day money-back guarantee</div>
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          If you're not satisfied with the program, we'll refund your purchase.
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="flex gap-1">
                          <div className="h-5 w-8 rounded bg-gray-200"></div>
                          <div className="h-5 w-8 rounded bg-gray-200"></div>
                          <div className="h-5 w-8 rounded bg-gray-200"></div>
                          <div className="h-5 w-8 rounded bg-gray-200"></div>
                        </div>
                        <div>All major credit cards accepted</div>
                      </div>
                    </div>
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
