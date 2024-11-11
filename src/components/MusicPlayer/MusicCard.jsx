import MichaelImage from "../../assets/michael2.png";
import LoopImage from "../../assets/loop.png";
import PrevImage from "../../assets/prev.png";
import NextImage from "../../assets/next.png";
import PauseImage from "../../assets/pause.png";
import PlayImage from "../../assets/play.png";
import ShuffleImage from "../../assets/shuffle.png";
import { Howl } from "howler";
import { useState } from "react";
import { useEffect } from "react";

const MusicCard = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    if (songs.length > 0) {
      loadSong(songs[0]);
    }
  }, [songs]);

  const startProgressTimer = (howlInstance) => {
    if (howlInstance) {
      // Clear any existing timer to prevent multiple timers
      clearInterval(window.progressInterval);

      // Set an interval to update the current time every second
      window.progressInterval = setInterval(() => {
        setCurrentTime(howlInstance.seek()); // Update the current playback position
      }, 1000);
    }
  };

  console.log("State of the isPlaying :", isPlaying);

  useEffect(() => {
    return () => {
      // Cleanup the timer when the component unmounts
      clearInterval(window.progressInterval);
    };
  }, []);

  useEffect(() => {
    if (sound) {
      const interval = setInterval(() => {
        setSliderValue(sound.seek()); // Sync slider with the current playback position
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [sound]);

  const loadSong = (song) => {
    if (sound) {
      sound.stop(); // Stop the currently playing song
    }

    const newSound = new Howl({
      src: [song.url],
      html5: true,
      onend: () => {
        playNextSong(); // Automatically play the next song
      },
    });

    newSound.once("load", () => {
      setDuration(newSound.duration()); // Set the song's duration once loaded
    });

    setSound(newSound);
    setCurrentSong(song);
    newSound.play();
    // setIsPlaying(true);
    startProgressTimer(newSound);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSliderChange = (event) => {
    const value = Number(event.target.value);
    setSliderValue(value); // Update the slider value state
  };

  const handleSliderRelease = () => {
    if (sound) {
      sound.seek(sliderValue); // Seek to the new position in seconds
      setCurrentTime(sliderValue); // Update the current time state
    }
  };

  const togglePlayPause = () => {
    console.log("Toggle play pause is clicked ");
    if (sound) {
      if (isPlaying) {
        console.log("Sound is paused");
        sound.pause();
      } else {
        console.log("Sound is played");
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNextSong = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (currentIndex < songs.length - 1) {
      loadSong(songs[currentIndex + 1]);
      setIsPlaying(true);
    } else {
      loadSong(songs[0]); // Loop back to the first song
    }
  };

  const playPreviousSong = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (currentIndex > 0) {
      loadSong(songs[currentIndex - 1]);
      setIsPlaying(true);
    }
  };

  return (
    <div className="mx-auto max-w-sm rounded-lg bg-[#6B0000] p-6 text-white shadow-lg">
      {/* Now Playing Header */}
      <h3 className="mb-4 text-center text-sm font-semibold">Now Playing</h3>

      {/* Album Cover */}
      <div className="mb-4">
        <img
          src={MichaelImage} // Replace with your image
          alt="Beat It Cover"
          className="w-full rounded-md"
        />
      </div>

      {/* Song Title and Artist */}
      <div className="mb-4 text-center">
        <h2 className="text-lg font-bold">{currentSong?.title}</h2>
        <p className="text-sm text-gray-300">Michael Jackson</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="mb-1 flex flex-col justify-between text-xs text-gray-300">
            <div className="flex items-center justify-between gap-2">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                className="h-1 w-full rounded-full bg-gray-900"
                min="0"
                max={duration || 0}
                value={sliderValue}
                step="0.1"
                onChange={handleSliderChange}
                onMouseUp={handleSliderRelease}
                onTouchEnd={handleSliderRelease}
              />
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        {/* <div className="h-1 w-full rounded-full bg-gray-600">
          <div
            className="h-1 rounded-full bg-white"
            style={{ width: "50%" }} // Adjust width dynamically
          ></div>
        </div> */}
      </div>

      {/* Player Controls */}
      <div className="flex items-center justify-between text-2xl">
        <button className="text-gray-300 hover:text-white">
          <img
            src={LoopImage} // Replace with your image
            alt="Beat It Cover"
            className="w-full rounded-md"
          />{" "}
          {/* Replace with an actual icon */}
        </button>
        <button
          onClick={playPreviousSong}
          className="text-gray-300 hover:text-white"
        >
          <img
            src={PrevImage} // Replace with your image
            alt="Beat It Cover"
            className="w-full rounded-md"
          />{" "}
          {/* Replace with an actual icon */}
        </button>
        <button
          onClick={togglePlayPause}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#480000]"
        >
          {isPlaying ? (
            <img
              src={PauseImage} // Replace with your image
              alt="Beat It Cover"
              className="h-8 rounded-md"
            />
          ) : (
            <img
              src={PlayImage} // Replace with your image
              alt="Beat It Cover"
              className="h-8 rounded-md"
            />
          )}
          {/* Replace with an actual icon */}
        </button>
        <button
          onClick={playNextSong}
          className="text-gray-300 hover:text-white"
        >
          <img
            src={NextImage} // Replace with your image
            alt="Beat It Cover"
            className="w-full rounded-md"
          />{" "}
          {/* Replace with an actual icon */}
        </button>
        <button className="text-gray-300 hover:text-white">
          <img
            src={ShuffleImage} // Replace with your image
            alt="Beat It Cover"
            className="h-5 w-full rounded-md"
          />
          {/* Replace with an actual icon */}
        </button>
      </div>
    </div>
  );
};

export default MusicCard;
