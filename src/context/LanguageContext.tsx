import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'en' | 'nl' | 'ru' | 'lv'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.cart': 'Cart',
    'nav.profile': 'Profile',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.logout': 'Logout',
    'nav.search': 'Search CAD files...',
    
    // Home page
    'home.hero.title': 'Premium CAD Files',
    'home.hero.subtitle': 'At Your Fingertips',
    'home.hero.description': 'Discover thousands of high-quality CAD files, 3D models, and design assets created by professional designers and engineers.',
    'home.hero.browse': 'Browse Products',
    'home.hero.getStarted': 'Get Started',
    'home.features.title': 'Why Choose CADPlace?',
    'home.features.subtitle': 'We provide the best platform for discovering and downloading digital design files',
    'home.features.instant.title': 'Instant Downloads',
    'home.features.instant.desc': 'Get immediate access to your purchased files in multiple formats',
    'home.features.quality.title': 'Quality Guaranteed',
    'home.features.quality.desc': 'All files are reviewed and tested to ensure the highest quality standards',
    'home.features.professional.title': 'Professional Grade',
    'home.features.professional.desc': 'Industry-standard CAD files ready for manufacturing and production',
    'home.featured.title': 'Featured Products',
    'home.featured.subtitle': 'Discover our most popular and highest-rated CAD files',
    'home.featured.viewAll': 'View All Products',
    
    // Products page
    'products.title': 'All Products',
    'products.subtitle': 'Discover our complete collection of CAD files and 3D models',
    'products.search': 'Search products...',
    'products.sortName': 'Sort by Name',
    'products.sortPriceLow': 'Price: Low to High',
    'products.sortPriceHigh': 'Price: High to Low',
    'products.sortRating': 'Highest Rated',
    'products.sortDownloads': 'Most Downloaded',
    'products.showing': 'Showing',
    'products.of': 'of',
    'products.noResults': 'No products found',
    'products.noResultsDesc': 'Try adjusting your search or filter criteria',
    
    // Product card
    'product.addToCart': 'Add to Cart',
    'product.downloads': 'downloads',
    'product.reviews': 'reviews',
    
    // Cart
    'cart.title': 'Shopping Cart',
    'cart.clear': 'Clear Cart',
    'cart.empty': 'Your cart is empty',
    'cart.emptyDesc': 'Discover amazing CAD files and start building your collection',
    'cart.browse': 'Browse Products',
    'cart.summary': 'Order Summary',
    'cart.items': 'Items',
    'cart.processing': 'Processing Fee',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.continue': 'Continue Shopping',
    
    // Auth
    'auth.signin': 'Sign in to CADPlace',
    'auth.signup': 'Join CADPlace',
    'auth.email': 'Email address',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm password',
    'auth.fullName': 'Full name',
    'auth.remember': 'Remember me',
    'auth.forgot': 'Forgot your password?',
    'auth.signinButton': 'Sign in',
    'auth.signupButton': 'Create account',
    'auth.createAccount': 'create a new account',
    'auth.existingAccount': 'sign in to your existing account',
    'auth.terms': 'I agree to the Terms of Service and Privacy Policy',
    
    // Footer
    'footer.description': 'Your premier destination for high-quality CAD files and digital design assets. Discover and download professional designs for your projects.',
    'footer.quickLinks': 'Quick Links',
    'footer.categories': 'Categories',
    'footer.copyright': '© 2024 CADPlace. All rights reserved.',
    
    // Categories
    'category.all': 'All',
    'category.chairs': 'Chairs',
    'category.tables': 'Tables',
    'category.stairs': 'Stairs',
    'category.mechanical': 'Mechanical Parts',
    'category.electronics': 'Electronics',
    'category.architecture': 'Architecture',
    'category.aerospace': 'Aerospace',
    'category.kitchen': 'Kitchen'
  },
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Producten',
    'nav.cart': 'Winkelwagen',
    'nav.profile': 'Profiel',
    'nav.login': 'Inloggen',
    'nav.signup': 'Registreren',
    'nav.logout': 'Uitloggen',
    'nav.search': 'Zoek CAD-bestanden...',
    
    // Home page
    'home.hero.title': 'Premium CAD-bestanden',
    'home.hero.subtitle': 'Binnen handbereik',
    'home.hero.description': 'Ontdek duizenden hoogwaardige CAD-bestanden, 3D-modellen en ontwerpassets gemaakt door professionele ontwerpers en ingenieurs.',
    'home.hero.browse': 'Bekijk Producten',
    'home.hero.getStarted': 'Aan de slag',
    'home.features.title': 'Waarom CADPlace kiezen?',
    'home.features.subtitle': 'Wij bieden het beste platform voor het ontdekken en downloaden van digitale ontwerpbestanden',
    'home.features.instant.title': 'Directe Downloads',
    'home.features.instant.desc': 'Krijg onmiddellijke toegang tot uw gekochte bestanden in meerdere formaten',
    'home.features.quality.title': 'Kwaliteit Gegarandeerd',
    'home.features.quality.desc': 'Alle bestanden worden beoordeeld en getest om de hoogste kwaliteitsnormen te waarborgen',
    'home.features.professional.title': 'Professionele Kwaliteit',
    'home.features.professional.desc': 'Industriestandaard CAD-bestanden klaar voor productie en fabricage',
    'home.featured.title': 'Uitgelichte Producten',
    'home.featured.subtitle': 'Ontdek onze meest populaire en best beoordeelde CAD-bestanden',
    'home.featured.viewAll': 'Alle Producten Bekijken',
    
    // Products page
    'products.title': 'Alle Producten',
    'products.subtitle': 'Ontdek onze complete collectie CAD-bestanden en 3D-modellen',
    'products.search': 'Zoek producten...',
    'products.sortName': 'Sorteer op Naam',
    'products.sortPriceLow': 'Prijs: Laag naar Hoog',
    'products.sortPriceHigh': 'Prijs: Hoog naar Laag',
    'products.sortRating': 'Hoogst Beoordeeld',
    'products.sortDownloads': 'Meest Gedownload',
    'products.showing': 'Toont',
    'products.of': 'van',
    'products.noResults': 'Geen producten gevonden',
    'products.noResultsDesc': 'Probeer uw zoek- of filtercriteria aan te passen',
    
    // Product card
    'product.addToCart': 'Toevoegen aan Winkelwagen',
    'product.downloads': 'downloads',
    'product.reviews': 'beoordelingen',
    
    // Cart
    'cart.title': 'Winkelwagen',
    'cart.clear': 'Winkelwagen Legen',
    'cart.empty': 'Uw winkelwagen is leeg',
    'cart.emptyDesc': 'Ontdek geweldige CAD-bestanden en begin uw collectie op te bouwen',
    'cart.browse': 'Bekijk Producten',
    'cart.summary': 'Besteloverzicht',
    'cart.items': 'Items',
    'cart.processing': 'Verwerkingskosten',
    'cart.total': 'Totaal',
    'cart.checkout': 'Doorgaan naar Afrekenen',
    'cart.continue': 'Verder Winkelen',
    
    // Auth
    'auth.signin': 'Inloggen bij CADPlace',
    'auth.signup': 'Lid worden van CADPlace',
    'auth.email': 'E-mailadres',
    'auth.password': 'Wachtwoord',
    'auth.confirmPassword': 'Bevestig wachtwoord',
    'auth.fullName': 'Volledige naam',
    'auth.remember': 'Onthoud mij',
    'auth.forgot': 'Wachtwoord vergeten?',
    'auth.signinButton': 'Inloggen',
    'auth.signupButton': 'Account aanmaken',
    'auth.createAccount': 'een nieuw account aanmaken',
    'auth.existingAccount': 'inloggen op uw bestaande account',
    'auth.terms': 'Ik ga akkoord met de Servicevoorwaarden en Privacybeleid',
    
    // Footer
    'footer.description': 'Uw belangrijkste bestemming voor hoogwaardige CAD-bestanden en digitale ontwerpassets. Ontdek en download professionele ontwerpen voor uw projecten.',
    'footer.quickLinks': 'Snelle Links',
    'footer.categories': 'Categorieën',
    'footer.copyright': '© 2024 CADPlace. Alle rechten voorbehouden.',
    
    // Categories
    'category.all': 'Alle',
    'category.chairs': 'Stoelen',
    'category.tables': 'Tafels',
    'category.stairs': 'Trappen',
    'category.mechanical': 'Mechanische Onderdelen',
    'category.electronics': 'Elektronica',
    'category.architecture': 'Architectuur',
    'category.aerospace': 'Lucht- en Ruimtevaart',
    'category.kitchen': 'Keuken'
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.products': 'Продукты',
    'nav.cart': 'Корзина',
    'nav.profile': 'Профиль',
    'nav.login': 'Войти',
    'nav.signup': 'Регистрация',
    'nav.logout': 'Выйти',
    'nav.search': 'Поиск CAD файлов...',
    
    // Home page
    'home.hero.title': 'Премиум CAD файлы',
    'home.hero.subtitle': 'У вас под рукой',
    'home.hero.description': 'Откройте для себя тысячи высококачественных CAD файлов, 3D моделей и дизайнерских ресурсов, созданных профессиональными дизайнерами и инженерами.',
    'home.hero.browse': 'Просмотр продуктов',
    'home.hero.getStarted': 'Начать',
    'home.features.title': 'Почему выбирают CADPlace?',
    'home.features.subtitle': 'Мы предоставляем лучшую платформу для поиска и загрузки цифровых файлов дизайна',
    'home.features.instant.title': 'Мгновенные загрузки',
    'home.features.instant.desc': 'Получите немедленный доступ к купленным файлам в нескольких форматах',
    'home.features.quality.title': 'Гарантия качества',
    'home.features.quality.desc': 'Все файлы проверяются и тестируются для обеспечения высочайших стандартов качества',
    'home.features.professional.title': 'Профессиональный уровень',
    'home.features.professional.desc': 'Промышленные стандарты CAD файлов готовых для производства',
    'home.featured.title': 'Рекомендуемые продукты',
    'home.featured.subtitle': 'Откройте для себя наши самые популярные и высоко оцененные CAD файлы',
    'home.featured.viewAll': 'Посмотреть все продукты',
    
    // Products page
    'products.title': 'Все продукты',
    'products.subtitle': 'Откройте для себя нашу полную коллекцию CAD файлов и 3D моделей',
    'products.search': 'Поиск продуктов...',
    'products.sortName': 'Сортировать по имени',
    'products.sortPriceLow': 'Цена: от низкой к высокой',
    'products.sortPriceHigh': 'Цена: от высокой к низкой',
    'products.sortRating': 'Самый высокий рейтинг',
    'products.sortDownloads': 'Самые загружаемые',
    'products.showing': 'Показано',
    'products.of': 'из',
    'products.noResults': 'Продукты не найдены',
    'products.noResultsDesc': 'Попробуйте изменить критерии поиска или фильтра',
    
    // Product card
    'product.addToCart': 'Добавить в корзину',
    'product.downloads': 'загрузок',
    'product.reviews': 'отзывов',
    
    // Cart
    'cart.title': 'Корзина покупок',
    'cart.clear': 'Очистить корзину',
    'cart.empty': 'Ваша корзина пуста',
    'cart.emptyDesc': 'Откройте для себя удивительные CAD файлы и начните строить свою коллекцию',
    'cart.browse': 'Просмотр продуктов',
    'cart.summary': 'Сводка заказа',
    'cart.items': 'Товары',
    'cart.processing': 'Плата за обработку',
    'cart.total': 'Итого',
    'cart.checkout': 'Перейти к оформлению',
    'cart.continue': 'Продолжить покупки',
    
    // Auth
    'auth.signin': 'Войти в CADPlace',
    'auth.signup': 'Присоединиться к CADPlace',
    'auth.email': 'Адрес электронной почты',
    'auth.password': 'Пароль',
    'auth.confirmPassword': 'Подтвердите пароль',
    'auth.fullName': 'Полное имя',
    'auth.remember': 'Запомнить меня',
    'auth.forgot': 'Забыли пароль?',
    'auth.signinButton': 'Войти',
    'auth.signupButton': 'Создать аккаунт',
    'auth.createAccount': 'создать новый аккаунт',
    'auth.existingAccount': 'войти в существующий аккаунт',
    'auth.terms': 'Я согласен с Условиями обслуживания и Политикой конфиденциальности',
    
    // Footer
    'footer.description': 'Ваше главное место назначения для высококачественных CAD файлов и цифровых дизайнерских ресурсов. Откройте и загрузите профессиональные дизайны для ваших проектов.',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.categories': 'Категории',
    'footer.copyright': '© 2024 CADPlace. Все права защищены.',
    
    // Categories
    'category.all': 'Все',
    'category.chairs': 'Стулья',
    'category.tables': 'Столы',
    'category.stairs': 'Лестницы',
    'category.mechanical': 'Механические детали',
    'category.electronics': 'Электроника',
    'category.architecture': 'Архитектура',
    'category.aerospace': 'Аэрокосмическая',
    'category.kitchen': 'Кухня'
  },
  lv: {
    // Navigation
    'nav.home': 'Sākums',
    'nav.products': 'Produkti',
    'nav.cart': 'Grozs',
    'nav.profile': 'Profils',
    'nav.login': 'Pieteikties',
    'nav.signup': 'Reģistrēties',
    'nav.logout': 'Iziet',
    'nav.search': 'Meklēt CAD failus...',
    
    // Home page
    'home.hero.title': 'Premium CAD faili',
    'home.hero.subtitle': 'Jūsu rīcībā',
    'home.hero.description': 'Atklājiet tūkstošiem augstas kvalitātes CAD failu, 3D modeļu un dizaina līdzekļu, ko izveidojuši profesionāli dizaineri un inženieri.',
    'home.hero.browse': 'Pārlūkot produktus',
    'home.hero.getStarted': 'Sākt',
    'home.features.title': 'Kāpēc izvēlēties CADPlace?',
    'home.features.subtitle': 'Mēs nodrošinām labāko platformu digitālo dizaina failu atklāšanai un lejupielādei',
    'home.features.instant.title': 'Tūlītējas lejupielādes',
    'home.features.instant.desc': 'Iegūstiet tūlītēju piekļuvi saviem iegādātajiem failiem vairākos formātos',
    'home.features.quality.title': 'Garantēta kvalitāte',
    'home.features.quality.desc': 'Visi faili tiek pārskatīti un testēti, lai nodrošinātu augstākos kvalitātes standartus',
    'home.features.professional.title': 'Profesionāls līmenis',
    'home.features.professional.desc': 'Rūpniecības standarta CAD faili, gatavi ražošanai un izgatavošanai',
    'home.featured.title': 'Ieteiktie produkti',
    'home.featured.subtitle': 'Atklājiet mūsu populārākos un augstāk novērtētos CAD failus',
    'home.featured.viewAll': 'Skatīt visus produktus',
    
    // Products page
    'products.title': 'Visi produkti',
    'products.subtitle': 'Atklājiet mūsu pilno CAD failu un 3D modeļu kolekciju',
    'products.search': 'Meklēt produktus...',
    'products.sortName': 'Kārtot pēc nosaukuma',
    'products.sortPriceLow': 'Cena: no zemākās uz augstāko',
    'products.sortPriceHigh': 'Cena: no augstākās uz zemāko',
    'products.sortRating': 'Augstākais vērtējums',
    'products.sortDownloads': 'Visvairāk lejupielādētie',
    'products.showing': 'Rāda',
    'products.of': 'no',
    'products.noResults': 'Produkti nav atrasti',
    'products.noResultsDesc': 'Mēģiniet pielāgot meklēšanas vai filtra kritērijus',
    
    // Product card
    'product.addToCart': 'Pievienot grozam',
    'product.downloads': 'lejupielādes',
    'product.reviews': 'atsauksmes',
    
    // Cart
    'cart.title': 'Iepirkumu grozs',
    'cart.clear': 'Iztīrīt grozu',
    'cart.empty': 'Jūsu grozs ir tukšs',
    'cart.emptyDesc': 'Atklājiet apbrīnojamus CAD failus un sāciet veidot savu kolekciju',
    'cart.browse': 'Pārlūkot produktus',
    'cart.summary': 'Pasūtījuma kopsavilkums',
    'cart.items': 'Preces',
    'cart.processing': 'Apstrādes maksa',
    'cart.total': 'Kopā',
    'cart.checkout': 'Turpināt uz norēķiniem',
    'cart.continue': 'Turpināt iepirkšanos',
    
    // Auth
    'auth.signin': 'Pieteikties CADPlace',
    'auth.signup': 'Pievienoties CADPlace',
    'auth.email': 'E-pasta adrese',
    'auth.password': 'Parole',
    'auth.confirmPassword': 'Apstiprināt paroli',
    'auth.fullName': 'Pilns vārds',
    'auth.remember': 'Atcerēties mani',
    'auth.forgot': 'Aizmirsi paroli?',
    'auth.signinButton': 'Pieteikties',
    'auth.signupButton': 'Izveidot kontu',
    'auth.createAccount': 'izveidot jaunu kontu',
    'auth.existingAccount': 'pieteikties esošajā kontā',
    'auth.terms': 'Es piekrītu Pakalpojumu noteikumiem un Privātuma politikai',
    
    // Footer
    'footer.description': 'Jūsu galvenā vieta augstas kvalitātes CAD failu un digitālo dizaina līdzekļu iegūšanai. Atklājiet un lejupielādējiet profesionālus dizainus saviem projektiem.',
    'footer.quickLinks': 'Ātrās saites',
    'footer.categories': 'Kategorijas',
    'footer.copyright': '© 2024 CADPlace. Visas tiesības aizsargātas.',
    
    // Categories
    'category.all': 'Visi',
    'category.chairs': 'Krēsli',
    'category.tables': 'Galdi',
    'category.stairs': 'Kāpnes',
    'category.mechanical': 'Mehāniskās daļas',
    'category.electronics': 'Elektronika',
    'category.architecture': 'Arhitektūra',
    'category.aerospace': 'Aerokosmiskā',
    'category.kitchen': 'Virtuve'
  }
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}