import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [location]);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };
  const handleHashLink = (hash) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className="bg-[#ff4c68] text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Tindog</Link>

        <ul className="hidden md:flex space-x-8 items-center font-light text-lg">
          <li>
            <button 
              onClick={() => handleHashLink('#contact')} 
              className="hover:underline cursor-pointer"
            >
              Contact
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleHashLink('#pricing')} 
              className="hover:underline cursor-pointer"
            >
              Pricing
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleHashLink('#download')} 
              className="hover:underline cursor-pointer"
            >
              Download
            </button>
          </li>

          {!isAuthenticated ? (
            <>
              <li>
                <Link to="/login" className="bg-white text-[#ff4c68] font-semibold px-4 py-1 rounded hover:bg-gray-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="bg-white text-[#ff4c68] font-semibold px-4 py-1 rounded hover:bg-gray-200">
                  Signup
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile" className="hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-white text-[#ff4c68] font-semibold px-4 py-1 rounded hover:bg-gray-200"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-lg font-light">
          <button 
            onClick={() => handleHashLink('#contact')} 
            className="block w-full text-left px-4 py-2 hover:bg-[#ff3a55]"
          >
            Contact
          </button>
          <button 
            onClick={() => handleHashLink('#pricing')} 
            className="block w-full text-left px-4 py-2 hover:bg-[#ff3a55]"
          >
            Pricing
          </button>
          <button 
            onClick={() => handleHashLink('#download')} 
            className="block w-full text-left px-4 py-2 hover:bg-[#ff3a55]"
          >
            Download
          </button>

          {!isAuthenticated ? (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-[#ff3a55]">
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block bg-white text-[#ff4c68] font-semibold px-4 py-2 rounded mt-2 hover:bg-gray-200"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-[#ff3a55]">
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block w-full text-left bg-white text-[#ff4c68] font-semibold px-4 py-2 rounded mt-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;