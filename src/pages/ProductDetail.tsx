import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Download, Star, Shield, FileText } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCart()
  
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link to="/products" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <Download className="w-5 h-5" />
              <span>{product.downloads} downloads</span>
            </div>
          </div>

          <p className="text-gray-600 text-lg mb-8">{product.description}</p>

          {/* File Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              File Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-500">Format:</span>
                <p className="font-medium">{product.fileFormat}</p>
              </div>
              <div>
                <span className="text-gray-500">File Size:</span>
                <p className="font-medium">{product.fileSize}</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Price and Purchase */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-3xl font-bold text-primary-600">${product.price}</span>
                <p className="text-gray-500">One-time purchase</p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center mb-4"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>

            <div className="flex items-center justify-center text-gray-500 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Secure payment and instant download
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail