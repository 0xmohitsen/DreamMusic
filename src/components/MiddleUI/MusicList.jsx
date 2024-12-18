import M1Image from "../../assets/m1.png";
import M2Image from "../../assets/m2.png";
import M3Image from "../../assets/m3.png";

const MusicTable = () => {
  const songs = [
    {
      rank: 1,
      title: "Billie Jean",
      plays: "1.040.811.084",
      time: "4:53",
      album: "Thriller 25 Sup...",
      cover: M1Image, // Replace with the real cover image URL
    },
    {
      rank: 2,
      title: "Beat It",
      plays: "643.786.045",
      time: "4:18",
      album: "Thriller 25 Sup...",
      cover: M1Image,
      isPlaying: true, // Highlight the row
    },
    {
      rank: 3,
      title: "Smooth Criminal - 2012 Remas...",
      plays: "407.234.004",
      time: "4:17",
      album: "Thriller 25 Sup...",
      cover: M2Image,
    },
    {
      rank: 4,
      title: "Don't Stop 'Til You Get Enough",
      plays: "316.391.952",
      time: "6:05",
      album: "Bad 25th Anni...",
      cover: M3Image,
    },
    {
      rank: 5,
      title: "Rock With You - Single Version",
      plays: "268.187.218",
      time: "3:40",
      album: "Off The Wall",
      cover: M3Image,
    },
  ];

  return (
    <div className="mx-auto mt-8 max-w-5xl text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#F6F6F6]">Popular</h2>
        <button className="text-sm font-semibold text-[#CFC5C5]">
          See All
        </button>
      </div>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="text-sm text-[#CFC5C5]">
            <th className="w-12 p-2">#</th>
            <th className="w-1/2 p-2">TITLE</th>
            <th className="w-40 p-2">PLAYING</th>
            <th className="w-20 p-2">TIME</th>
            <th className="w-40 p-2">ALBUM</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr
              key={index}
              className={`${
                song.isPlaying ? "bg-red-800" : "hover:bg-gray-700"
              }`}
            >
              <td className="p-2">{song.rank}</td>
              <td className="flex items-center gap-4 p-2">
                <img
                  src={song.cover}
                  alt={`${song.title} Cover`}
                  className="h-10 w-10 rounded-md"
                />
                <span>{song.title}</span>
              </td>
              <td className="p-2">{song.plays}</td>
              <td className="p-2">{song.time}</td>
              <td className="p-2">{song.album}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;
