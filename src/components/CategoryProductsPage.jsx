import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const CategoryPage = () => {
  const { category } = useParams() // get category from URL
  const products = useSelector(state => state.products.items)

  // Filter products by category
  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  )

  if (filteredProducts.length === 0)
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">No products found in "{category}"</h2>
        <Link to="/products" className="text-blue-600">View all products</Link>
      </div>
    )

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">{category} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
