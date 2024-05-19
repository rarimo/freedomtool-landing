import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { IconNames, RoutePaths } from '@/enums'
import anonDoc from '@/localization/resources/AnonDoc-en.md'
import { cn } from '@/theme/utils'
import { UiContainer, UiIcon, UiMarkdown } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement> & MotionProps

export default function TechDoc({ ...rest }: Props) {
  const { t } = useTranslation()

  return (
    <motion.div {...rest}>
      <UiContainer className={cn('flex flex-col')}>
        <NavLink
          to={RoutePaths.Root}
          className={cn(
            'flex gap-2 items-center border-b-2 border-black self-start mb-16',
          )}
        >
          <UiIcon name={IconNames.ArrowLeft} className='size-4' />
          <span className=''>{t('tech-doc.back-link')}</span>
        </NavLink>

        <UiMarkdown source={anonDoc} />
      </UiContainer>
    </motion.div>
  )
}
