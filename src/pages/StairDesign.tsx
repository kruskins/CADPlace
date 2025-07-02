import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Eye, Layers, Ruler, Settings, FileText, Zap, Shield, Star } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

const StairDesign: React.FC = () => {
  const { t } = useLanguage()
  const { addToCart } = useCart()
  const [selectedType, setSelectedType] = useState('all')
  const [selectedComplexity, setSelectedComplexity] = useState('all')

  // Filter stair products
  const stairProducts = products.filter(product => product.category === 'Stairs')

  const stairTypes = [
    { id: 'all', name: 'All Types', icon: Layers },
    { id: 'straight', name: 'Straight Stairs', icon: Ruler },
    { id: 'spiral', name: 'Spiral Stairs', icon: Settings },
    { id: 'l-shaped', name: 'L-Shaped Stairs', icon: FileText },
    { id: 'floating', name: 'Floating Stairs', icon: Zap }
  ]

  const complexityLevels = [
    { id: 'all', name: 'All Levels', color: 'bg-gray-100' },
    { id: 'basic', name: 'Basic', color: 'bg-green-100 text-green-800' },
    { id: 'intermediate', name: 'Intermediate', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'advanced', name: 'Advanced', color: 'bg-red-100 text-red-800' }
  ]

  const features = [
    {
      icon: Download,
      title: 'Multiple Formats',
      description: 'DWG, STEP, STL, and more'
    },
    {
      icon: Ruler,
      title: 'Precise Measurements',
      description: 'Industry-standard dimensions'
    },
    {
      icon: Shield,
      title: 'Building Code Compliant',
      description: 'Meets safety regulations'
    },
    {
      icon: Layers,
      title: 'Detailed Layers',
      description: 'Organized CAD structure'
    }
  ]

  return (
    <div className="min-h-screen">
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
              Professional Stair Design Collection
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Stair Design
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Mastery
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive collection of professional stair designs, from elegant spirals to modern floating stairs. 
              Each design includes detailed plans, CNC files, and 3D models ready for manufacturing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('stair-collection')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm">
                View Design Process
              </button>
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
              Why Choose Our Stair Designs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade designs with everything you need for successful stair construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stair Types Filter */}
      <section id="stair-collection" className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Stair Type</h2>
            <p className="text-xl text-gray-600">Find the perfect design for your project</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stairTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedType === type.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <type.icon className="w-5 h-5" />
                <span>{type.name}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {complexityLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedComplexity(level.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedComplexity === level.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : `${level.color} hover:shadow-md`
                }`}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stair Products Grid */}
      <section className="py-16 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stairProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      {product.category}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-white transition-colors">
                          <Eye className="w-4 h-4 inline mr-2" />
                          Preview
                        </button>
                        <button 
                          onClick={() => addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image
                          })}
                          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                        <span className="text-sm text-gray-400">({product.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">{product.downloads}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{product.fileFormat}</span>
                      <span className="text-sm text-gray-500">{product.fileSize}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        ${product.price}
                      </span>
                      <Link
                        to={`/product/${product.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Perfect Stair?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get instant access to professional stair designs, detailed plans, and manufacturing-ready files.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products?category=Stairs"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse All Stair Designs
            </Link>
            <Link
              to="/register"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StairDesign