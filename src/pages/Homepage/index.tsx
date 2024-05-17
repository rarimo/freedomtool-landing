import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

import { cn } from '@/theme/utils'
import { UiContainer, UiDivider } from '@/ui'

import { HeroBanner, HowTo, Invitation, Repos, Whitepaper } from './components'

type Props = HTMLAttributes<HTMLDivElement> & MotionProps

export default function Homepage({ ...rest }: Props) {
  return (
    <motion.div {...rest} className={cn(rest.className, '')}>
      <HeroBanner className={cn('max-w-full w-full')} />

      <Whitepaper className={cn('max-w-full w-full')} />

      <UiContainer>
        <UiDivider />
      </UiContainer>

      <HowTo className={cn('max-w-full w-full')} />

      <UiContainer>
        <UiDivider />
      </UiContainer>

      <Repos className={cn('max-w-full w-full')} />

      <UiContainer>
        <UiDivider />
      </UiContainer>

      <Invitation className={cn('max-w-full w-full')} />
    </motion.div>
  )
}
