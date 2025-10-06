import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { useProductById } from '../hooks/useProductById'

const ProductDetailPage = () => {
  const { id } = useParams()
  const product = useProductById(id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleBack = () => {
    // If there is history, go back, otherwise go to products list
    if (window.history.length > 1) navigate(-1)
    else navigate('/products')
  }

  if (!product) return <div>Product not found</div>

  return (
    <div>
      <button
        onClick={handleBack}
        className="mb-4 inline-flex items-center px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0L3.586 10l4.707-4.707a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back
      </button>

  <div className="grid md:grid-cols-2 gap-6">
      {/* Fixed size container for the image */}
      <div className="w-full h-96 overflow-hidden rounded">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
          onError={(e) => { e.target.src = "/images/fallback.jpg" }} // fallback
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="mt-4">{product.description}</p>
        <div className="mt-4 font-bold text-xl">₹{product.price}</div>
        <button
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>
      </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
