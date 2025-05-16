import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Glassmorphism Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-white/10 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo and Kress Text */}
          <div className="flex items-center space-x-3">
            <img
              src="LOGO.png"
              alt="Kress Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-white text-2xl font-bold font-knewave">Kress</span>
          </div>
          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-white text-lg font-poppins hover:text-amber-300 transition duration-300"
            >
              Beranda
            </Link>
            <Link
              to="/aboutus"
              className="text-white text-lg font-poppins hover:text-amber-300 transition duration-300"
            >
              Tentang Kami
            </Link>
          </nav>
        </div>
      </header>

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/bgpd.png)',
          transform: 'rotate(180deg)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Centered Text Content with Spacing */}
      <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-20 md:py-24 z-10">
        <div className="text-center space-y-6 max-w-4xl mx-4 sm:mx-6 md:mx-8">
          <motion.h1
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-knewave leading-tight"
          >
            Tentang Kress
          </motion.h1>
          <motion.p
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-white text-xs sm:text-sm md:text-base font-poppins opacity-90 leading-relaxed"
          >
            <strong>Kress</strong> adalah proyek yang dibuat untuk memenuhi tugas mata kuliah <strong>Digital Business</strong>, dengan anggota tim: <br />
            <strong>Azhar Rizqullah (22.11.4981)</strong>, <strong>Muhammad Ramadianto (22.11.4945)</strong>, <strong>Bagas Dwi Saputra (22.11.4995)</strong>, <strong>Alief Khairul Fadzli (22.11.4983)</strong>, dan <strong>Imam Mashduqi (22.11.4946)</strong>.<br /><br />

            Kress adalah merek kripik singkong lokal Indonesia yang lahir dari kreativitas sekelompok mahasiswa IT dalam mengerjakan tugas kelas. Tugas kami sederhana namun menantang: mengubah sebuah produk tradisional menjadi sesuatu yang relevan di dunia digital. Dari sinilah Kress tercipta, sebuah merek kripik singkong yang menggabungkan cita rasa autentik Indonesia dengan pendekatan digital yang inovatif. Nama Kress, yang terinspirasi dari kata "crisp," mencerminkan tekstur renyah kripik kami sekaligus semangat kami untuk menghadirkan sesuatu yang segar.<br /><br />

            Kress resmi diluncurkan pada 15 April 2025, tepat tiga hari yang lalu, sebagai bagian dari proyek kuliah kami. Meski baru lahir, kami berambisi membawa kripik singkong ke level baru dengan memanfaatkan teknologi digital. Kami memilih singkong sebagai bahan utama karena ingin mendukung petani lokal dan mempromosikan kekayaan kuliner Indonesia. Setiap keping kripik Kress dibuat dari singkong pilihan yang kami dapatkan dari petani di [misalnya: sekitar Bandung, Jawa Barat], yang kami olah dengan resep sederhana namun penuh perhatian.<br /><br />

            Kami meluncurkan tiga varian rasa yang dirancang untuk mencuri perhatian: Original, yang menonjolkan cita rasa alami singkong; Keju, dengan sentuhan keju creamy yang bikin lumer; dan Pedas, untuk mereka yang suka tantangan dengan sensasi pedas yang pas. Ketiga rasa ini adalah hasil eksperimen kami di dapur kecil kampus, di mana kami menghabiskan malam-malam panjang untuk menyempurnakan resep sambil mengerjakan coding untuk platform digital Kress.<br /><br />

            Sebagai mahasiswa IT, kami tidak hanya fokus pada rasa, tetapi juga pada bagaimana Kress bisa hadir di dunia digital. Tiga hari lalu, kami merilis situs web sederhana dan akun media sosial Kress untuk memperkenalkan produk ini. Kami juga sedang mengembangkan fitur pemesanan online yang memungkinkan pelanggan memesan kripik langsung dari ponsel mereka. Ini adalah langkah awal kami untuk membawa Kress lebih dekat ke masyarakat, meski saat ini produksi masih dilakukan dalam skala kecil di [misalnya: dapur bersama kampus atau UMKM lokal yang kami ajak kerja sama].<br /><br />

            Kress adalah cerminan semangat kami untuk belajar dan berinovasi. Meski ini hanya proyek tugas, kami berkomitmen menjaga kualitas dengan memastikan singkong yang digunakan segar dan proses produksi higienis. Produk kami belum terdaftar di BPOM atau MUI karena masih dalam tahap awal, tapi kami sedang mempelajari prosesnya untuk memenuhi standar keamanan pangan di masa depan. Untuk saat ini, Kress tersedia dalam jumlah terbatas melalui pre-order di WhatsApp +62822-5840-1156.<br /><br />

            Harga Kress dibuat terjangkau untuk sesama mahasiswa dan pecinta camilan, dengan kemasan yang praktis untuk dibawa ke kelas atau nongkrong. Kami tahu perjalanan ini baru dimulai, dan masih banyak yang harus kami pelajari—baik dari sisi produksi maupun pemasaran digital. Tapi kami excited untuk melihat bagaimana Kress bisa berkembang, berkat dukungan dari teman, keluarga, dan komunitas kampus.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
