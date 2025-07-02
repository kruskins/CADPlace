import React from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CAD</span>
              </div>
              <span className="text-xl font-bold">CADPlace</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>support@cadplace.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.cart')}
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.profile')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.categories')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Chairs" className="text-gray-300 hover:text-white transition-colors">
                  {t('category.chairs')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=Tables" className="text-gray-300 hover:text-white transition-colors">
                  {t('category.tables')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=Stairs" className="text-gray-300 hover:text-white transition-colors">
                  {t('category.stairs')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=Mechanical Parts" className="text-gray-300 hover:text-white transition-colors">
                  {t('category.mechanical')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer