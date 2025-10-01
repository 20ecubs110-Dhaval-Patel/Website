"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showPricing, setShowPricing] = useState(false);
  const pricingRef = useRef(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleGetStarted = () => {
    setShowPricing(true);
    setButtonClicked(true);
  };

  // ✅ WhatsApp Buy Function
  const handleBuy = (packageName, price) => {
    const phone = "916351781008"; // Replace with your WhatsApp number
    const message = `I want toorder: ${packageName} for ₹${price}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Scroll when pricing opens
  useEffect(() => {
    if (showPricing && pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showPricing]);

  const year = new Date().getFullYear();

  return (
    <>
      {/* Topbar */}
      <header className="w-full fixed top-0 left-0 bg-green-600 text-white shadow-md flex items-center justify-between px-6 h-14 z-10">
        <h1 className="font-bold text-lg">🎬 Reel Editor</h1>
        <nav className="space-x-4 text-sm flex items-center">
          <a href="#pricing" className="hover:underline text-white">
            Pricing
          </a>
          <a href="#contact" className="hover:underline text-white">
            Contact
          </a>
          {showPricing && (
            <>
              {/* Cart button */}
              <button
                type="button"
                aria-label="View Cart"
                className="ml-4 p-2 rounded hover:bg-green-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-cart"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
                </svg>
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center px-4 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-4">
          Professional Reel Editing at Your Fingertips
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          Fast, affordable, and creative reels designed to boost your content on
          any platform.
        </p>
        {!buttonClicked && (
          <button
            onClick={handleGetStarted}
            className="mt-6 px-6 py-3 bg-white text-green-700 font-semibold rounded hover:bg-gray-100 transition"
          >
            Get Started
          </button>
        )}
      </section>

      {/* Pricing Section */}
      {showPricing && (
        <main
          id="pricing"
          ref={pricingRef}
          className="py-16 px-4 sm:px-10 min-h-screen bg-gray-50"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Choose Your Reel Package
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Reel Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              {/* ✅ Video Preview 1*/}
              <div className="mt-8 flex justify-center">
                <video
                  className="rounded-lg shadow-lg w-full aspect-video max-h-60 sm:max-h-72 md:max-h-80"
                  controls
                  controlsList="nodownload noremoteplayback noplaybackrate"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source src="/Reel1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-xl font-semibold mt-4">20 Seconds Reel</h3>
              <p className="text-green-600 font-bold text-lg mt-2">₹200</p>
              <ul className="text-sm text-gray-500 mt-2 space-y-1">
                <li>✔ 1080p HD Quality</li>
                <li>✔ 24 Hour Delivery</li>
                <li>✔ 1 Free Revision</li>
              </ul>

              <button
                onClick={() => handleBuy("10s reel edit", 100)}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 hover:scale-105 transition"
              >
                Buy
              </button>
            </div>


            {/* Reel Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              {/* ✅ Video Preview 2*/}
              <div className="mt-8 flex justify-center">
                <video
                  className="rounded-lg shadow-lg w-full aspect-video max-h-60 sm:max-h-72 md:max-h-80"
                  controls
                  controlsList="nodownload noremoteplayback noplaybackrate"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source src="/Reel2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-xl font-semibold mt-4">30 Seconds Reel</h3>
              <p className="text-green-600 font-bold text-lg mt-2">₹300</p>
              <ul className="text-sm text-gray-500 mt-2 space-y-1">
                <li>✔ 1080p HD Quality</li>
                <li>✔ 24 Hour Delivery</li>
                <li>✔ 1 Free Revision</li>
              </ul>

              <button
                onClick={() => handleBuy("10s reel edit", 100)}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 hover:scale-105 transition"
              >
                Buy
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer
        id="contact"
        className={`text-center py-10  ${showPricing ? "" : "mt-20"
          }`}
      >
        <p>
          📧 Contact:{" "}
          <a
            href="mailto:youremail@example.com"
            className="text-green-600 hover:underline"
          >
            youremail@example.com
          </a>
        </p>
        <p className="mt-2 text-sm">© {year} Reel Editor. All rights reserved.</p>
      </footer>
    </>
  );
}
