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

        {/* MiddleUI - Dynamically adjusts based on Sidebar state */}
        <div className="flex-grow transition-all duration-300">
          <MiddleUI />
        </div>

        {/* MusicPlayer - Fixed position on the right */}
        <div className="fixed right-0 top-0 z-10 h-full w-[20%] bg-gray-800">
          <MusicPlayer />
        </div>
      </div>
    </MusicPlayerProvider>
  );
};
export default App;
