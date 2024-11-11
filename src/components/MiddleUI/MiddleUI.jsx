// import DragDropList from "../DragDropList/DragDropList";
import Header from "./Header";
import MichaelPic from "../../assets/artist.png";
import MusicTable from "./MusicList";

const MiddleUI = () => {
  return (
    <div className="flex h-screen flex-col items-center bg-gradient-to-b from-[#410101] to-[#1E0606] p-6 text-white">
      <Header />

      <img
        src={MichaelPic}
        alt="Michael Pic"
        width={882}
        height={452}
        className="mt-10 h-[52%] w-[88%]"
      />

      <div className="scrollbar-hide h-[36%] w-[88%] overflow-y-auto">
        <MusicTable />
      </div>
    </div>
  );
};

export default MiddleUI;
