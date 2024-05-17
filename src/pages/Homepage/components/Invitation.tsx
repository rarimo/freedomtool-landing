import { HTMLAttributes } from 'react'

import { UiContainer } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function Invitation({ ...rest }: Props) {
  return (
    <div {...rest}>
      <UiContainer>INVITATION</UiContainer>
    </div>
  )
}
