import { Container, LinkContainer, P, PContainer, InstallIt } from "./style.js";
import {FiGithub} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiGooglemybusiness} from 'react-icons/si'
import '../../index.css'

const RightContainer = () => {
  return (
<Container className="flex-item">
  <video loop muted autoPlay>
    <source src="/assets/primera.mp4" type='video/mp4'/>
  </video>
  <PContainer>
  <P>You can pick any color on current webpage and save it to your clipboard</P>
  </PContainer>
  <video loop muted autoPlay>
    <source src="/assets/segunda.mp4" type='video/mp4'/>
  </video>
  <PContainer>
    <P><b>Safe</b> : refuses to collect your data. you are not tracked.</P>
  <P><b>Open</b> : Browser extension that is <i>open source</i> and free.</P>
  </PContainer>
  <InstallIt>So, if u need it, <span>install it</span></InstallIt>
  <a href='https://touzand.github.io/portafolio'>
  <LinkContainer>
      <FiGithub/>
    <div>
      <span>Github</span>
    <p>Report issues and feature requests.</p>
    </div>
  </LinkContainer>
  </a>
  <a href='https://touzand.github.io/portafolio'>
  <LinkContainer>
      <AiFillLinkedin/>
    <div>
      <span>LinkedIn</span>
    <p>Follow the news.</p>
    </div>
  </LinkContainer>
  </a>
  <a href='https://touzand.github.io/portafolio'>
  <LinkContainer>
      <SiGooglemybusiness/>
    <div>
      <span>Chrome Web Store</span>
    <p>Download and leave review.</p>
    </div>
  </LinkContainer>
  </a>
    </Container>
  );
};

export default RightContainer;
