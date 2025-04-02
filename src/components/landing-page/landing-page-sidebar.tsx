'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { name: 'Demo', href: '/demo' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
]

export function LandingPageSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-h-dvh min-w-dvw rounded-none p-0 [&>button]:hidden">
        <DialogTitle className="hidden"></DialogTitle>
        <div className="flex flex-col items-center justify-center px-2">
          <div className="inset-x-0 top-0 flex h-16 w-full items-center justify-between">
            <div>
              <Image src="/titanix.png" alt="logo" width={36} height={36} />
            </div>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                <X />
              </Button>
            </DialogClose>
          </div>
          <div className="flex w-full flex-1 flex-col items-start justify-start gap-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 * (index + 1),
                  ease: 'easeIn',
                }}
                className="w-full border-b py-2"
              >
                <Link
                  href={item.href}
                  className="hover:text-primary text-xl font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <DialogFooter className="p-4">
            <div className="flex w-full flex-row items-center justify-between gap-4">
              <Button className="flex-1 cursor-pointer" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button className="flex-1 cursor-pointer" asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
