// import Logo from "./assets/logo.png";
import { useState } from "react";
import MiddleUI from "./components/MiddleUI/MiddleUI";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Sidebar from "./components/Sidebar/Sidebar";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <MusicPlayerProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onCollapseToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* MiddleUI */}
        <div
          className={`transition-all duration-300 ${
            isSidebarCollapsed ? "w-[calc(80%-16px)]" : "w-[calc(80%-60px)]"
          }`}
        >
          <MiddleUI />
        </div>

        {/* MusicPlayer */}
        <div className="w-1/5 bg-gray-800">
          <MusicPlayer />
        </div>
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
