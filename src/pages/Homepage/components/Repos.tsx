import { HTMLAttributes } from 'react'

import { UiContainer } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function Repos({ ...rest }: Props) {
  return (
    <div {...rest}>
      <UiContainer>REPOS</UiContainer>
    </div>
  )
}
