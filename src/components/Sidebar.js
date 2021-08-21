import { Link } from "react-router-dom";
import "css/Sidebar.css";

import SidebarOption from "./SidebarOption";

import HomeIcon from "@material-ui/icons/Home";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <SidebarOption active Icon={HomeIcon} text="Home" />
          </Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
