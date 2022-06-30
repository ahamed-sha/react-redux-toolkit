import { getCartItems } from "./features/cart/cartSlice"
import { useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import CartContainer from "./components/Cart/CartContainer"
import { useSelector, useDispatch } from "react-redux"
import Modal from "./components/Modal/Modal"

function App() {
  const { isLoading } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartItems())
  })
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
