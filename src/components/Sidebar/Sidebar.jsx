/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { useEffect } from "react";
// import { useState } from "react";
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
      className={`flex flex-col p-1 justify-between bg-[#0E0E0E] text-white h-screen transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-60"
      }`}
    >
      {/* Collapse/Expand button */}
      <button onClick={onCollapseToggle} className="p-4 focus:outline-none">
        {isCollapsed ? (
          <img
            src={Logo}
            alt="DreamMusic Logo"
            width={44}
            height={56}
            className="relative left-1.5 h-8 w-8"
          />
        ) : (
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="DreamMusic Logo"
              width={44}
              height={56}
              className="h-8 w-8"
            />

            <span className="text-2xl font-semibold">
              <span className="text-[#FD4F4F]">Dream</span>Music
            </span>
          </div>
        )}
      </button>

      {/* Sidebar Menu */}
      <div className="flex flex-col items-start p-2">
        <span className="relative left-2 top-2 mb-2 text-xs font-semibold">
          MENU
        </span>
        <SidebarItem icon={HomeIcon} text="Home" isCollapsed={isCollapsed} />
        <SidebarItem icon={TrendIcon} text="Trends" isCollapsed={isCollapsed} />
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

      <div className="mb-6 mt-20 flex flex-col items-start p-2">
        <span className="relative left-1.5 top-2 mb-2 text-xs font-semibold">
          GENERAL
        </span>
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
  );
};

const SidebarItem = ({ icon, text, isCollapsed }) => (
  <div
    className={`flex w-full relative items-center ${
      isCollapsed ? "justify-center" : ""
    } space-x-4 p-4 hover:bg-gray-700`}
  >
    <img
      src={icon}
      alt={`${text} Icon`}
      className={`${isCollapsed ? "w-5" : "h-5 w-5"}`}
    />
    {!isCollapsed && <span className="font-medium">{text}</span>}
  </div>
);

export default Sidebar;
