import { HTMLAttributes } from 'react'

import { UiContainer } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function HowTo({ ...rest }: Props) {
  return (
    <div {...rest}>
      <UiContainer>HOW TO</UiContainer>
    </div>
  )
}
