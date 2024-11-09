/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { Howl } from "howler";
import { useEffect } from "react";

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState({
    title: "Billie Jean",
    artist: "Michael Jackson",
    url: "https://example.com/billie-jean.mp3",
    image: "https://example.com/billie-jean.jpg",
  });
  useEffect(() => {}, [setCurrentSong]);
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Howl({ src: [currentSong.url] });

  const togglePlayPause = () => {
    if (isPlaying) sound.pause();
    else sound.play();
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    // Logic for next song
  };

  const prevSong = () => {
    // Logic for previous song
  };

  return (
    <MusicPlayerContext.Provider
      value={{ currentSong, isPlaying, togglePlayPause, nextSong, prevSong }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
