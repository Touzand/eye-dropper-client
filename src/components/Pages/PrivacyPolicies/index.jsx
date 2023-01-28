import {
  Container,
  P,
  Section,
  Subtitle,
  Title,
  LinkContainer,
  LinkGeneralContainer,
  MadeBy,
} from "./style";
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGooglemybusiness } from "react-icons/si";

const PrivacyPolice = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Section>
        <Subtitle>Personal data</Subtitle>
        <P>
          <b>Mint Eye-Dropper</b> has never and will never collect personal information
          such as browsing history, clicks, etc.
        </P>
        <P>
          Future versions of <strong>Min Eye-Dropper</strong> may store your
          chosen color preferences and extension settings (except any data which
          can help identify user). Such information may be utilized to make
          judgments about adding or removing features and to learn some
          interesting or valuable information about the chosen colors. Only with
          your consent will it be carried out.
        </P>
      </Section>
      <Section>
        <Subtitle>Third party services</Subtitle>
        <P>
          <b>Mint Eye-Dropper</b> stores color history using the Web Storage API
          (localStorage) and Chrome's (Chromium's) Storage Sync API.
        </P>
      </Section>
      <LinkGeneralContainer>
        <div className="sub-links">
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
          <a
            href="https://chrome.google.com/webstore/detail/min-eye-dropper/hinpodljbkkppgfdjcbjbhalockpcaai?hl=pt-br"
            target="_blank"
          >
            <LinkContainer>
              <SiGooglemybusiness />
              <div>
                <span>Chrome Web Store</span>
                <p>Download and leave review.</p>
              </div>
            </LinkContainer>
          </a>
        </div>
      </LinkGeneralContainer>
      <MadeBy>
        Made by{" "}
        <a href="https://touzand.github.io/portafolio" target="_blank">
          Alan G. Alonso ( Touzand )
        </a>{" "}
        a few seconds ago
      </MadeBy>
    </Container>
  );
};

export default PrivacyPolice;
