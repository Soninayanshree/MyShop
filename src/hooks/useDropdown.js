import { useState, useRef, useEffect } from 'react'

export const useDropdown = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const ref = useRef(null)

  // Toggle open state
  const toggle = () => setIsOpen(prev => !prev)
  const close = () => setIsOpen(false)

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return { isOpen, toggle, close, ref }
}
