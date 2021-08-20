import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Main Page</Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
    </ul>
  );
};

export default Navigation;
