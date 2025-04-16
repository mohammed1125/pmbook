import { useTranslation } from '../i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import BookCover from '@/components/BookCover'
import ChapterList from '@/components/ChapterList'

export default async function Home({
  params: { lng }
}) {
  const { t } = await useTranslation(lng)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 rtl:text-right">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            {t('title')}
          </h1>
          <LanguageSwitcher lng={lng} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <BookCover lng={lng} />
          <div className="flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              {t('subtitle')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t('introduction')}
            </p>
          </div>
        </div>
        
        <ChapterList lng={lng} />
      </div>
      
      <footer className="mt-12 w-full text-center text-gray-500">
        {t('footer')}
      </footer>
    </main>
  )
}
