import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/productSlice"

export const useProducts = () => {
  const dispatch = useDispatch()
  const { items: products, status, error } = useSelector(state => state.products)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  return { products, status, error }
}
