import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Admin/Product";
import Orders from "./components/Admin/Orders";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin">
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
