import { useSelector } from 'react-redux'

export const useProductById = (id) => {
  const product = useSelector(state =>
    state.products.items.find(p => String(p.id) === String(id))
  )
  return product
}
