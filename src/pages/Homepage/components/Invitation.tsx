import { config } from '@config'
import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { IconNames } from '@/enums'
import { cn } from '@/theme/utils'
import { UiContainer, UiIcon } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function Invitation({ ...rest }: Props) {
  const { t } = useTranslation()

  return (
    <div {...rest} className={cn('py-10 sm:py-20')}>
      <UiContainer>
        <div className='flex flex-col items-center text-center'>
          <h3 className={cn('section-title')}>{t('invitation.title')}</h3>

          <a
            className={cn(
              'flex gap-2 items-center bg-primary-base py-4 px-10 rounded-full text-body1 font-bold',
            )}
            href={config.DISCORD_LINK}
            target='_blank'
            rel='noreferrer'
          >
            <UiIcon name={IconNames.Discord} className={cn('size-6')} />
            {t('invitation.invitation-btn')}
          </a>
        </div>
      </UiContainer>
    </div>
  )
}
