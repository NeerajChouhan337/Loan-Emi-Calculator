import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon */}
      <div className="md:hidden p-4">
        <button onClick={() => setIsOpen(true)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-4 text-black font-semibold">
          <Link className=' hover:bg-blue-400 border-b-2 border-black' to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className=' hover:bg-blue-400 border-b-2 border-black' to="/exchange" onClick={() => setIsOpen(false)}>Exchange Rates</Link>
          <Link className=' hover:bg-blue-400 border-b-2 border-black' to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className=' hover:bg-blue-400 border-b-2 border-black' to="/error" onClick={() => setIsOpen(false)}>About</Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;