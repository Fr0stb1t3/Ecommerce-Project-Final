import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./navpages/home/HomePage";
import NoPage from "./navpages/noPage/NoPage";
import ProductInfo from "./navpages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./navpages/cart/CartPage";
import Signup from "./navpages/registration/Sinup";
import Login from "./navpages/registration/Login";
import UserDashboard from "./navpages/user/Dashboard";
import AdminDashboard from "./navpages/admin/AdminDash";
import AddProductPage from "./navpages/admin/AddProductPage";
import UpdateProductPage from "./navpages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import AllProduct from "./navpages/allProduct/AllProduct";
import CategoryPage from "./navpages/category/CategoryPage";


const App = () => {
  return (
    <MyState>
      <Router>
      <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage />} />  {/* category Page route  */}
          <Route path="/dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>}/>
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>}/>
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>}/>
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>}/>
        </Routes>
        <Toaster/>
      </Router>
    </MyState>
  );
}

export default App;