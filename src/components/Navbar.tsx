import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, User, Menu, X, Search, Globe } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { useLanguage, Language } from '../context/LanguageContext'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const { user, logout } = useAuth()
  const { itemCount } = useCart()
  const { language, setLanguage, t } = useLanguage()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'nl' as Language, name: 'Nederlands', flag: '🇳🇱' },
    { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
    { code: 'lv' as Language, name: 'Latviešu', flag: '🇱🇻' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">CAD</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CADPlace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('nav.home')}
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('nav.products')}
            </Link>
            <Link to="/stair-design" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Stair Design
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder={t('nav.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 py-1 rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50"
              >
                <Globe className="w-5 h-5" />
                <span className="hidden sm:block text-sm">{currentLanguage?.flag}</span>
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200/50 z-50 backdrop-blur-md">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsLanguageOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-2 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                        language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
                  <User className="w-6 h-6" />
                  <span className="hidden md:block">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-md">
                  <Link to="/profile" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-t-xl transition-colors">
                    {t('nav.profile')}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-b-xl transition-colors"
                  >
                    {t('nav.logout')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  {t('nav.login')}
                </Link>
                <Link to="/register" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                  {t('nav.signup')}
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 py-4 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t('nav.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-16 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2 py-1 rounded-lg text-sm transition-colors"
                >
                  Search
                </button>
              </form>
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t('nav.home')}
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t('nav.products')}
              </Link>
              <Link to="/stair-design" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Stair Design
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar