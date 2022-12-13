import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import HomeScreen from "./screens/HomeScreen";
// import ProductScreen from "./screens/ProductScreen";
// import CartScreen from "./screens/CartScreen";
// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";


// import PlaceOrderScreen from "./screens/PlaceOrderScreen";
// import ShopScreen from "./screens/ShopScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from './screens/UserEditScreen';
import ProfileScreen from "./screens/ProfileScreen";
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ShippingScreen from "./screens/ShippingScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderListScreen from './screens/OrderListScreen'
import HomeScreen from "./screens/HomeScreen"
import CourseScreen from "./screens/CourseScreen"
import CourseScreenDetails from "./screens/CourseScreenDetails"
import CartScreen from "./screens/CartScreen"
import TeacherScreen from "./screens/TeacherScreen"
import TeacherScreenDetails from "./screens/TeacherScreenDetails"
import JobScreenDetails from "./screens/JobScreenDetails"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import JobScreen from "./screens/JobScreen"
import CvEditScreen from "./screens/CvEditScreen"
import MyCvScreen from "./screens/MyCvScreen"
import AboutScreen from "./screens/AboutScreen"
import ContactScreen from "./screens/ContactScreen"



function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        
        <Route path="/product/:id" element={<ProductScreen />} />
        
       
  
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        
        <Route path="/contact" element={<ContactScreen />} />
       
        
        
        
        */}
        <Route path="/admin/userlist" element={<UserListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/cart/:id/*" element={<CartScreen />} />
        <Route path='/' element={<HomeScreen />} />
        <Route path='/course' element={<CourseScreen />} />
        <Route path='/teacher' element={<TeacherScreen />} />
        <Route path='/job' element={<JobScreen />} />
        <Route path="/coursedetails/:id" element={<CourseScreenDetails />} />
        <Route path="/teacherdetails/:id" element={<TeacherScreenDetails />} />
        <Route path="/jobdetails/:id" element={<JobScreenDetails />} />
        <Route path='/jobs/cv/:id/edit' element={<CvEditScreen />} />
        <Route path='/mycv' element={<MyCvScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
