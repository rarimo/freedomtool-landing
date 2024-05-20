import { ThemeConfig } from 'tailwindcss/types/config'

export const fontSize: ThemeConfig['fontSize'] = {
  h1: ['36px', { lineHeight: '48px', fontWeight: '400' }],
  h2: ['60px', { lineHeight: '66px', fontWeight: '700' }], // not configured
  h3: ['28px', { lineHeight: '28px', fontWeight: '700' }],
  h4: ['32px', { lineHeight: '40px', fontWeight: '700' }], // not configured
  h5: ['24px', { lineHeight: '30px', fontWeight: '700' }], // not configured
  h6: ['20px', { lineHeight: '26px', fontWeight: '700' }], // not configured

  subtitle1: ['20px', { lineHeight: '20px', fontWeight: '500' }],
  subtitle2: ['20px', { lineHeight: '26px', fontWeight: '600' }], // not configured
  subtitle3: ['16px', { lineHeight: '20px', fontWeight: '600' }], // not configured
  subtitle4: ['14px', { lineHeight: '18px', fontWeight: '600' }], // not configured

  body1: [
    '20px',
    { lineHeight: '26px', fontWeight: '400', letterSpacing: '0.02em' },
  ],
  body2: [
    '14px',
    { lineHeight: '18px', fontWeight: '400', letterSpacing: '0.02em' },
  ],
  // not configured
  body3: [
    '14px',
    { lineHeight: '18px', fontWeight: '400', letterSpacing: '0.02em' },
  ],

  // not configured
  overline1: [
    '14px',
    { lineHeight: '18px', fontWeight: '700', letterSpacing: '0.04em' },
  ],
  // not configured
  overline2: [
    '12px',
    { lineHeight: '16px', fontWeight: '700', letterSpacing: '0.04em' },
  ],
  // not configured
  caption1: ['14px', { lineHeight: '18px', fontWeight: '400' }],

  // not configured
  'button-medium': ['14px', { lineHeight: '18px', fontWeight: '500' }],
  // not configured
  'button-large': ['16px', { lineHeight: '20px', fontWeight: '500' }],

  // raw
  'sm-normal': ['14px', { lineHeight: '18px', fontWeight: '400' }],
  // not configured
  'lg-medium': [
    '20px',
    { lineHeight: '26px', fontWeight: '500', letterSpacing: '0.02em' },
  ],
  // not configured
  'md-medium': [
    '18px',
    { lineHeight: '26px', fontWeight: '500', letterSpacing: '0.02em' },
  ],
}

export const fontFamily: ThemeConfig['fontFamily'] = {
  primary: 'Roboto Mono',
  secondary: 'Oxygen Mono',
  tertiary: 'Roboto Slab',
}
