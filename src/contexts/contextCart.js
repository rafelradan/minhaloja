import { createContext, useState } from 'react'

export const CartContext = createContext({})

function CartProvider({ children }) {
  const [carttNumber, setCarttNumber] = useState(2)

  return (
    <CartContext.Provider value={{ carttNumber, setCarttNumber }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
