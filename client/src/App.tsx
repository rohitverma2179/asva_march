import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShopPage } from './pages/Shop/ShopPage';
import { ProductPage } from './pages/Product/ProductPage';
// import { Aboutpage } from './pages/Product/Abo';
import { BlogPage } from './pages/Blog/BlogPage';
import { BlogInnerPage } from './components/Blog/BlogInnerPage';
import { SubscriptionPage } from './pages/Subscription/SubscriptionPage';
import { ServicesPage } from './pages/Services/ServicesPage';
import About from './pages/AboutPage/About';
import Partner from './pages/Partnerpage/Partner';

// import AdminLayout from './pages/Admin/AdminLayout';
// import DashBoard from './pages/Admin/DashBoard';
// import ProductForm from './pages/Admin/ProductForm';
// import ProductList from './pages/Admin/ProductList';
// import BlogForm from './pages/Admin/BlogForm';
// import BlogList from './pages/Admin/BlogList';
// import AdminLogin from './pages/Admin/AdminLogin';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/ProductPage" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogInnerPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />

        {/* Admin Routes */}
        {/* <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/new" element={<ProductForm />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/new" element={<BlogForm />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App