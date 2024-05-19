import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/theme/utils'
import { UiContainer, UiIconLink } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement>

export default function Repos({ ...rest }: Props) {
  const { t } = useTranslation()

  const decentralizedIdentificationProcessLinks = [
    {
      title: 'Passport ZK Circuits ',
      href: 'https://github.com/rarimo/passport-zk-circuits',
    },
    {
      title: 'Voting Contracts',
      href: 'https://github.com/rarimo/voting-contracts',
    },
    {
      title: 'IOS App',
      href: 'https://github.com/rarimo/FreedomTool',
    },
    {
      title: 'Android App',
      href: 'https://github.com/rarimo/FreedomToolAndroid',
    },
    {
      title: 'Identity Provider',
      href: 'https://github.com/rarimo/passport-identity-provider',
    },
  ]

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const independentlyFormedVoterAllowlist = [
    {
      title: 'Uniswap-v3-core',
      href: '#',
    },
    {
      title: 'Uniswap-v3-sdk',
      href: '#',
    },
  ]

  return (
    <div {...rest} className={cn('py-20')}>
      <UiContainer>
        <div id='oss-repos-wrp' className={cn('flex flex-col text-center')}>
          <h3 id='oss-repos' className={cn('text-h3 text-center mb-[58px]')}>
            {t('repos.title')}
          </h3>

          <div className={cn('flex justify-center gap-[150px] w-full')}>
            <div className={cn('flex flex-col gap-8')}>
              <div
                className={cn(
                  'flex text-left flex-col items-center gap-3',
                  'sm:items-start',
                )}
              >
                {decentralizedIdentificationProcessLinks.map((el, idx) => (
                  <UiIconLink
                    key={idx}
                    href={el.href}
                    className={cn('text-body2')}
                  >
                    {el.title}
                  </UiIconLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </UiContainer>
    </div>
  )
}
