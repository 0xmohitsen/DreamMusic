import SearchIcon from "../../assets/search.png";

const Header = () => {
  return (
    <header className="relative z-20 flex gap-[572px]">
      <nav className="flex items-center">
        <ul className="absolute left-10 flex items-center justify-center gap-16 font-semibold">
          <li className="cursor-pointer">Music</li>
          <li className="cursor-pointer">Podcast</li>
          <li className="cursor-pointer">Live</li>
          <li className="cursor-pointer">Radio</li>
        </ul>
      </nav>

      <div className="relative right-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Michael Jackson"
          className="relative z-10 w-96 rounded-3xl bg-[#2C0000] p-1.5 placeholder:text-white focus:outline-none"
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="relative bottom-[1px] right-7 z-30 h-4 w-4 cursor-pointer"
          width={27}
          height={27}
        />
      </div>
    </header>
  );
};

export default Header;
