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
import firstVidUrl from "../../../../public/assets/test-01.mp4";
import secondVidUrl from "../../../../public/assets/test-02.mp4";
import {Link} from "react-router-dom";
import "../../../index.css";

setTimeout(() => {
  document.getElementById("first-vid").src = firstVidUrl;
  document.getElementById("second-vid").src = secondVidUrl;
}, 1000);

const RightContainer = () => {
  return (
    <Container className="flex-item">
      <video loop muted autoPlay id="first-vid" src=""></video>
      <PContainer>
        <P>
          You can pick any color on current webpage and save it to your
          clipboard
        </P>
      </PContainer>
      <video loop muted autoPlay id="second-vid" src=""></video>
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
        <RightsReserved>© 2022-2023 All rights reserved (<Link to='eye-dropper-client/privacy-policies'>Privacy Police</Link>)</RightsReserved>
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