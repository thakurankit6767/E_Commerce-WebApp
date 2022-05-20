import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import CheckoutPage from "./components/Cart/CheckoutPage";
import PaymentForm from "./components/Cart/PaymentForm";
import AddressForm from "./components/Cart/AddressForm";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import LoginPage from "./components/Cart/LoginPage";
import SignUp from "./components/Cart/SignUp";
import ProductPage from "./components/ProductPage";
import { useSelector } from "react-redux";
import Productdetails from "./components/Cart/Productdetails";
import CartPage from "./components/Cart/CartPage";
import { Navbar } from "./components/Navbar/Navbar";
import  Footer from "./components/Footer";
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/LoginPage" />;
};
function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/ProductPage" element={<ProductPage />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/Product/:id" element={<Productdetails />}></Route>
        <Route
          path="/ProductPage/Product/:id"
          element={<Productdetails />}
        ></Route>
        <Route
          path="/CartPage"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <CartPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/CheckoutPage" element={<CheckoutPage />}></Route>
        <Route path="/PaymentForm" element={<PaymentForm />}></Route>
        <Route path="/AddressForm" element={<AddressForm />}></Route>
        <Route path="/PaymentSuccess" element={<PaymentSuccess />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
       
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
