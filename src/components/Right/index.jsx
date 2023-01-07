import {
  Container,
  LinkContainer,
  P,
  PContainer,
  InstallIt,
  RightsReserved,
  MadeBy,
  FooterRight,
} from "./style.js";
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGooglemybusiness } from "react-icons/si";
import "../../index.css";

const RightContainer = () => {
  return (
    <Container className="flex-item">
      <video loop muted autoPlay>
        <source src="/assets/primera.mp4" type="video/mp4" />
      </video>
      <PContainer>
        <P>
          You can pick any color on current webpage and save it to your
          clipboard
        </P>
      </PContainer>
      <video loop muted autoPlay>
        <source src="/assets/segunda.mp4" type="video/mp4" />
      </video>
      <PContainer>
        <P>
          <b>Safe</b> : refuses to collect your data. you are not tracked.
        </P>
        <P>
          <b>Open</b> : Browser extension that is <i>open source</i> and free.
        </P>
      </PContainer>
      <InstallIt>
        So, if u need it, <span>install it</span>
      </InstallIt>
      <a href="https://github.com/Touzand/eye-dropper" target="_blank">
        <LinkContainer>
          <FiGithub />
          <div>
            <span>Github</span>
            <p>Report issues and feature requests.</p>
          </div>
        </LinkContainer>
      </a>
      <a href="https://www.linkedin.com/in/alangalonso/" target="_blank">
        <LinkContainer>
          <AiFillLinkedin />
          <div>
            <span>LinkedIn</span>
            <p>Follow the news.</p>
          </div>
        </LinkContainer>
      </a>
      <a href="https://touzand.github.io/portafolio" target="_blank">
        <LinkContainer>
          <SiGooglemybusiness />
          <div>
            <span>Chrome Web Store</span>
            <p>Download and leave review.</p>
          </div>
        </LinkContainer>
      </a>
      <FooterRight>
        <RightsReserved>© 2022-2023 All rights reserved</RightsReserved>
        <MadeBy>
          Made by{" "}
          <a href="https://touzand.github.io/portafolio" target="_blank">
            Alan G. Alonso ( Touzand )
          </a>
          a few seconds ago
        </MadeBy>
      </FooterRight>
    </Container>
  );
};

export default RightContainer;
