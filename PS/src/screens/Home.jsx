import React, { useEffect, useRef, useState } from "react";
import ConsoleShowcase from "../components/Console";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { recommendGames } from "../utils/recommendationEngine";
import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import {
  OrbitControls,
  useGLTF,
  Bounds,
  useBounds,
} from "@react-three/drei";

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

const horizontalEvolution = [
  {
    year: "1994",
    name: "PlayStation",
    tagline: "The Revolution Begins",
    description:
      "Introducing 3D gaming to the world and redefining entertainment forever.",
    model: "/models/ps1.glb",
  },
  {
    year: "2000",
    name: "PlayStation 2",
    tagline: "The Best-Selling Era",
    description:
      "A cultural phenomenon. The best-selling console of all time.",
    model: "/models/ps2.glb",
  },
  {
    year: "2006",
    name: "PlayStation 3",
    tagline: "High Definition Begins",
    description:
      "Online multiplayer and cinematic storytelling take center stage.",
    model: "/models/ps3.glb",
  },
  {
    year: "2013",
    name: "PlayStation 4",
    tagline: "For The Players",
    description:
      "Social gaming reimagined with immersive storytelling.",
    model: "/models/ps4.glb",
  },
  {
    year: "2020",
    name: "PlayStation 5",
    tagline: "Play Has No Limits",
    description:
      "Ultra-fast SSD, ray tracing, and next-gen immersion.",
    model: "/models/ps5.glb",
  },
];

/* ---------------- AUTO FIT MODEL ---------------- */

function FitModel({ path }) {
  const { scene } = useGLTF(path);
  const bounds = useBounds();

  useEffect(() => {
    bounds.refresh(scene).fit();
  }, [scene, bounds]);

  // Manual correction only for PS5 & PS2
  let position = [0, 0, 0];

  if (path.includes("ps5")) {
    position = [0, -0.6, 0];
  }

  if (path.includes("ps2")) {
    position = [0, -0.4, 0];
  }

  return (
    <primitive
      object={scene}
      position={position}
      castShadow
      receiveShadow
    />
  );
}

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [recommended, setRecommended] = useState([]);
  const scrollRef = useRef(null);

  const API_KEY = import.meta.env.VITE_RAWG_KEY;

  const user = {
    favoriteGenres: ["action", "shooter"],
    multiplayerPreference: true,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
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

  const toCommunity = () => {
    navigate("/community");
  };

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games?platforms=187,18&page_size=40&key=${API_KEY}`
      )
      .then((res) => {
        const ranked = recommendGames(user, res.data.results);
        setRecommended(ranked.slice(0, 6));
      })
      .catch((err) => console.error(err));
  }, []);

  /* SAFE HORIZONTAL SCROLL */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY * 1.2;
    };

    const handleKeyDown = (e) => {
      const scrollAmount = window.innerWidth;
      if (e.key === "ArrowRight") {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
      if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-4 bg-[#0b0f14] sticky top-0 z-50">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-8"
        >
          <div className="text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8" fill="currentColor">
              <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z"/>
            </svg>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            {["Games", "PS5", "PS4", "PS Plus", "Accessories", "News", "Store"].map((link) => (
              <motion.a 
                key={link} 
                whileHover={{ color: "#fff", scale: 1.05 }} 
                href="#" 
                className="hover:text-white"
              >
                {link}
              </motion.a>
            ))}
            <motion.a 
              whileHover={{ color: "#fff", scale: 1.05 }}
              onClick={toCommunity} 
              className="hover:text-white cursor-pointer"
            >
              Community
            </motion.a>
          </nav>
        </motion.div>

        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-4"
        >
          <motion.div 
            key={xp}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-sm bg-blue-600 px-4 py-1 rounded-full shadow-lg shadow-blue-500/20"
          >
            XP: {xp}
          </motion.div>
          <div className="text-xs text-gray-300">
            Rank: {level}
          </div>

          <button className="bg-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">
            Sign In
          </button>
        </motion.div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[85vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
        </AnimatePresence>

        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            maskImage: "linear-gradient(to right, black 0%, black 24%, rgba(0,0,0,0.5) 35%, transparent 45%)",
            WebkitMaskImage: "linear-gradient(to right, black 0%, black 24%, rgba(0,0,0,0.5) 35%, transparent 45%)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 flex items-center h-full px-12 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                {slides[current].title}
              </h2>

              <h3 className="text-2xl text-blue-400 mb-6">
                {slides[current].subtitle}
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                {slides[current].description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLearnMore}
                className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition shadow-lg"
              >
                Learn More
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* AI RECOMMENDATION SECTION */}
      <section className="px-12 py-16 bg-[#0f141b]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          AI Recommended For You
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {recommended.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#1a1f29] rounded-lg overflow-hidden border border-transparent hover:border-blue-500 transition-colors duration-300"
            >
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h4 className="text-sm font-semibold truncate">
                  {game.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3D HORIZONTAL EVOLUTION */}
      <section
        ref={scrollRef}
        className="w-screen h-screen overflow-x-auto snap-x snap-mandatory flex scroll-smooth bg-black no-scrollbar"
      >
        {horizontalEvolution.map((item, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-screen h-screen flex items-center justify-center px-20"
          >
            <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl w-full">
              {/* TEXT */}
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-blue-500 text-xl tracking-widest font-mono">
                  {item.year}
                </p>
                <h2 className="text-6xl font-bold">
                  {item.name}
                </h2>
                <h3 className="text-2xl text-gray-300 italic">
                  {item.tagline}
                </h3>
                <p className="text-gray-400 text-lg max-w-xl">
                  {item.description}
                </p>
              </motion.div>

              {/* 3D STAGE */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800"
              >
                <Canvas shadows camera={{ position: [0, 2, 6], fov: 45 }}>
                  <ambientLight intensity={0.8} />
                  <directionalLight
                    position={[5, 10, 5]}
                    intensity={1.2}
                    castShadow
                  />
                  <Bounds fit clip observe margin={1.2}>
                    <FitModel path={item.model} />
                  </Bounds>
                  <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={1}
                  />
                </Canvas>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      <AnimatePresence>
        {achievement && (
          <motion.div 
            initial={{ opacity: 0, y: 100, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-6 right-6 bg-[#111] border border-blue-500 px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-3"
          >
            <span className="text-xl">🏆</span>
            <span className="font-medium">{achievement}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-[#003791] text-white py-14 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-semibold tracking-wide">PlayStation</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-10 text-sm">
            <div>
              <h3 className="font-semibold text-lg mb-4">About</h3>
              <ul className="space-y-3 text-gray-200">
                <li><a href="#" className="hover:underline">About SIE</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">PlayStation Studios</a></li>
                <li><a href="#" className="hover:underline">PlayStation Productions</a></li>
                <li><a href="#" className="hover:underline">Corporate</a></li>
                <li><a href="#" className="hover:underline">History of PlayStation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-3 text-gray-200">
                <li><a href="#" className="hover:underline">PS5</a></li>
                <li><a href="#" className="hover:underline">PS4</a></li>
                <li><a href="#" className="hover:underline">PS VR2</a></li>
                <li><a href="#" className="hover:underline">PS Plus</a></li>
                <li><a href="#" className="hover:underline">Accessories</a></li>
                <li><a href="#" className="hover:underline">Games</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Values</h3>
              <ul className="space-y-3 text-gray-200">
                <li><a href="#" className="hover:underline">Environment</a></li>
                <li><a href="#" className="hover:underline">Accessibility</a></li>
                <li><a href="#" className="hover:underline">Online safety</a></li>
                <li><a href="#" className="hover:underline">Diversity, equity & inclusion</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-gray-200">
                <li><a href="#" className="hover:underline">Support hub</a></li>
                <li><a href="#" className="hover:underline">PlayStation Safety</a></li>
                <li><a href="#" className="hover:underline">Status</a></li>
                <li><a href="#" className="hover:underline">PlayStation Repairs</a></li>
                <li><a href="#" className="hover:underline">Password reset</a></li>
                <li><a href="#" className="hover:underline">Refund Request</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-200">
                <li><a href="#" className="hover:underline">Terms of service</a></li>
                <li><a href="#" className="hover:underline">PS Store cancellation policy</a></li>
                <li><a href="#" className="hover:underline">Age ratings</a></li>
                <li><a href="#" className="hover:underline">Health warning</a></li>
                <li><a href="#" className="hover:underline">Developers</a></li>
                <li><a href="#" className="hover:underline">Glossary</a></li>
                <li><a href="#" className="hover:underline">Official licensing programme</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <div className="flex space-x-4 mb-6">
                <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:opacity-75">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.7v-2.9h2.7V9.8c0-2.7 1.6-4.2 4-4.2 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6v2h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;