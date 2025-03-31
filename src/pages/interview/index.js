import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import { useState } from 'react';

export default function Interview() {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState(null);
  
  // Toggle section expansion
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Define the question sections from translations
  const sections = [
    {
      id: 'personal',
      title: t('interview_page.personal_questions_title'),
      description: t('interview_page.personal_questions_desc'),
      questions: [
        {
          id: 1,
          question: t('interview_page.question1'),
          answer: t('interview_page.answer1'),
          tip: t('interview_page.tip1'),
          studentHelp: t('interview_page.student_help1') // New field for student help
        },
        {
          id: 2,
          question: t('interview_page.question2'),
          answer: t('interview_page.answer2'),
          tip: t('interview_page.tip2'),
          studentHelp: t('interview_page.student_help2') // New field for student help
        },
        {
          id: 3,
          question: t('interview_page.question3'),
          answer: t('interview_page.answer3'),
          tip: t('interview_page.tip3'),
          studentHelp: t('interview_page.student_help3') // New field for student help
        },
        {
          id: 4,
          question: t('interview_page.question4'),
          answer: t('interview_page.answer4'),
          tip: t('interview_page.tip4'),
          studentHelp: t('interview_page.student_help4') // New field for student help
        }
      ]
    },
    {
      id: 'motivation',
      title: t('interview_page.motivation_questions_title'),
      description: t('interview_page.motivation_questions_desc'),
      questions: [
        {
          id: 5,
          question: t('interview_page.question5'),
          answer: t('interview_page.answer5'),
          tip: t('interview_page.tip5'),
          studentHelp: t('interview_page.student_help5') // New field for student help
        },
        {
          id: 6,
          question: t('interview_page.question6'),
          answer: t('interview_page.answer6'),
          tip: t('interview_page.tip6'),
          studentHelp: t('interview_page.student_help6') // New field for student help
        },
        {
          id: 7,
          question: t('interview_page.question7'),
          answer: t('interview_page.answer7'),
          tip: t('interview_page.tip7'),
          studentHelp: t('interview_page.student_help7') // New field for student help
        }
      ]
    },
    {
      id: 'practical',
      title: t('interview_page.practical_questions_title'),
      description: t('interview_page.practical_questions_desc'),
      questions: [
        {
          id: 8,
          question: t('interview_page.question8'),
          answer: t('interview_page.answer8'),
          tip: t('interview_page.tip8'),
          studentHelp: t('interview_page.student_help8') // New field for student help
        },
        {
          id: 9,
          question: t('interview_page.question9'),
          answer: t('interview_page.answer9'),
          tip: t('interview_page.tip9'),
          studentHelp: t('interview_page.student_help9') // New field for student help
        },
        {
          id: 10,
          question: t('interview_page.question10'),
          answer: t('interview_page.answer10'),
          tip: t('interview_page.tip10'),
          studentHelp: t('interview_page.student_help10') // New field for student help
        }
      ]
    },
    {
      id: 'cultural',
      title: t('interview_page.cultural_questions_title'),
      description: t('interview_page.cultural_questions_desc'),
      questions: [
        {
          id: 11,
          question: t('interview_page.question11'),
          answer: t('interview_page.answer11'),
          tip: t('interview_page.tip11'),
          studentHelp: t('interview_page.student_help11') // New field for student help
        },
        {
          id: 12,
          question: t('interview_page.question12'),
          answer: t('interview_page.answer12'),
          tip: t('interview_page.tip12'),
          studentHelp: t('interview_page.student_help12') // New field for student help
        }
      ]
    },
    {
      id: 'closing',
      title: t('interview_page.closing_section_title'),
      description: t('interview_page.closing_section_desc'),
      questions: [
        {
          id: 13,
          question: t('interview_page.question13'),
          answer: t('interview_page.answer13'),
          tip: t('interview_page.tip13'),
          studentHelp: t('interview_page.student_help13') // New field for student help
        },
        {
          id: 14,
          question: t('interview_page.question14'),
          answer: t('interview_page.answer14'),
          tip: t('interview_page.tip14'),
          studentHelp: t('interview_page.student_help14') // New field for student help
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{t('interview_page.title')}</title>
        <meta name="description" content={t('interview_page.intro_text')} />
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
                <a href="/" className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t('header.navigation.home')}
                </a>
                <a href="/curriculum" className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {t('header.navigation.curriculum')}
                </a>
                <a href="/interview" className="border-blue-500 text-blue-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('interview_page.main_title')}</h1>
            
            <div className="bg-white p-6 rounded-lg shadow mb-8">
              <h2 className="text-xl font-semibold mb-2">{t('interview_page.intro_title')}</h2>
              <p className="text-gray-600">{t('interview_page.intro_text')}</p>
            </div>
            
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-lg shadow mb-6 overflow-hidden">
                <div 
                  className="p-4 bg-blue-50 border-b border-blue-100 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(section.id)}
                >
                  <div>
                    <h2 className="text-xl font-semibold text-blue-800">{section.title}</h2>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                  <div className="text-blue-500">
                    {expandedSection === section.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {expandedSection === section.id && (
                  <div className="p-4">
                    {section.questions.map((q) => (
                      <div key={q.id} className="mb-8 border-b border-gray-200 pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                          <div className="md:col-span-2">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">{q.question}</h3>
                            <div className="bg-blue-50 p-3 rounded-md mt-4">
                              <h4 className="text-sm font-medium text-blue-800 mb-1">Beispielantwort:</h4>
                              <p className="text-gray-700">{q.answer}</p>
                            </div>
                          </div>
                          
                          <div className="md:col-span-2">
                            <div className="bg-yellow-50 p-3 rounded-md">
                              <h4 className="text-sm font-medium text-yellow-800 mb-1">Hilfe für Studenten:</h4>
                              <p className="text-gray-700">{q.studentHelp || "Wenn du diese Frage nicht beantworten kannst oder sie missverstanden hast, versuche Folgendes: Bitte um Klärung oder erkläre, dass du die Frage nicht vollständig verstanden hast. Dann kannst du mit einer allgemeineren Antwort beginnen, die sich auf das Thema bezieht."}</p>
                            </div>
                          </div>
                          
                          <div className="md:col-span-1">
                            <div className="bg-green-50 p-3 rounded-md">
                              <h4 className="text-sm font-medium text-green-800 mb-1">Tipp:</h4>
                              <p className="text-gray-700">{q.tip}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="bg-white p-6 rounded-lg shadow mt-8">
              <h2 className="text-xl font-semibold mb-2">{t('interview_page.final_tips_title')}</h2>
              <p className="text-gray-600">{t('interview_page.final_tips')}</p>
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
