import { useState } from "react";

function ConsoleShowcase() {
  const consoles = [
    {
      name: "PlayStation 5 Console",
      description:
        "Experience an all-new generation of incredible PlayStation games.",
      image:
        "https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-disc-console-featured-hardware-image-block-02-en-15nov23?$1600px$",
    },
    {
      name: "PS5 Digital Edition",
      description:
        "Go all-digital with lightning-fast performance and immersive gameplay.",
      image:
        "https://gmedia.playstation.com/is/image/SIEPDC/ps5-digital-edition-featured-hardware-image-block-02-en-15nov23?$1600px$",
    },
    {
      name: "PS5 Slim",
      description:
        "A compact design delivering the same next-gen performance.",
      image:
        "https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-digital-edition-featured-hardware-image-block-02-en-15nov23?$1600px$",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % consoles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? consoles.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative">

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-full hover:bg-blue-500"
      >
        &#10094;
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-full hover:bg-blue-500"
      >
        &#10095;
      </button>

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-gray-200">
          Discover all PS5
          <br />
          consoles and
          <br />
          accessories
        </h2>

        <h3 className="text-blue-400 text-xl mb-4">
          {consoles[currentIndex].name}
        </h3>

        <p className="text-gray-400 mb-8 max-w-md">
          {consoles[currentIndex].description}
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">
            Find out more
          </button>

          <button className="bg-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition">
            Buy now
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">
        <img
          src={consoles[currentIndex].image}
          alt={consoles[currentIndex].name}
          className="w-full max-w-xl transition duration-500"
        />
      </div>

    </div>
  );
}

export default ConsoleShowcase;