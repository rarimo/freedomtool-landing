import { HTMLAttributes } from 'react'

import { UiContainer } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function HeroBanner({ ...rest }: Props) {
  return (
    <div {...rest}>
      <UiContainer>HERO BANNER</UiContainer>
    </div>
  )
}
