import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="bg-[#ff4c68] text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Tindog</Link>

        <ul className="hidden md:flex space-x-8 items-center font-light text-lg">
          <li>
            <Link to="/#contact" className="hover:underline">Contact</Link>
          </li>
          <li>
            <Link to="/#pricing" className="hover:underline">Pricing</Link>
          </li>
          <li>
            <Link to="/#download" className="hover:underline">Download</Link>
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
            <li>
              <button
                onClick={handleLogout}
                className="bg-white text-[#ff4c68] font-semibold px-4 py-1 rounded hover:bg-gray-200"
              >
                Logout
              </button>
            </li>
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
          <Link to="/#contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-[#ff3a55]">
            Contact
          </Link>
          <Link to="/#pricing" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-[#ff3a55]">
            Pricing
          </Link>
          <Link to="/#download" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-[#ff3a55]">
            Download
          </Link>

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
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="block w-full text-left bg-white text-[#ff4c68] font-semibold px-4 py-2 rounded mt-2 hover:bg-gray-200"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
