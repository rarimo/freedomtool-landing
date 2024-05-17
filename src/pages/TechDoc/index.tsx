import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & MotionProps

export default function TechDoc({ ...rest }: Props) {
  return <motion.div {...rest}>HOMEPAGE</motion.div>
}
