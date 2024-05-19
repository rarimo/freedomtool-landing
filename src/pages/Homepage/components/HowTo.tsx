import { HTMLAttributes, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { IconNames } from '@/enums'
import { cn } from '@/theme/utils'
import { UiContainer, UiIcon } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function HowTo({ ...rest }: Props) {
  const { t } = useTranslation()

  const steps = useMemo(
    () => [
      {
        iconName: IconNames.Passport,
        title: t('how-to.step-1-title'),
        description: t('how-to.step-1-desc'),
      },
      {
        iconName: IconNames.Anonymus,
        title: t('how-to.step-2-title'),
        description: t('how-to.step-2-desc'),
      },
      {
        iconName: IconNames.Poll,
        title: t('how-to.step-3-title'),
        description: t('how-to.step-3-desc'),
      },
      {
        iconName: IconNames.Barchart,
        title: t('how-to.step-4-title'),
        description: t('how-to.step-4-desc'),
      },
    ],
    [t],
  )

  return (
    <div {...rest} className={cn('py-20')}>
      <UiContainer>
        <div className={cn('flex flex-col text-center')}>
          <h3 className={cn('text-h3 text-center mb-[58px]')}>
            {t('how-to.title')}
          </h3>

          <div
            className={cn(
              'flex justify-center items-center overflow-hidden w-[clamp(300px,100%,600px)] max-h-[320px] border-[color:var(--border-primary-main)] mx-auto my-[40px] rounded-[16px] border-[1px] border-solid',
            )}
          >
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              className={cn('size-full')}
              controls
              autoPlay={false}
              poster='/images/video-poster.png'
            >
              <source src='/images/how-to.mp4' type='video/mp4' />
            </video>
          </div>

          <div className={cn('flex gap-2')}>
            {steps.map((el, idx) => (
              <div key={idx} className={cn('flex flex-col items-center gap-2')}>
                <div className='flex justify-center relative w-full'>
                  <UiIcon className={cn('size-20')} name={el.iconName} />

                  {idx < steps.length - 1 && (
                    <UiIcon
                      className={cn(
                        'absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 max-w-22',
                      )}
                      name={IconNames.LongArrowRight}
                    />
                  )}
                </div>
                <span className={cn('font-tertiary text-subtitle1 mt-6 mb-4')}>
                  {el.title}
                </span>
                <span className={cn('font-secondary text-body2 mt-auto')}>
                  {el.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </UiContainer>
    </div>
  )
}
