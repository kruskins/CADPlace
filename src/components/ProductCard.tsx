import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Star, Download } from 'lucide-react'
import { Product } from '../data/products'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../context/LanguageContext'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart()
  const { t } = useLanguage()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
  }

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="card group-hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
            {product.category}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviews} {t('product.reviews')})</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <Download className="w-4 h-4" />
              <span className="text-sm">{product.downloads} {t('product.downloads')}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">{product.fileFormat}</span>
            <span className="text-sm text-gray-500">{product.fileSize}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary-600">
              ${product.price}
            </span>
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-1 bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg transition-colors duration-200"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm">{t('product.addToCart')}</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard