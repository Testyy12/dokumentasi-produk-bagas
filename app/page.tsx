"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/card";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";

const steps = [
  { image: "/step1.png", description: "Masukkan nutrijell ke dalam panci, tambahkan gula dan pewarna makanan, lalu aduk sampai rata." },
  { image: "/step2.png", description: "Tambahkan air, aduk sampai tidak ada yang menggumpal." },
  { image: "/step3.png", description: "Nyalakan api kompor dengan api sedang dan terus diaduk sampai mendidih." },
  { image: "/step4.png", description: "Setelah mendidih, matikan api dan angkat, lalu tuang bahan ke dalam wadah, tunggu hingga dingin." },
  { image: "/step5.png", description: "Setelah dingin, serut jelly lalu campurkan susu evaporasi, susu kental manis, dan nata de coco, aduk sampai tercampur." },
  { image: "/step6.png", description: "Masukkan ke dalam botol dan siap dikemas." },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const typingIndex = useRef(0);
  const words = "Website Dokumentasi <Bagas>";

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    const typingInterval = setInterval(() => {
      setText(words.slice(0, typingIndex.current));
      typingIndex.current++;
      if (typingIndex.current > words.length) clearInterval(typingInterval);
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-black to-purple-900 backdrop-blur-md">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-xl font-bold text-white text-center"
        >
          {text}
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-center p-6"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold drop-shadow-lg"
        >
          ES JELLCO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-3 text-base md:text-lg text-gray-300"
        >
          SEGERNYA NIKMAT BANGET
        </motion.p>
      </header>

      <section className="p-6 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">
          Video Tutorial
        </h2>
        <div className="mt-6 border-4 border-blue-500 rounded-lg shadow-xl p-2 inline-block">
          <video
            className="mx-auto w-full max-w-2xl md:max-w-3xl rounded-lg"
            controls
            poster="/video-thumbnail.jpg"
          >
            <source src="/video.mp4" type="video/mp4" />
            Browser Anda tidak mendukung video.
          </video>
        </div>
      </section>

      <section className="p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-400">
          Langkah Pembuatan
        </h2>
        <div className="mt-8 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="hover:scale-105 transform transition-all"
            >
              <Card className="bg-gray-800 shadow-lg rounded-xl overflow-hidden border-4 border-blue-500">
                <CardContent className="p-4 text-center">
                  <Image
                    src={step.image}
                    width={300}
                    height={200}
                    alt={`Langkah ${index + 1}`}
                    className="w-full rounded-lg border-2 border-gray-500"
                  />
                  <p className="mt-3 text-gray-200 font-medium bg-blue-700 p-2 rounded-lg shadow-md">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="mt-12 p-6 md:p-12 bg-gray-800 text-gray-300 text-center">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">
          Informasi Pembuat
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <p className="flex items-center justify-center gap-2">
            <FaWhatsapp className="text-green-400" /> 085785313072
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-red-400" /> waannz987@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaGithub className="text-gray-400" />{" "}
            <a
              href="https://github.com/Testyy12"
              target="_blank"
              className="hover:underline"
            >
              github.com/Testyy12
            </a>
          </p>
        </div>
        <p className="mt-4 text-sm md:text-base">Nomor Lisensi: 08</p>
        <p className="text-sm md:text-base">Kelas: XI-B</p>
      </footer>
    </div>
  );
}
