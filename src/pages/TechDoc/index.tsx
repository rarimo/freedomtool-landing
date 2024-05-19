import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { RoutePaths } from '@/enums'
import anonDoc from '@/localization/resources/AnonDoc-en.md'
import { UiContainer, UiMarkdown } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement> & MotionProps

export default function TechDoc({ ...rest }: Props) {
  const { t } = useTranslation()

  return (
    <motion.div {...rest}>
      <UiContainer>
        <NavLink to={RoutePaths.Root}>{t('tech-doc.back-link')}</NavLink>

        <UiMarkdown source={anonDoc} />
      </UiContainer>
    </motion.div>
  )
}
