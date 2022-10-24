import { useRouter } from 'next/router'
import { FC } from 'react'
import { IntlProvider, ReactIntlErrorCode } from 'react-intl'
import pino from 'pino'
import en from '../../../../../public/static/locales/en-US.json'

const logger = pino({
  name: 'LANGUAGE_PROVIDER',
  enabled: process.env.LOG_LANGUAGE_PROVIDER === 'true',
  prettyPrint: {
    translateTime: 'SYS:standard',
    ignore: 'pid,hostname,time',
  },
})

const LanguageProvider: FC = ({ children }) => {
  const { locale, defaultLocale } = useRouter()

  const languages = {
    'en-US': en,
  }

  const currentLocale = locale ?? defaultLocale ?? ('en-US' as any)

  // TODO memo currentLocale & languages
  // console.log('🎯🎃🎃🎃 currentLocale', ramin[currentLocale])

  return (
    <IntlProvider
      locale={currentLocale}
      // @ts-ignore TODO check why????
      messages={languages[currentLocale] as any}
      onError={(err) => {
        // TODO check only log on DEV env
        if (err.code === ReactIntlErrorCode.MISSING_TRANSLATION) {
          // @ts-ignore TODO on remove this ignore
          return logger.warn({ message: err.message }, '[MISSING_TRANSLATION]')
        }
        logger.error({ type: ReactIntlErrorCode[err.code], ...err }, '[TRANSLATION]')
      }}
    >
      {children}
    </IntlProvider>
  )
}

export default LanguageProvider
