import { Link } from "react-router-dom";

import "./navigation.styles.css";

const Navigation = () => {
  return (
    <Link to="/" className="nav-container">
      <div className="navigation">
        <h1>THE NEW YORK TIMES</h1>
        <h2> NEWS READER </h2>
      </div>
    </Link>
  );
};

export default Navigation;
