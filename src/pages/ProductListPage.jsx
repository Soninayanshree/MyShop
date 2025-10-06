import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/productSlice'
import ProductCard from '../components/ProductCard'

const ProductListPage = () => {
  const dispatch = useDispatch()
  const { items: products, status, error } = useSelector(state => state.products)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts())
  }, [status, dispatch])

  if (status === 'loading') return <div>Loading products...</div>
  if (status === 'failed') return <div>Error: {error}</div>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductListPage
