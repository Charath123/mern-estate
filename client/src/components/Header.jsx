import React from "react";
import { FaSearch, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-slate-300 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <img
              src="https://img.freepik.com/free-vector/logo-real-estate-home-solutions-that-is-home-solution_527952-33.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
              alt="Real Estate Logo"
              className="w-10 h-10 mr-2 border rounded-xl" // Adjust size with Tailwind classes
            />
            <span className="text-yellow-800">Real</span>
            <span className="text-yellow-600">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex bg-slate-100 p-3 rounded-lg items-center"
        >
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-5">
          <Link to="/">
            <li className=" hidden sm:inline text-slate-700 hover:underline cursor-pointer text-2xl ">
              <FaHome />
              {/* Home */}
            </li>
          </Link>
          <Link to="/about">
            <li className="text-lg font-semibold hidden sm:inline text-slate-700  hover:text-black cursor-pointer">
              About
            </li>
          </Link>
          {/* <Link to="sign-in">
            <li className="sm:inline text-slate-700 hover:underline cursor-pointer">
              Sign In
            </li>
          </Link> */}
          <Link to="/contact-owner">
            <li className="text-lg font-semibold hidden sm:inline text-slate-700 hover:text-black cursor-pointer">
              ContactUs
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="rounded-full h-7 w-7 object-cover"
              />
            ) : (
              <li className="text-lg font-semibold text-slate-700 hover:text-black">
                SignIn
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
