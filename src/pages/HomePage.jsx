import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="text-center p-8 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">Welcome to MyShop!</h1>
          <p className="mb-6 text-lg text-gray-500 font-semibold drop-shadow">Find your favorite products here.</p>
          <Link to="/products" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow transition-all duration-200">
            Shop Now
          </Link>
      </div>
    </div>
  )
}

export default HomePage
