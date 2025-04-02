'use client'

import Image from 'next/image'
import Link from 'next/link'

export function DashboardHeader() {
  return (
    <div className="sticky inset-x-0 top-0 h-16 border-b">
      <div className="mx-auto flex h-full w-full flex-row items-center justify-between px-2 md:max-w-7xl">
        {/* Left side */}
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="flex flex-row items-center justify-between gap-4">
            <div>
              <Image src="/titanix.png" alt="logo" width={24} height={24} />
            </div>
            <div className="text-2xl font-bold">Titanix</div>
          </div>

          {/* Nav */}
          <nav className="hidden flex-row items-center justify-between gap-2 md:flex">
            <Link href="/demo">Demo</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex flex-row items-center justify-between gap-2"></div>
      </div>
    </div>
  )
}
