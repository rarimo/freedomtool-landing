import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/theme/utils'
import { UiContainer, UiDivider } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function HeroBanner({ ...rest }: Props) {
  const { t } = useTranslation()

  return (
    <div {...rest} className={cn(rest.className, 'pb-20')}>
      <UiContainer className={cn('relative')}>
        <img
          className={cn(
            'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none scale-125 -z-10 opacity-75',
          )}
          src='/images/hero-banner-bg.png'
          alt='decor'
        />
        <h1
          className={cn(
            'flex flex-col items-center text-center gap-15 mx-auto z-10',
            'py-15 tracking-[0.095px] max-w-[300px]',
            'sm:text-h1 sm:max-w-[775px]',
            'lg:py-40',
          )}
        >
          {[t('hero-banner.title-part-1'), t('hero-banner.title-part-2')].map(
            (el, idx) => (
              <span key={idx}>{el}</span>
            ),
          )}
        </h1>

        <div className={cn('flex flex-col gap-6 items-end')}>
          <span
            className={cn(
              'text-[16px] italic -tracking-[1.04px]',
              'sm:text-[26px]',
            )}
          >
            {t('hero-banner.signature')}
          </span>
          <UiDivider />
        </div>
      </UiContainer>
    </div>
  )
}
