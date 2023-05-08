"use client"
import { Check } from 'lucide-react'
import { CircleFill, RecordCircleFill } from 'react-bootstrap-icons'
import { useState } from "react"
import { RadioGroup } from '@headlessui/react'

const plans = [
    {
        id: 1,
        name: 'Standard',
        description: 'Best suited for small teams',
        price: 8.99,
        pricePerAddedUser: 3.99,
        perks: {
            space: 1,
            fileRecovery: 30,
            unlimitedHistory: false,
        }
    },
    {
        id: 2,
        name: 'Professional',
        description: 'Best suited for large teams and enterprises',
        price: 12.99,
        pricePerAddedUser: 6.99,
        perks: {
            space: 10,
            fileRecovery: 90,
            unlimitedHistory: true,
        }
    }
]


export default function PricingCard() {

    const [selected, setSelected] = useState(plans[0])

    return (
        <div className="py-4 px-4 lg:px-8 bg-white w-96 md:w-2/4 lg:w-2/6 shadow-xl rounded-xl">
            <div className="flex items-center justify-start gap-x-4">
                <h1 className="text-xl font-bold text-slate-800">Subscription</h1>
                <h4 className="text-xs bg-pink-600 px-2 py-1 text-white rounded-md">✨ 50% Off</h4>
            </div>

            <div className="mt-4">
                <h2 className="text-md font-semibold text-slate-700">Payment plan</h2>
                <p className="-mt-1 text-sm font-normal text-slate-400">Save more on annual plans</p>
            </div>

            <div className="mt-4 w-full border-t-2 border-slate-200/40" aria-hidden="true" />

            <div className="w-full px-2 py-4">

                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className='sr-only'>Plans</RadioGroup.Label>
                    <div className='flex flex-col gap-y-4'>
                        {plans.map(plan => (
                            <RadioGroup.Option
                                key={plan.id}
                                value={plan}
                                className={({ active, checked }) =>
                                    `${active ? 'border-2 border-pink-600' : 'bg-white'} 
                                ${checked ? 'shadow' : 'shadow-none'} border-2 rounded-lg p-2`
                                }>
                                {({ active, checked }) => (
                                    <div className='flex items-start gap-x-2'>

                                   
                                        {checked && (
                                            <div className="shrink-0 text-pink-600">
                                                <RecordCircleFill className="h-6 w-6" aria-hidden='true' />
                                            </div>
                                        )}

                                        {!checked && (
                                            <div className="shrink-0 text-slate-100">
                                                <CircleFill className="h-6 w-6" aria-hidden='true' />
                                            </div>
                                        )}
                                    

                                        <div className='w-full'>
                                            <div className="flex items-center justify-between text-sm text-slate-900">
                                                <RadioGroup.Label as='h1'className='font-semibold'> {plan.name}
                                                </RadioGroup.Label>

                                                <RadioGroup.Description as='h1'  className='font-medium'>
                                                    $ {plan.price}
                                                </RadioGroup.Description>
                                            </div>

                                            <RadioGroup.Description as='p' className="text-xs md:text-sm text-slate-500 font-normal">
                                                {plan.description}
                                            </RadioGroup.Description>

                                            <div className='my-3'>
                                                <div className="flex items-center gap-x-2">
                                                    <Check className='w-4 h-4 text-pink-600' />
                                                    <p className='text-sm text-slate-700'>{plan.perks.space}TB of space</p>
                                                </div>

                                                <div className="flex items-center gap-x-2">
                                                    <Check className='w-4 h-4 text-pink-600' />
                                                    <p className='text-sm text-slate-700'>{plan.perks.fileRecovery} days of file recovery</p>
                                                </div>

                                                <div className="flex items-center gap-x-2">
                                                    <Check className='w-4 h-4 text-pink-600' />
                                                    <p className='text-sm text-slate-700'>{plan.perks.unlimitedHistory ? 'Unlimited undo history' : 'Limited undo history'}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}

                            </RadioGroup.Option>
                        ))}

                    </div>

                </RadioGroup>

            </div>

        </div>
    )
}