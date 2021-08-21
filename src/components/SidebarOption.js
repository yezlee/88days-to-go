import "css/SidebarOption.css";

const SidebarOption = ({ Icon, text, active }) => {
  <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
    <Icon />
    <h2>{text}</h2>
  </div>;
};

export default SidebarOption;
