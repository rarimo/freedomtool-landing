import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { RoutePaths } from '@/enums'
import { cn } from '@/theme/utils'
import { UiContainer, UiIconLink } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function Whitepaper({ ...rest }: Props) {
  const { t } = useTranslation()

  return (
    <div {...rest}>
      <UiContainer>
        <div className={cn('flex flex-col text-center')}>
          <h4 className={cn('text-h4')}>{t('whitepaper.title')}</h4>

          <div className={cn('flex flex-col text-center')}>
            <span className={cn('text-subtitle1')}>{t('whitepaper.text')}</span>

            <span className={cn('text-subtitle1')}>{`* * *`}</span>
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
