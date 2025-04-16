import Link from 'next/link'
import { useTranslation } from '@/app/i18n'

export default async function ChapterList({ lng }) {
  const { t } = await useTranslation(lng)
  
  const chapters = Object.keys(t('chapters', { returnObjects: true }))
  
  return (
    <div className="chapter-list">
      <h2 className="text-2xl font-bold mb-6">{lng === 'ar' ? 'الفصول' : 'Chapters'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((chapterKey) => (
          <Link 
            key={chapterKey}
            href={`/${lng}/chapters/${chapterKey}`}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="font-semibold text-lg mb-2">{t(`chapters.${chapterKey}`)}</div>
            <div className="text-sm text-gray-500">{lng === 'ar' ? 'اضغط للقراءة' : 'Click to read'}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
