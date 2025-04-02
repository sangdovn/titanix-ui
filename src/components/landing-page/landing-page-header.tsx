'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useSidebar } from '../ui/sidebar'
import { LandingPageSidebar } from './landing-page-sidebar'

const navItems = [
  { name: 'Demo', url: '/demo' },
  { name: 'Pricing', url: '/pricing' },
  { name: 'Blog', url: '/blog' },
]

export function LandingPageHeader() {
  const { isMobile } = useSidebar()

  return (
    <header className="sticky inset-x-0 top-0 h-16 w-full border-b">
      <div className="mx-auto flex h-full w-full items-center justify-between px-2 md:max-w-7xl">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <Image src="/titanix.png" alt="logo" width={36} height={36} />
            <h1 className="text-2xl font-bold">Titanix</h1>
          </div>
          <nav className="hidden gap-2 md:flex">
            {navItems.map((item) => (
              <Link key={item.url} href={item.url}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {isMobile ? (
          <LandingPageSidebar />
        ) : (
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
