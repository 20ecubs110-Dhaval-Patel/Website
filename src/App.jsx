import React from "react";
import './App.css';
import reelVideo from './assets/reel.mp4';

function App() {
  const handleBuy = () => {
    const phone = "916351781008"; // Replace with your WhatsApp number
    const message = "I want to order: 10s reel edit for 100rs";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="App">
      <h1>Reel Editing Orders</h1>
      <div className="reel-card">
        <video
          className="reel-video"
          controls
          controlsList="nodownload noremoteplayback noplaybackrate"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={reelVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2>10s Reel Edit</h2>
        <p>Price: 100rs</p>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </div>
  );
}

export default App;
