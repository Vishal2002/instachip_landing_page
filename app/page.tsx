"use client"
import React, { useEffect } from 'react';
import { Terminal } from 'lucide-react';
import Navbar from '@/component/ui/Navbar'


const Home = () => {
  useEffect(() => {
    const smoothScroll = (e:any) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <main className='min-h-screen'>
      <Navbar />
      <section id="home" className="pt-16">
        <div className="h-[30rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className='flex flex-col relative z-20'>
            <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-800 py-8">
              Instachip
            </p>
            <p className='text-3xl font-bold text-center text-purple-700 dark:text-purple-400'>
              We build Computers work at speed of Light
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-700 dark:text-purple-400">About Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
              <p className="text-gray-700 dark:text-gray-300">We are a dedicated team of innovators, pushing the boundaries <br /> of computer technology to bring you lightning-fast solutions.</p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-900 rounded-lg p-4 shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center">
                  <Terminal className="text-green-500 mr-2" />
                  <p className="text-green-500 font-mono">$ pip install tpu_core.sv</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-700 dark:text-purple-400">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Light-speed Computing</h3>
              <p className="text-gray-700 dark:text-gray-300">Experience unparalleled processing speeds with our cutting-edge technology.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Quantum Integration</h3>
              <p className="text-gray-700 dark:text-gray-300">Seamlessly integrate quantum computing capabilities into your existing infrastructure.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">AI Acceleration</h3>
              <p className="text-gray-700 dark:text-gray-300">Supercharge your AI and machine learning workflows with our specialized hardware.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home