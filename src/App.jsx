import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from '@/components/organisms/Layout';
import Home from '@/components/pages/Home';
import Services from '@/components/pages/Services';
import About from '@/components/pages/About';
import Contact from '@/components/pages/Contact';
import AdminLogin from '@/components/pages/AdminLogin';
import AdminDashboard from '@/components/pages/AdminDashboard';
import AdminGuard from '@/components/molecules/AdminGuard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin-panel-2024" element={<AdminLogin />} />
          <Route path="/admin-panel-2024/dashboard" element={
            <AdminGuard>
              <AdminDashboard />
            </AdminGuard>
          } />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className="z-[9999]"
        />
      </div>
    </Router>
  );
}

export default App;