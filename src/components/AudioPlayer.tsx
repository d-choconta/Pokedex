import * as React from "react";

const AudioPlayer: React.FC = () => {
  return (
    <div style={{ width: 0, height: 0, overflow: "hidden", position: "absolute" }}>
      <iframe
        width="1"
        height="1"
        src="https://www.youtube.com/embed/tzb2nGOwXpI?autoplay=1&loop=1&playlist=tzb2nGOwXpI"
        title="YouTube audio player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

export default AudioPlayer;
