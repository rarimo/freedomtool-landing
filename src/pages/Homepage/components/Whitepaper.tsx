import { HTMLAttributes } from 'react'

import { UiContainer } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function Whitepaper({ ...rest }: Props) {
  return (
    <div {...rest}>
      <UiContainer>WHITEPAPER</UiContainer>
    </div>
  )
}
