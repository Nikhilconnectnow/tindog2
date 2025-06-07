import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/Features';
import Pricing from './components/Price';
import TestimonialCarousel from './components/Crousal';
import AppCTA from './components/Cta';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PrivateRoute from './routes/PrivateRoute';


const App = () => {
  return (
    <>
      <Navbar />
     

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturesSection />
              <Pricing />
              <TestimonialCarousel />
              <AppCTA />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
