import { HTMLAttributes } from 'react'

import { IconNames } from '@/enums'
import { cn } from '@/theme/utils'

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  name: IconNames
}

export default function UiIcon({ name, ...rest }: Props) {
  return (
    <svg
      {...rest}
      className={cn(
        rest.className,
        'flex items-center justify-center pointer-events-none',
      )}
      aria-hidden='true'
    >
      <use href={`#${name}-icon`} />
    </svg>
  )
}
