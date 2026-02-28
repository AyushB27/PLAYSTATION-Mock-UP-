import React, { useEffect, useState } from "react";
import ConsoleShowcase from "../components/Console";


const slides = [
  {
    title: "Marvel Tokon: Fighting Souls",
    subtitle: "Out August 6th",
    description:
      "Assemble your team of legendary heroes in the ultimate 4v4 tag fighter.",
    image:
      "https://static0.cbrimages.com/wordpress/wp-content/uploads/2025/06/8-things-players-expect-from-marvel-tokon-fighting-souls.jpg?q=70&fit=crop&w=1408&h=792&dpr=1",
  },
  {
    title: "Horizon Forbidden West",
    subtitle: "Explore the Unknown",
    description:
      "Journey through a vast open world filled with danger and beauty.",
    image:
      "https://cdn1.epicgames.com/offer/24cc2629b0594bf29340f6acf9816af8/EGS_HorizonForbiddenWestCompleteEdition_GuerrillaGamesNixxesSoftware_S1_2560x1440-90cc343f3fcef2f750f13d8a2d84893b",
  },
  {
    title: "God of War Ragnarök",
    subtitle: "Embrace Your Destiny",
    description:
      "Embark on an epic Norse adventure with Kratos and Atreus.",
    image:
      "https://images.wallpapersden.com/image/download/god-of-war-ragnaroek-4k-gaming-poster_bWtpbG2UmZqaraWkpJRobWllrWdma2U.jpg",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR (Keep PS Base Style) */}
      <header className="flex justify-between items-center px-8 py-4 bg-[#0b0f14]">
        <div className="flex items-center gap-8">
<div className="text-blue-500">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className="w-8 h-8"
    fill="currentColor"
  >
    <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z"/>
  </svg>
</div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Games</a>
            <a href="#" className="hover:text-white">PS5</a>
            <a href="#" className="hover:text-white">PS4</a>
            <a href="#" className="hover:text-white">PS Plus</a>
            <a href="#" className="hover:text-white">Accessories</a>
            <a href="#" className="hover:text-white">News</a>
            <a href="#" className="hover:text-white">Store</a>
            <a href="#" className="hover:text-white">Support</a>
          </nav>
        </div>

        <button className="bg-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">
          Sign In
        </button>
      </header>

<section className="relative h-[85vh] overflow-hidden">

  {/* Background Images */}
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
        index === current ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${slide.image})` }}
    />
  ))}


<div
  className="absolute inset-0 backdrop-blur-sm"
  style={{
    maskImage:
      "linear-gradient(to right, black 0%, black 24%, rgba(0,0,0,0.5) 35%, transparent 45%)",
    WebkitMaskImage:
      "linear-gradient(to right, black 0%, black 24%, rgba(0,0,0,0.5) 35%, transparent 45%)",
  }}
/>

  {/* Slight dark overlay for better readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

  {/* Content */}
  <div className="relative z-10 flex items-center h-full px-12 max-w-2xl">
    <div>
      <h2 className="text-5xl md:text-6xl font-bold mb-4">
        {slides[current].title}
      </h2>

      <h3 className="text-2xl text-gray-300 mb-6">
        {slides[current].subtitle}
      </h3>

      <p className="text-gray-400 mb-8">
        {slides[current].description}
      </p>

      <button className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">
        Learn More
      </button>
    </div>
  </div>

</section>
      <section className="bg-[#0c1117] py-24 relative">
        <ConsoleShowcase />
      </section>
<footer class="bg-[#003791] text-white py-14 px-12">
  <div class="max-w-7xl mx-auto">

   
    <div class="mb-12">
      <h1 class="text-4xl font-semibold tracking-wide">PlayStation</h1>
    </div>

  
    <div class="grid grid-cols-1 md:grid-cols-6 gap-10 text-sm">


      <div>
        <h3 class="font-semibold text-lg mb-4">About</h3>
        <ul class="space-y-3 text-gray-200">
          <li><a href="#" class="hover:underline">About SIE</a></li>
          <li><a href="#" class="hover:underline">Careers</a></li>
          <li><a href="#" class="hover:underline">PlayStation Studios</a></li>
          <li><a href="#" class="hover:underline">PlayStation Productions</a></li>
          <li><a href="#" class="hover:underline">Corporate</a></li>
          <li><a href="#" class="hover:underline">History of PlayStation</a></li>
        </ul>
      </div>

  
      <div>
        <h3 class="font-semibold text-lg mb-4">Products</h3>
        <ul class="space-y-3 text-gray-200">
          <li><a href="#" class="hover:underline">PS5</a></li>
          <li><a href="#" class="hover:underline">PS4</a></li>
          <li><a href="#" class="hover:underline">PS VR2</a></li>
          <li><a href="#" class="hover:underline">PS Plus</a></li>
          <li><a href="#" class="hover:underline">Accessories</a></li>
          <li><a href="#" class="hover:underline">Games</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Values</h3>
        <ul class="space-y-3 text-gray-200">
          <li><a href="#" class="hover:underline">Environment</a></li>
          <li><a href="#" class="hover:underline">Accessibility</a></li>
          <li><a href="#" class="hover:underline">Online safety</a></li>
          <li><a href="#" class="hover:underline">Diversity, equity & inclusion</a></li>
        </ul>
      </div>

     
      <div>
        <h3 class="font-semibold text-lg mb-4">Support</h3>
        <ul class="space-y-3 text-gray-200">
          <li><a href="#" class="hover:underline">Support hub</a></li>
          <li><a href="#" class="hover:underline">PlayStation Safety</a></li>
          <li><a href="#" class="hover:underline">Status</a></li>
          <li><a href="#" class="hover:underline">PlayStation Repairs</a></li>
          <li><a href="#" class="hover:underline">Password reset</a></li>
          <li><a href="#" class="hover:underline">Refund Request</a></li>
        </ul>
      </div>

     
      <div>
        <h3 class="font-semibold text-lg mb-4">Resources</h3>
        <ul class="space-y-3 text-gray-200">
          <li><a href="#" class="hover:underline">Terms of service</a></li>
          <li><a href="#" class="hover:underline">PS Store cancellation policy</a></li>
          <li><a href="#" class="hover:underline">Age ratings</a></li>
          <li><a href="#" class="hover:underline">Health warning</a></li>
          <li><a href="#" class="hover:underline">Developers</a></li>
          <li><a href="#" class="hover:underline">Glossary</a></li>
          <li><a href="#" class="hover:underline">Official licensing programme</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-4">Connect</h3>
        <div class="flex space-x-4 mb-6">

          <a href="#" class="hover:opacity-75">
            <svg class="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.7v-2.9h2.7V9.8c0-2.7 1.6-4.2 4-4.2 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6v2h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z"/>
            </svg>
          </a>

 
          <a href="#" class="hover:opacity-75">
            <svg class="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M3 3l18 18M21 3L3 21" stroke="white" stroke-width="2"/>
            </svg>
          </a>


          <a href="#" class="hover:opacity-75">
            <svg class="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm6-3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3zm-6 14a7 7 0 110-14 7 7 0 010 14z"/>
            </svg>
          </a>

      
          <a href="#" class="hover:opacity-75">
            <svg class="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M23 12s0-3-1-4.5a3.6 3.6 0 00-2.5-2.5C18 4 12 4 12 4s-6 0-7.5 1A3.6 3.6 0 002 7.5C1 9 1 12 1 12s0 3 1 4.5a3.6 3.6 0 002.5 2.5C6 20 12 20 12 20s6 0 7.5-1a3.6 3.6 0 002.5-2.5C23 15 23 12 23 12zM10 15V9l5 3-5 3z"/>
            </svg>
          </a>
        </div>

        <ul class="space-y-3 text-gray-200">
          <li><a href="#" class="hover:underline">PlayStation App (iOS)</a></li>
          <li><a href="#" class="hover:underline">PlayStation App (Android)</a></li>
          <li><a href="#" class="hover:underline">Beta Program at PlayStation</a></li>
        </ul>
      </div>

    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;