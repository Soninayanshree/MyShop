import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const CategoryPage = () => {
  const { category } = useParams()
  const products = useSelector(state => state.products.items)
  const navigate = useNavigate()

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1)
    else navigate('/products')
  }

  // Filter products by category
  const filtered = products.filter(p => p.category === category)

  if (filtered.length === 0) return <div>No products in "{category}" category.</div>

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

      <h1 className="text-2xl font-bold mb-4">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}

export default CategoryPage
