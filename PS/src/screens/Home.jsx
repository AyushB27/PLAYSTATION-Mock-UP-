import React, { useEffect, useState } from "react";

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
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?q=80&w=2070",
  },
  {
    title: "God of War Ragnarök",
    subtitle: "Embrace Your Destiny",
    description:
      "Embark on an epic Norse adventure with Kratos and Atreus.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
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

      {/* HERO CAROUSEL */}
      <section className="relative h-[85vh] overflow-hidden">

        {/* Background Image */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

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

    </div>
  );
};

export default Home;