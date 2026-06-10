import { Routes, Route } from "react-router-dom";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProductView from "./Components/Pages/Product/ProductView";
import ProductAdd from "./Components/Pages/Product/ProductAdd"
import ProductEdit from "./Components/Pages/Product/ProductEdit";
import Layout from "./layout/Layout";
import OrderDetails from "./Components/Pages/Order/OrderDetails";
import Home from "./Components/HomePage/Home";
import Product from "./Components/ProductPage/Product";
import ProductPage from "./Components/ProductPage/ProductPage";
import ProductDetailPage from "./Components/ProductPage/ProductDetailPage";
import About from "./Components/HomePage/About";
import ContactUs from "./Components/HomePage/ContactUs";
import AddtoCart from "./Components/CartPage/AddtoCart";
import CategoryyAdd from "./Components/Pages/Category/CategoryyAdd";
import HandwrittenLetters from "./Components/ProductPage/ProductDetailPage/HandwrittenLetters/HandwrittenLetters";
import PhotoPrints from "./Components/ProductPage/ProductDetailPage/PhotoPrints/PhotoPrints";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/categorypage" element={<Product/>}/>
      <Route path="/categorypage/:id" element={<ProductPage />}/>
      <Route path="/productdetailpage/:id" element={<ProductDetailPage/>}/>
      <Route path="/handwrittenletters" element={<HandwrittenLetters/>}/>
      <Route path="/photoprints" element={<PhotoPrints/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/addtocart" element={<AddtoCart/>}/>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        {/* Nested route must be relative */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product" element={<ProductView />} />
        <Route path="productAdd" element={<ProductAdd />} />
        <Route path="productEdit" element={<ProductEdit />} />
        <Route path="categoryyAdd" element={<CategoryyAdd/>} />
        <Route path="order" element={<OrderDetails/>}/>
      </Route>

      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
