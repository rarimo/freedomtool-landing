import { Config } from 'tailwindcss'

import {
  animation,
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  keyframes,
  screens,
  spacing,
} from './src/theme/config'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
      fontSize,
      fontFamily,
      borderRadius,
      screens,
      spacing,
      keyframes,
      animation,
    },
  },
  plugins: [],
}

export default config
