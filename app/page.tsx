import Image from 'next/image'
import PricingCard from './components/PricingCard'

export default function Home() {
  return (
    <>
      <div className="m-0 max-w-full w-full h-screen flex items-center justify-center bg-slate-200">
        <PricingCard />

      </div>
    </>
  )
}
