import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./components/Main";
import PrivacyPolice from "./components/PrivacyPolicies";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/privacy-policies" element={<PrivacyPolice/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
