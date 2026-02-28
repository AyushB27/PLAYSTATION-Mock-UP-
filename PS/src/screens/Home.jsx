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
      "https://cdn2.unrealengine.com/horizonheader-1920x1080-c23797e1a0a6.jpg",
  },
  {
    title: "God of War Ragnarök",
    subtitle: "Embrace Your Destiny",
    description:
      "Embark on an epic Norse adventure with Kratos and Atreus.",
    image:
      "https://substackcdn.com/image/fetch/$s_!xJzF!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F0f71af66-437f-4659-b7a1-d16feff4c2d7_3840x2160.jpeg",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // 🎮 Gamification
  const [xp, setXp] = useState(0);
  const [achievement, setAchievement] = useState("");
  const [consoleUnlocked, setConsoleUnlocked] = useState(false);

  const level =
    xp > 100 ? "Legend" :
    xp > 50 ? "Pro Gamer" :
    xp > 20 ? "Rookie" :
    "New Player";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        setXp((xp) => xp + 5);
        return (prev + 1) % slides.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !consoleUnlocked) {
        setConsoleUnlocked(true);
        setXp((xp) => xp + 20);
        setAchievement("Console Explorer Trophy Unlocked!");
        setTimeout(() => setAchievement(""), 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [consoleUnlocked]);

  const handleLearnMore = () => {
    setXp((xp) => xp + 10);
    setAchievement("Game Discovery Trophy!");
    setTimeout(() => setAchievement(""), 3000);
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-4 bg-[#0b0f14]">
        <div className="flex items-center gap-8">
          <div className="text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8" fill="currentColor">
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

        <div className="flex items-center gap-4">
          <div className="text-sm bg-blue-600 px-4 py-1 rounded-full">
            XP: {xp}
          </div>
          <div className="text-xs text-gray-300">
            Rank: {level}
          </div>

          <button className="bg-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">
            Sign In
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[85vh] overflow-hidden">

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

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

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

            <button
              onClick={handleLearnMore}
              className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#0c1117] py-24 relative">
        {consoleUnlocked && (
          <div className="absolute top-5 right-5 bg-green-500 px-4 py-2 rounded-full animate-pulse">
            Console Unlocked 🔓
          </div>
        )}
        <ConsoleShowcase />
      </section>

      {achievement && (
        <div className="fixed bottom-6 right-6 bg-[#111] border border-blue-500 px-6 py-3 rounded-xl shadow-lg animate-bounce z-50">
          🏆 {achievement}
        </div>
      )}

      {/* FOOTER — EXACTLY AS YOU PROVIDED */}
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
        </div>
      </div>

    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;