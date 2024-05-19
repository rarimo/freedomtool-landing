import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { RoutePaths } from '@/enums'
import { cn } from '@/theme/utils'
import { UiContainer, UiIconLink } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function Whitepaper({ ...rest }: Props) {
  const { t } = useTranslation()

  return (
    <div {...rest} className={cn('pb-20')}>
      <UiContainer>
        <div
          className={cn(
            'flex flex-col items-center text-center max-w-[900px] mx-auto',
          )}
        >
          <h3 className={cn('text-h3 text-center mb-[58px]')}>
            {t('whitepaper.title')}
          </h3>

          <div className={cn('flex flex-col text-center')}>
            <span className={cn('text-body1 text-center whitespace-pre-line')}>
              {t('whitepaper.text')}
            </span>
          </div>

          <UiIconLink
            className={cn('self-center mt-4')}
            route={RoutePaths.techDoc}
          >
            {t('whitepaper.link')}
          </UiIconLink>
        </div>
      </UiContainer>
    </div>
  )
}
