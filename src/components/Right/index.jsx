import { Container } from "./style.js";

const RightContainer = () => {
  return (
<Container>
  <video controls>
    <source src="/../../assets/1.mp4" type='video/mp4'/>
    <source src="http://techslides.com/demos/sample-videos/small.ogv" type='video/mp4'/>
  </video>
  <video src="">
    Lo sentimos. Este vídeo no puede ser reproducido en tu navegador.<br/>
La versión descargable está disponible en <a href="URL">Enlace</a>. 
</video>
  <img src="brave_ePwsFelVZM.gif" alt="Computer man" style={{width:'48px',height:'48px'}}/>
      <h1>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </h1>
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
