import { Main } from "./style.js";
import '../../index.css'

const MainContainer = (props) => {
  return <Main className="flex">{props.children}</Main>;
};

export default MainContainer;
