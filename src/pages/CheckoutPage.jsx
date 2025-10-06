import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import { useCartTotal } from '../hooks/useCartTotal'

const CheckoutPage = () => {
  const items = useSelector(state => state.cart.items)
  const subtotal = useCartTotal()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePurchase = () => {
    dispatch(clearCart())
    alert('Thank you! Purchase completed.')
    navigate('/')
  }

  if (items.length === 0) return <div>Your cart is empty.</div>

  return (
    <div>
      <h2 className="text-xl font-bold">Checkout</h2>
      <div className="mt-4">Total: ₹{subtotal}</div>
      <button
        onClick={handlePurchase}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Complete Purchase
      </button>
    </div>
  )
}

export default CheckoutPage
