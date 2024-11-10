import Logo from "../../assets/logo.png";
import HomeIcon from "../../assets/home.png";
import TrendIcon from "../../assets/trend.png";
import LibraryIcon from "../../assets/music.png";
import DiscoverIcon from "../../assets/discover.png";
import SettingsIcon from "../../assets/settings.png";
import LogOutIcon from "../../assets/logout.png";

const Sidebar = ({ isCollapsed, onCollapseToggle }) => {
  return (
    <div
      className={`flex flex-col p-3 justify-between bg-[#0E0E0E] text-white h-screen transition-all duration-300 ${
        isCollapsed ? "w-20 items-center" : "w-72"
      }`}
    >
      {/* Collapse/Expand button */}
      <button onClick={onCollapseToggle} className="flex h-12 items-center p-4">
        {isCollapsed ? (
          <img src={Logo} alt="DreamMusic Logo" className="h-8" />
        ) : (
          <div className="flex items-center gap-3">
            <img src={Logo} alt="DreamMusic Logo" className="h-8" />
            <span className="text-2xl font-semibold">
              <span className="text-[#FD4F4F]">Dream</span>Music
            </span>
          </div>
        )}
      </button>

      {/* Sidebar Menu */}
      <div className="flex flex-grow flex-col">
        <div className="mt-10 flex flex-col">
          <span
            className={`px-6 py-2 relative text-xs font-semibold ${
              isCollapsed ? "left-2" : ""
            }`}
          >
            MENU
          </span>
          <SidebarItem icon={HomeIcon} text="Home" isCollapsed={isCollapsed} />
          <SidebarItem
            icon={TrendIcon}
            text="Trends"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={LibraryIcon}
            text="Library"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={DiscoverIcon}
            text="Discover"
            isCollapsed={isCollapsed}
          />
        </div>

        <div className="mb-6 mt-auto">
          <span className="px-6 py-2 text-xs font-semibold">GENERAL</span>
          <SidebarItem
            icon={SettingsIcon}
            text="Settings"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={LogOutIcon}
            text="Log Out"
            isCollapsed={isCollapsed}
          />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, isCollapsed }) => (
  <div
    className={`flex space-x-4 items-center px-6 py-4 hover:bg-gray-900 transition-colors cursor-pointer ${
      isCollapsed ? "justify-center px-3" : ""
    }`}
  >
    <img
      src={icon}
      alt={`${text} Icon`}
      className={`${text == "Trends" ? "h-4" : "h-5"}`}
    />
    {!isCollapsed && <span className="font-medium">{text}</span>}
  </div>
);

export default Sidebar;
