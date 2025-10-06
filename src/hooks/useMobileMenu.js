import { useState } from 'react'

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  // mobile categories accordion state
  const [mobileCatOpen, setMobileCatOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => {
    setIsOpen(false)
    setMobileCatOpen(false)
  }

  const toggleMobileCat = () => setMobileCatOpen(prev => !prev)
  const closeMobileCat = () => setMobileCatOpen(false)
  const openMobileCat = () => setMobileCatOpen(true)

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    mobileCatOpen,
    toggleMobileCat,
    closeMobileCat,
    openMobileCat,
    setMobileCatOpen,
  }
}
