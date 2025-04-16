import { useTranslation } from '@/app/i18n'
import Link from 'next/link'

export default async function ChapterPage({
  params: { lng, chapterId }
}) {
  const { t } = await useTranslation(lng)
  
  // Get chapter title from translations
  const chapterTitle = t(`chapters.${chapterId}`)
  
  // Sample chapter content - in a real implementation, this would come from a database or content files
  const chapterContent = {
    ar: {
      chapter1: `
        <h1>بولدينون</h1>
        <p>البولدينون هو ستيرويد ابتنائي يستخدم لزيادة كتلة العضلات وتحسين القوة البدنية. يعرف أيضًا باسم إيكويبويز أو إيكويبولين.</p>
        <h2>الاستخدامات</h2>
        <p>يستخدم البولدينون بشكل أساسي لـ:</p>
        <ul>
          <li>زيادة كتلة العضلات النحيلة</li>
          <li>تحسين القوة والأداء البدني</li>
          <li>زيادة إنتاج خلايا الدم الحمراء</li>
          <li>تعزيز الشهية</li>
        </ul>
        <h2>الجرعات المناسبة</h2>
        <p>تتراوح الجرعات النموذجية للبولدينون بين 200-600 ملغ أسبوعيًا، مقسمة على حقنتين أو ثلاث حقن. يوصى بدورة تتراوح بين 8-12 أسبوعًا.</p>
        <h2>الآثار الجانبية المحتملة</h2>
        <p>قد تشمل الآثار الجانبية للبولدينون:</p>
        <ul>
          <li>زيادة ضغط الدم</li>
          <li>احتباس الماء</li>
          <li>زيادة نمو الشعر في الجسم</li>
          <li>تثبيط إنتاج هرمون التستوستيرون الطبيعي</li>
        </ul>
      `,
      chapter2: `
        <h1>تستوستيرون</h1>
        <p>التستوستيرون هو الهرمون الذكري الرئيسي في الجسم، ويلعب دورًا أساسيًا في تطوير العضلات وزيادة القوة.</p>
        <h2>الأنواع الرئيسية</h2>
        <p>يتوفر التستوستيرون في عدة أشكال:</p>
        <ul>
          <li>تستوستيرون إينانثات</li>
          <li>تستوستيرون سيبيونات</li>
          <li>تستوستيرون بروبيونات</li>
          <li>تستوستيرون أندكانوات</li>
        </ul>
        <h2>الجرعات المناسبة</h2>
        <p>تتراوح الجرعات النموذجية للتستوستيرون بين 300-500 ملغ أسبوعيًا للمبتدئين، وقد تصل إلى 500-1000 ملغ أسبوعيًا للمتقدمين.</p>
      `
    },
    en: {
      chapter1: `
        <h1>Boldenone</h1>
        <p>Boldenone is an anabolic steroid used to increase muscle mass and improve physical strength. It is also known as Equipoise or Equibolin.</p>
        <h2>Uses</h2>
        <p>Boldenone is primarily used for:</p>
        <ul>
          <li>Increasing lean muscle mass</li>
          <li>Improving strength and physical performance</li>
          <li>Increasing red blood cell production</li>
          <li>Enhancing appetite</li>
        </ul>
        <h2>Appropriate Dosages</h2>
        <p>Typical dosages for Boldenone range from 200-600 mg weekly, divided into two or three injections. A cycle of 8-12 weeks is recommended.</p>
        <h2>Potential Side Effects</h2>
        <p>Side effects of Boldenone may include:</p>
        <ul>
          <li>Increased blood pressure</li>
          <li>Water retention</li>
          <li>Increased body hair growth</li>
          <li>Suppression of natural testosterone production</li>
        </ul>
      `,
      chapter2: `
        <h1>Testosterone</h1>
        <p>Testosterone is the primary male hormone in the body, playing a crucial role in muscle development and strength increase.</p>
        <h2>Main Types</h2>
        <p>Testosterone is available in several forms:</p>
        <ul>
          <li>Testosterone Enanthate</li>
          <li>Testosterone Cypionate</li>
          <li>Testosterone Propionate</li>
          <li>Testosterone Undecanoate</li>
        </ul>
        <h2>Appropriate Dosages</h2>
        <p>Typical dosages for Testosterone range from 300-500 mg weekly for beginners, and may reach 500-1000 mg weekly for advanced users.</p>
      `
    }
  }
  
  // Get content for the current chapter and language
  const content = chapterContent[lng]?.[chapterId] || 
    `<p>${lng === 'ar' ? 'محتوى هذا الفصل قيد الإعداد' : 'Content for this chapter is under development'}</p>`
  
  return (
    <div className="chapter-page max-w-4xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <Link 
          href={`/${lng}`}
          className="text-primary hover:underline"
        >
          {lng === 'ar' ? '← العودة إلى الصفحة الرئيسية' : '← Back to Home'}
        </Link>
      </div>
      
      <article className="prose dark:prose-invert lg:prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
      
      <div className="mt-12 flex justify-between">
        <Link 
          href={`/${lng}`}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {lng === 'ar' ? 'العودة إلى قائمة الفصول' : 'Back to Chapter List'}
        </Link>
      </div>
    </div>
  )
}
