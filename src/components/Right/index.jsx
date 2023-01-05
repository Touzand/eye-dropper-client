import { Container, P, PContainer } from "./style.js";

const RightContainer = () => {
  return (
<Container>
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
    <P>Safe : refuses to collect your data. you are not tracked.</P>
  <P>Open : Browser extension that is open source and free.</P>
  </PContainer>
  <h2>So, if u need it, install it</h2>
    </Container>
  );
};

export default RightContainer;
