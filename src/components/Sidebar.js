import { Link } from "react-router-dom";
import "css/Sidebar.css";

import SidebarOption from "./SidebarOption";

import HomeIcon from "@material-ui/icons/Home";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>
      <Link to="/">
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>
      <Link to="/">
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>
      <Link to="/">
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>

      <Link to="/">Login</Link>
    </div>
  );
};

export default Sidebar;
