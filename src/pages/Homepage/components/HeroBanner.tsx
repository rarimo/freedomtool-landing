import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/theme/utils'
import { UiContainer, UiDivider } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function HeroBanner({ ...rest }: Props) {
  const { t } = useTranslation()

  return (
    <div
      {...rest}
      className={cn(
        rest.className,
        "bg-[url('/images/hero-banner-bg.png')] bg-no-repeat bg-cover",
      )}
    >
      <UiContainer>
        <div className={cn('flex flex-col items-center text-center gap-15')}>
          {[t('hero-banner.title-part-1'), t('hero-banner.title-part-2')].map(
            (el, idx) => (
              <span key={idx} className={cn('text-h3', 'lg:max-w-[700px]')}>
                {el}
              </span>
            ),
          )}
        </div>

        <div className={cn('flex flex-col gap-6 items-end')}>
          <span className='hero-banner__signature'>
            {t('hero-banner.signature')}
          </span>
          <UiDivider />
        </div>
      </UiContainer>
    </div>
  )
}
