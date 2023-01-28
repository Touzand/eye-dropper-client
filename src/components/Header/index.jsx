import { Link } from "react-router-dom";
import { HeaderContainer, LinkPage } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="sub-header">
        <div className="right">
          <img
            src="http://imgfz.com/i/OEygR5o.png"
            alt="Logo"
            className="top-header-logo"
          />
          Min eye dropper
        </div>
        <div className="left buttons">
          <a href="/eye-dropper-client/">Home</a>
          <Link to="/eye-dropper-client/privacy-policy">Privacy Police</Link>
          <Link className="not-found" to="">Help</Link>
          <Link className="not-found" to="">Change logs</Link>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
