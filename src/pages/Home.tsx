import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Shield, Zap, Layers } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useLanguage } from '../context/LanguageContext'

const Home: React.FC = () => {
  const { t } = useLanguage()
  const featuredProducts = products.slice(0, 3)

  return (
    <div>
      {/* Hero Section with Professional Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6">
              <Layers className="w-4 h-4 mr-2" />
              Professional CAD Marketplace
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t('home.hero.title')}
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {t('home.hero.subtitle')}
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('home.hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                {t('home.hero.browse')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/stair-design" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm">
                Explore Stair Design
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t('home.features.instant.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.features.instant.desc')}
              </p>
            </div>

            <div className="group text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t('home.features.quality.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.features.quality.desc')}
              </p>
            </div>

            <div className="group text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t('home.features.professional.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.features.professional.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stair Design Showcase */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized Stair Design Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive stair design library with detailed plans, CNC files, and 3D models
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Design Packages</h3>
                    <p className="text-gray-600">Each stair design includes architectural drawings, 3D models, CNC cutting files, and assembly instructions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Building Code Compliant</h3>
                    <p className="text-gray-600">All designs meet international building codes and safety standards for residential and commercial use.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Ready</h3>
                    <p className="text-gray-600">Precision-engineered files ready for CNC machining, laser cutting, and traditional woodworking.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/stair-design" 
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Stair Designs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Spiral Staircase" 
                  className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
                <img 
                  src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Modern Floating Stairs" 
                  className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.featured.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.featured.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-primary inline-flex items-center">
              {t('home.featured.viewAll')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">10,000+</div>
              <div className="text-blue-200 text-lg">CAD Files</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">5,000+</div>
              <div className="text-blue-200 text-lg">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-blue-200 text-lg">Uptime</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-blue-200 text-lg">Categories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home