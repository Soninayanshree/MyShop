import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMobileMenu } from '../hooks/useMobileMenu'
import { useDropdown } from '../hooks/useDropdown'

const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu, mobileCatOpen, toggleMobileCat, closeMobileCat } = useMobileMenu()
  const { isOpen: catOpen, toggle: toggleCat, close: closeCat, ref: catRef } = useDropdown()
  const cartItems = useSelector(state => state.cart.items)
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0)
  const products = useSelector(state => state.products.items)
  const categories = [...new Set(products.map(p => p.category))]

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3 13h-6v-2h6v2zm0-4h-6V7h6v4z" />
            </svg>
            <span className="text-2xl font-bold text-gray-800">MyShop</span>
          </Link>
        </div>

        {/* Desktop nav (styling only) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600 transition">Products</Link>

          <div className="relative" ref={catRef}>
            <button onClick={toggleCat} aria-expanded={catOpen} className="text-gray-700 hover:text-blue-600 transition focus:outline-none">Categories ▾</button>
            {catOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-md min-w-[180px] z-20">
                {categories.length === 0 ? (
                  <div className="px-4 py-2 text-sm text-gray-500">No categories</div>
                ) : (
                  categories.map(cat => (
                    <Link
                      key={cat}
                      to={`/products/category/${cat}`}
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      onClick={closeCat}
                    >
                      {cat}
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right side: cart + mobile toggle */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative inline-flex items-center px-3 py-1 rounded hover:bg-gray-100 transition" title="View cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h13l-2-7M16 21a1 1 0 11-2 0 1 1 0 012 0zM9 21a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">{cartCount}</span>
            )}
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="focus:outline-none">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          <Link to="/" className="block py-2 text-gray-700" onClick={closeMenu}>Home</Link>
          <Link to="/products" className="block py-2 text-gray-700" onClick={closeMenu}>Products</Link>

          <div className="pt-2">
            <button
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-gray-700 hover:text-blue-600"
              onClick={toggleMobileCat}
              aria-expanded={mobileCatOpen}
            >
              <span>Categories</span>
              <svg className={`w-4 h-4 transform transition-transform ${mobileCatOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>

            {mobileCatOpen && (
              <div className="mt-2 space-y-1">
                {categories.length === 0 ? (
                  <div className="text-sm text-gray-500 px-2">No categories</div>
                ) : (
                  categories.map(cat => (
                    <Link
                      key={cat}
                      to={`/products/category/${cat}`}
                      className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700"
                      onClick={() => { closeMenu(); closeMobileCat() }}
                    >
                      {cat}
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>

          <Link to="/cart" className="block py-2 text-gray-700" onClick={closeMenu}>Cart ({cartCount})</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
