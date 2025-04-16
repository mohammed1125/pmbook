import { languages } from '../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng }
}) {
  return (
    <html lang={lng} dir={lng === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${lng === 'ar' ? 'font-arabic' : 'font-sans'}`}>
        {children}
      </body>
    </html>
  )
}
