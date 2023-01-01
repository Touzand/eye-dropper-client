import { Container,TopHeader, Title, Quote, ChromeStoreButton } from "./style.js";
import {FiArrowUpRight} from 'react-icons/fi'

const LeftContainer = () => {
  return (
    <Container>
      <TopHeader>
        <img src="http://imgfz.com/i/OEygR5o.png" alt="Logo" className="top-header-logo"/>
        <a className="to-github" href='https://github.com/touzand/min-eye-dropper' target='_blank'>Updates and new features on github <FiArrowUpRight/></a>
      </TopHeader>
      <Title>
        User-friendly
        <span> e</span>
        <span>y</span>
        <span>e</span>
        <span>-</span>
        <span>d</span>
        <span>r</span>
        <span>o</span>
        <span>p</span>
        <span>p</span>
        <span>e</span>
        <span>r </span>
        that is extremely simple to use
      </Title>
      <Quote>
        “Even when using a different browser, it functions properly.”
      </Quote>
      <ChromeStoreButton>
        get min Eye-dropper for Chrome
      </ChromeStoreButton>
    </Container>
  );
};

export default LeftContainer;
