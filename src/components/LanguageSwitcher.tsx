import Link from 'next/link'
import { useTranslation } from '@/app/i18n'

export default async function LanguageSwitcher({ lng }) {
  const { t, i18n } = await useTranslation(lng)
  const otherLng = lng === 'ar' ? 'en' : 'ar'
  const otherLngText = lng === 'ar' ? 'English' : 'العربية'
  
  return (
    <div className="language-switcher">
      <Link 
        href={`/${otherLng}`} 
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
      >
        {otherLngText}
      </Link>
    </div>
  )
}
