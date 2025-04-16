import Image from 'next/image'
import { useTranslation } from '@/app/i18n'

export default async function BookCover({ lng }) {
  const { t } = await useTranslation(lng)
  
  return (
    <div className="book-cover relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/80 flex flex-col items-center justify-center text-white p-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">PM</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">{t('title')}</h2>
        <p className="text-lg">{t('subtitle')}</p>
      </div>
    </div>
  )
}
