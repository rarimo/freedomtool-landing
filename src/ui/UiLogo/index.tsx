import { config } from '@config'
import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

import { RoutePaths } from '@/enums'
import { cn } from '@/theme/utils'

export default function UiLogo({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className={cn('relative flex flex-col', rest.className)}>
      <img src='/branding/logo.svg' alt={config.APP_NAME} />
      <Link
        className='absolute top-0 left-0 w-full h-full'
        to={RoutePaths.Root}
      />
    </div>
  )
}
