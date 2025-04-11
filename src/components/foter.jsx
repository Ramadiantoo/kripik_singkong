import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-4">
        {/* Nama Brand */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Kripik Singkong
        </h2>

        {/* Logo Media Sosial */}
        <div className="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.453.066-2.944.408-4.042 1.506S1.632 3.659 1.566 5.112C1.508 6.392 1.494 6.8 1.494 10.059s.014 3.667.072 4.947c.066 1.453.408 2.944 1.506 4.042s2.583 1.44 4.036 1.506c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.453-.066 2.944-.408 4.042-1.506s1.44-2.583 1.506-4.036c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.066-1.453-.408-2.944-1.506-4.042s-2.583-1.44-4.036-1.506c-1.28-.058-1.688-.072-4.947-.072z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.891 3.777-3.891 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.891h-2.33v6.988c4.781-.75 8.437-4.887 8.437-9.878 0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </div>

        {/* Nomor WhatsApp */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Hubungi kami di WhatsApp:{' '}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            +62 812-3456-7890
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;