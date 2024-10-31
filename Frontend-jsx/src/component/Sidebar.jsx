// src/components/Sidebar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaWallet,
  FaCalendarAlt,
  FaBars,
  FaHome,
  FaClipboardList,
  FaBell,
  FaShieldAlt,
  FaTasks,
  FaChevronLeft,
  FaChevronRight,
  FaRobot,
  FaUserCircle,
} from "react-icons/fa"; // Import additional icons

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-gray-800 z-20 text-white ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all min-h-screen`}
    >
      <div className="flex items-center justify-between p-4">
        <span
          className="text-xl font-bold flex items-center cursor-pointer"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <FaChevronRight />
          ) : (
            <>
              <span>ColabCube User</span>
              <FaChevronLeft className="ml-2" />
            </>
          )}
        </span>
      </div>
      <ul className="mt-4">
        {/* Home Link */}
        <li className="flex items-center p-4 hover:bg-gray-700">
          <Link to="/home" className="flex items-center">
            <FaHome className={`${isCollapsed ? "mx-auto" : "mr-2"}`} />
            {!isCollapsed && <span>Home</span>}
          </Link>
        </li>

        {/* Users Link */}
        <li className="flex items-center p-4 hover:bg-gray-700">
          <Link to="/virtualai" className="flex items-center">
            <FaUsers className={`${isCollapsed ? "mx-auto" : "mr-2"}`} />
            {!isCollapsed && <span>Virtual AI</span>}
          </Link>
        </li>

        {/* Evnets Link */}
        <li className="flex items-center p-4 hover:bg-gray-700">
          <Link to="/masabot" className="flex items-center">
            <FaCalendarAlt className={`${isCollapsed ? "mx-auto" : "mr-2"}`} />
            {!isCollapsed && <span>Masa Twitter Bot</span>}
          </Link>
        </li>

        {/* Tokens Management Link */}
        <li className="flex items-center p-4 hover:bg-gray-700">
          <Link to="/tokens" className="flex items-center">
            <FaWallet className={`${isCollapsed ? "mx-auto" : "mr-2"}`} />
            {!isCollapsed && <span>Tokens & Rewards</span>}
          </Link>
        </li>

        <li className="flex items-center p-4 hover:bg-gray-700">
          <Link to="/notes" className="flex items-center">
            <FaClipboardList
              className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
            />
            {!isCollapsed && <span>Notes</span>}
          </Link>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700">
          <Link to="/tasks" className="flex items-center">
            <FaClipboardList
              className={`${isCollapsed ? "mx-auto" : "mr-2"}`}
            />
            {!isCollapsed && <span>Tasks</span>}
          </Link>
        </li>

        <li className="flex items-center p-4 hover:bg-gray-700">
          <Link to="/meetings" className="flex items-center">
            <FaBell className={`${isCollapsed ? "mx-auto" : "mr-2"}`} />
            {!isCollapsed && <span>Meetings</span>}
          </Link>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700">
          <Link to="/events" className="flex items-center">
            <FaBell className={`${isCollapsed ? "mx-auto" : "mr-2"}`} />
            {!isCollapsed && <span>Events</span>}
          </Link>
        </li>

        <li className="flex items-center p-4 hover:bg-gray-700">
          <Link to="/content" className="flex items-center">
            <FaRobot className={`${isCollapsed ? "mx-auto" : "mr-2"}`} />{" "}
            {!isCollapsed && <span>Content Platform</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
