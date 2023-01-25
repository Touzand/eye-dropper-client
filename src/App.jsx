import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./components/Main";
import PrivacyPolice from "./components/PrivacyPolicies";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/eye-dropper-client/home" element={<MainContainer />} />
          <Route path="/" element={<PrivacyPolice />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
