import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import Footer from "./Components/Footer";
import Bookinfo from "./pages/Bookinfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from 'react'


function App() {
  const [cart, setCart] = useState([]);

function addToCart(book) {
  setCart([...cart, book])
}

useEffect(() => {
  console.log(cart)
}, [cart])

 

  return (
    <Router>
      <div className="App">
        <Nav />
      
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path="/books/:id" element={<Bookinfo books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" element={<Cart books={books} cart={cart}/>} />

       
        {/* <Route path="/books/:id" element={<Bookinfo books={books}
        addToCart={addToCart} cart={cart} />}/>
        <Route path="/cart" element={<Cart books={books} cart={cart}
        changeQuantity={changeQuantity} />} /> */}
      </Routes>
        <Footer />
    
      </div>
     </Router>
  );
}

export default App;
