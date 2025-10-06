import { useSelector } from "react-redux"

export const useCartTotal = () => {
  const items = useSelector(state => state.cart.items)
  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  return subtotal
}
