import { cn } from '@/theme/utils'

export default function UiDivider() {
  return (
    <div className={cn('w-full')}>
      <img
        className={cn('object-center object-cover w-full')}
        src='/images/divider.svg'
        alt=''
      />
    </div>
  )
}
