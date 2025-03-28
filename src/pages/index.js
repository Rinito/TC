// Sample index page component
import { useTranslation } from 'react-i18next';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{t('header.title')}</title>
        <meta name="description" content={t('index_page.hero_subtitle')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <a href="/" className="text-xl font-bold text-blue-600">
                  {t('header.title')}
                </a>
              </div>
              <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="/" className="border-blue-500 text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t('header.navigation.home')}
                </a>
                <a href="/curriculum" className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t('header.navigation.curriculum')}
                </a>
                <a href="/interview" className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t('header.navigation.interview')}
                </a>
                <a href="/mock-interviews" className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t('header.navigation.mock_interviews')}
                </a>
                <a href="/blog" className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t('header.navigation.blog')}
                </a>
              </nav>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="language-switcher flex items-center space-x-2">
                {/* Language switcher will be implemented here */}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{t('index_page.hero_title')}</h1>
              <p className="text-xl mb-6">{t('index_page.hero_subtitle')}</p>
              <a href="/curriculum" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                {t('index_page.cta_button')}
              </a>
            </div>
            
            {/* Features section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('index_page.features_title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Feature cards will be implemented here */}
              </div>
            </div>
            
            {/* About section */}
            <div className="mt-12 bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('index_page.about_title')}</h2>
              <p className="text-gray-600">{t('index_page.about_text')}</p>
            </div>
            
            {/* Levels section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('index_page.levels_title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Level cards will be implemented here */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.title')}</h3>
              <p className="text-gray-300">{t('footer.description')}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.navigation_title')}</h3>
              {/* Footer navigation links will be implemented here */}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.contact_title')}</h3>
              <p className="text-gray-300 mb-2">{t('footer.contact_text')}</p>
              <p className="text-gray-300">{t('footer.email')}</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-gray-300 text-center">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
