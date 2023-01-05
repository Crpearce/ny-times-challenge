import { Link } from "react-router-dom";
import "./navigation.styles.css";

const Navigation = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }} className="nav-container">
      <div className="navigation">
        <h1 className='app-name'>THE NEW YORK TIMES</h1>
        <h2 className='app-sub'> NEWS READER </h2>
      </div>
    </Link>
  );
};

export default Navigation;
