import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className="border rounded p-4 flex flex-col shadow hover:shadow-lg transition h-full">
      <Link to={`/products/${product.id}`} className="block">
        <div className="w-full h-48 overflow-hidden rounded">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            onError={(e) => { e.target.src = "/images/fallback.jpg" }} // fallback image
          />
        </div>
        <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.category}</p>
      </Link>

      <div className="mt-auto flex items-center justify-between">
        <div className="font-bold text-xl">₹{product.price}</div>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default ProductCard
