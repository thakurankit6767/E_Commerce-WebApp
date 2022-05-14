import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import CheckoutPage from "./components/Cart/CheckoutPage";
import PaymentForm from "./components/Cart/PaymentForm";
import AddressForm from "./components/Cart/AddressForm";
import Review from "./components/Cart/Review";
import LoginPage from "./components/Cart/LoginPage";
import SignUp from "./components/Cart/SignUp";
import { useSelector } from "react-redux";
import Productdetails from "./components/Cart/Productdetails";
import CartPage from "./components/Cart/CartPage";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/product/:id" element={<Productdetails />}></Route>
        <Route path="/CartPage" element={<CartPage />}></Route>
        <Route path="/CheckoutPage" element={<CheckoutPage />}></Route>
        <Route path="/PaymentForm" element={<PaymentForm />}></Route>
        <Route path="/AddressForm" element={<AddressForm />}></Route>
        <Route path="/Review" element={<Review />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
