import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { IconNames } from '@/enums'
import { cn } from '@/theme/utils'
import { UiContainer, UiIcon } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function Invitation({ ...rest }: Props) {
  const { t } = useTranslation()

  return (
    <div {...rest}>
      <UiContainer>
        <div className='flex flex-col items-center text-center'>
          <h3 className=''>{t('invitation.title')}</h3>

          <a
            className={cn('flex gap-2 items-center bg-primary-base')}
            href={'config.DISCORD_LINK'}
          >
            <UiIcon name={IconNames.Discord} className={cn('size-4')} />
            {t('invitation.invitation-btn')}
          </a>
        </div>
      </UiContainer>
    </div>
  )
}
