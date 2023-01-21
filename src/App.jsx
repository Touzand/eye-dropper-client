import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./components/Main";
import PrivacyPolice from "./components/PrivacyPolicies";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/eye-dropper-client/home" element={<MainContainer />} />
          <Route path="/" element={<PrivacyPolice />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
