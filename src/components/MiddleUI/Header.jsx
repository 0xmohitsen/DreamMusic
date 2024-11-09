import SearchIcon from "../../assets/search.png";

const Header = () => {
  return (
    <>
      <header className="flex gap-[356px]">
        <nav className="">
          <ul className="flex items-center justify-center gap-16 font-medium">
            <li>Music</li>
            <li>Podcast</li>
            <li>Live</li>
            <li>Radio</li>
          </ul>
        </nav>

        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Michael Jackson"
            className="rounded-3xl bg-[#2C0000] p-1"
          />
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="relative bottom-[1px] right-7 h-4 w-4 cursor-pointer"
            width={27}
            height={27}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
