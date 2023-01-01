import LeftContainer from "./components/Left";
import MainContainer from "./components/Main";
import RightContainer from "./components/Right";

const App = () => {
return (
<div>
  <MainContainer>
    <LeftContainer/>
    <RightContainer/>
  </MainContainer>
</div>
);
};

export default App;
