import { useContext } from "react";
import { MusicPlayerContext } from "../../context/MusicPlayerContext";

const MusicPlayer = () => {
  const { currentSong, isPlaying, togglePlayPause, nextSong, prevSong } =
    useContext(MusicPlayerContext);

  return (
    <div className="h-full w-full bg-[#1B0A0A] p-6 text-white">
      <h2 className="text-lg font-bold">Now Playing</h2>
      <div className="mt-4">
        <img
          src={currentSong.image}
          alt={currentSong.title}
          className="w-full rounded-lg"
        />
        <h3 className="mt-4 text-xl">{currentSong.title}</h3>
        <p className="text-gray-300">{currentSong.artist}</p>
      </div>
      <div className="mt-6 flex items-center justify-around">
        <button onClick={prevSong}>⏮️</button>
        <button onClick={togglePlayPause}>{isPlaying ? "⏸️" : "▶️"}</button>
        <button onClick={nextSong}>⏭️</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
