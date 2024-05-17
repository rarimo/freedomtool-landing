import { HTMLAttributes } from 'react'

import { cn } from '@/theme/utils'
import { UiLogo } from '@/ui'

export default function UiNavbar({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={cn('flex items-center gap-6 py-8 px-0', rest.className)}
    >
      <UiLogo className='mr-auto' />
    </div>
  )
}
