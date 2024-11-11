// import { useContext } from "react";
// import { MusicPlayerContext } from "../../context/MusicPlayerContext";
import MusicCard from "./MusicCard";
import Song1 from "../../assets/Tum_Ho_Paas_Mere.mp3";
import Song2 from "../../assets/Tum_Hi_Ho.mp3";
import Song3 from "../../assets/Bekhayali.mp3";

const MusicPlayer = () => {
  // const { currentSong, isPlaying, togglePlayPause, nextSong, prevSong } =
  //   useContext(MusicPlayerContext);
  const songs = [
    { id: 1, title: "Tum ho", url: Song1 },
    { id: 2, title: "Tum hi ho", url: Song2 },
    { id: 3, title: "Bekhayali", url: Song3 },
  ];
  return (
    <div className="relative z-30 h-screen w-full bg-gradient-to-b from-[#220909] to-[#140C0C] p-6 text-white">
      <div className="absolute bottom-0 left-0 w-full p-6">
        <MusicCard songs={songs} />
      </div>
    </div>
  );
};

export default MusicPlayer;
