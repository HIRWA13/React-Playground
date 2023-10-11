import { useState, useEffect } from "react"

export default function LocalStorage() {
    const storedItems = JSON.parse(window.localStorage.getItem('cartItems'))
    const [cartItem, setCartItem] = useState("")
    const [cartItems, setCartItems] = useState(() => {
      return storedItems || []
    })
    const inputHandler = (e) => {
        setCartItem(e.target.value)
    }
    const cartHandler = (e) => {
        e.preventDefault();
        setCartItems(prev => [...prev, cartItem])
        setCartItem("")
    }

    useEffect(()=>{
        window.localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

  return (
    <>
        <section className="bg-memeColor py-10 px-4 w-3/4  mt-10 mx-auto flex flex-col items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">Local Storage Demo</h1>
            <p className="text-white text-lg">a Demo of Local storage</p>
          <div className="w-full flex items-center justify-center">
            <form onSubmit={cartHandler} className="flex flex-col gap-1 w-2/5">
                <input type="text" onChange={inputHandler} value={cartItem} className="p-2 outline-none rounded-md"/>
                <button type="submit" onClick={cartHandler} className="bg-white p-1 text-memeColor font-bold rounded-lg cursor-pointer active:bg-memeColor active:text-white">Submit</button>
            </form>
          </div>
          <div className="bg-white w-2/5 p-4">
                <h1 className="text-xl font-semibold">Cart Items:</h1>
                {cartItems && cartItems.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
          </div>
        </section>
    </>
  )
}