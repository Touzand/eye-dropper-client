import { FiArrowUpRight } from "react-icons/fi";
import { TiArrowLeftThick } from "react-icons/ti";
import { SiGooglechrome } from "react-icons/si";
import "../../../index.css";

import {
  Container,
  TopHeader,
  Title,
  Quote,
  ChromeStoreButton,
  RightsReserved,
  FooterLeft,
  MadeBy,
  ChromeStoreButtonContainer,
} from "./style.js";

const LeftContainer = () => {
  return (
    <Container className="flex-item">
      <TopHeader>
        <img
          src="http://imgfz.com/i/OEygR5o.png"
          alt="Logo"
          className="top-header-logo"
        />
        <a
          className="to-github"
          href="https://github.com/touzand/eye-dropper"
          target="_blank"
        >
          Updates and new features on github <FiArrowUpRight />
        </a>
      </TopHeader>
      <Title>
        User-friendly
        <br />
        <span> E</span>
        <span>y</span>
        <span>e</span>
        <span>-</span>
        <span>d</span>
        <span>r</span>
        <span>o</span>
        <span>p</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
        <span> </span>
        that is extremely simple to use.
      </Title>
      <Quote>
        “Even when using a different browser, it functions properly.”
      </Quote>
      <ChromeStoreButtonContainer>
        <ChromeStoreButton
          href="https://touzand.github.io/portafolio"
          target="_blank"
        >
          <SiGooglechrome />
        </ChromeStoreButton>
        <div>
          <TiArrowLeftThick />
          <h2>Get Min Eye-dropper for Chrome</h2>
        </div>
      </ChromeStoreButtonContainer>
      <FooterLeft>
        <RightsReserved>© 2022-2023 All rights reserved (<a href='/eye-dropper-client/'>Privacy Police</a>)</RightsReserved>
        <MadeBy>
          Made by{" "}
          <a href="https://touzand.github.io/portafolio" target="_blank">
            Alan G. Alonso ( Touzand )
          </a>
          a few seconds ago
        </MadeBy>
      </FooterLeft>
    </Container>
  );
};

export default LeftContainer;
