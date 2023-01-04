import { Container } from "./style.js";

const RightContainer = () => {
  return (
<Container>
  <video loop muted autoPlay>
    <source src="/assets/primera.mp4" type='video/mp4'/>
  </video>
      <h1>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </h1>
  <video loop muted autoPlay>
    <source src="/assets/segunda.mp4" type='video/mp4'/>
  </video>
      <h1>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </h1>
    </Container>
  );
};

export default RightContainer;
