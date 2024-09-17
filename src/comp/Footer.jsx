import React from 'react';

const Footer = () => {
  return (
    <div >
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-start">

            {/* Logo or Branding */}
            <div className="mb-6 lg:mb-0 lg:w-1/3">
              <h2 className="text-2xl font-bold">Pets.</h2>
              <p className="text-sm text-gray-400">Your companion, our care!</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 lg:w-1/3 lg:justify-center">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/3 text-right">
              <p className="text-lg font-semibold">Contact Us</p>
              <p className="text-gray-400">jumailjumi2003@gmail.com</p>
              <p className="text-gray-400">Mob: 1234567890</p>
              <p className="text-gray-400">Kerala, INDIA</p>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="my-8 border-gray-700" />

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pets. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
