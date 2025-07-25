import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gradient-to-r from-orange-800 via-amber-700 to-orange-800 text-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center space-y-4">
        {/* Nama Brand */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          KRESS <span className="text-yellow-400">Lezat</span>
        </h2>

        {/* Deskripsi */}
        <p className="text-sm sm:text-lg md:text-xl text-white opacity-80">
        Petualangan Rasa Kress menantimu! Follow kami & temukan kejutan seru tiap hari!
        </p>

        {/* Logo Media Sosial */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/kres.sid?igsh=MW1jMnFreWI5djNjZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition duration-300"
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
        </div>

        {/* Nomor WhatsApp */}
        <p className="text-sm sm:text-base md:text-lg text-white">
          Hubungi kami di WhatsApp:{' '}
          <a
            href={`https://wa.me/6285794304408?text=${encodeURIComponent('halo kress saya ingin membeli produk unggulan anda apa yang harus saya lakukan')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:underline">
            +62 857-9430-4408
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-white opacity-70">
          &copy; 2025 KRESS. Semua hak cipta dilindungi undang-undang.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
