import { AnimatePresence } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { Outlet } from 'react-router-dom'

import { cn } from '@/theme/utils'
import { UiContainer, UiNavbar } from '@/ui'

export default function MainLayout({
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className={cn(rest.className, 'overflow-x-hidden')}>
      <UiContainer>
        <UiNavbar />
      </UiContainer>

      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </div>
  )
}
