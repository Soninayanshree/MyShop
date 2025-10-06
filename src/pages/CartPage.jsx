import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, removeFromCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'
import { useCartTotal } from "../hooks/useCartTotal"


const CartPage = () => {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const subtotal = useCartTotal()

  if (items.length === 0)
    return (
      <div>
        Your cart is empty. <Link to="/products" className="text-blue-600">Shop now</Link>
      </div>
    )

  return (
    <div>
      <div className="grid gap-4">
        {items.map(it => (
          <div key={it.id} className="flex items-center gap-4 border-b pb-4">
            <img src={it.image} alt={it.name} className="w-24 h-24 object-cover" />
            <div className="flex-1">
              <div className="font-semibold">{it.name}</div>
              <div>₹{it.price}</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => dispatch(decreaseQty(it.id))}>-</button>
              <div>{it.qty}</div>
              <button onClick={() => dispatch(increaseQty(it.id))}>+</button>
            </div>
            <button onClick={() => dispatch(removeFromCart(it.id))}>Remove</button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border rounded">
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>₹{subtotal}</div>
        </div>
        <Link to="/checkout" className="block mt-4 text-center bg-blue-600 text-white px-4 py-2 rounded">
          Checkout
        </Link>
      </div>
    </div>
  )
}

export default CartPage
