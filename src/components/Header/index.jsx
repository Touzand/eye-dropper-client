import { HeaderContainer } from "./style";

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
          Min eye-dropper.
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
