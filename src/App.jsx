import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Layout/Navigation/Navigation.jsx";
import { Footer } from "./components/Layout/Footer/Footer.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Error } from "./components/Error/Error.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import { Home } from "./Pages/Home/Home.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { Dashboard } from "./components/Dashboard/Dashboard.jsx";
import { useEffect } from "react";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import CartContextProvider from "./context/CartContext.jsx";

const App = () => {
  useEffect(() => {
    //llamada a backedn para ver si el pass y contraseña es correcto
    const llamadaABack = true;
    // si es correcto
    if (llamadaABack) {
      localStorage.setItem("isAuth", "true  ");
    } else {
      localStorage.setItem("isAuth", "false");
    }
  });

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/products/:prodId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* <Route path="/about" element={<UnderConstruccion />} /> */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
