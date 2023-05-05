"use client"
import { SVGProps, useState } from "react"
import { RadioGroup } from '@headlessui/react'

const plans = [
    {
        name: 'Standard',
        description: 'Best suited for small teams',
        price: 8.99,
        pricePerAddedUser: 3.99,
        perks: {
            space: '1TB',
            fileRecovery: '30 days',
            unlimitedHistory: true,
        }
    },
    {
        name: 'Professional',
        description: 'Best suited for large teams and enterprises',
        price: 12.99,
        pricePerAddedUser: 6.99,
        perks: {
            space: '10TB',
            fileRecovery: '90 days',
            unlimitedHistory: true,
        }
    }
]


export default function PricingCard() {

    const [selected, setSelected] = useState(plans[0])

    return (
        <div className="py-4 px-4 lg:px-8 bg-white w-80 md:w-2/4 lg:w-2/6 shadow-xl rounded-xl">
            <div className="flex items-center justify-start gap-x-4">
                <h1 className="text-xl font-bold text-slate-800">Subscription</h1>
                <h4 className="text-xs bg-pink-600 px-2 py-1 text-white rounded-md">✨ 50% Off</h4>
            </div>

            <div className="mt-4">
                <h2 className="text-md font-semibold text-slate-700">Payment plan</h2>
                <p className="-mt-1 text-sm font-normal text-slate-400">Save more on annual plans</p>
            </div>

            <div className="mt-4 w-full border-t border-slate-200" aria-hidden="true" />

            <div className="w-full px-4 py-16">

            </div>


        </div>
    )
}