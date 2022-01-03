import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import { Container } from "react-bootstrap";
import WelcomeScreen from "./welcome/WelcomeScreen";
import { Route, Routes } from "react-router-dom";
import ToiletRadar from "./lavatory/ToiletRadar";
import Navigation from "./common/Navigation";
import SnacksScreen from "./snacks/SnacksScreen";

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/lavatory" element={<ToiletRadar />} />
          <Route path="/snacks" element={<SnacksScreen />} />
          <Route path="/" element={<WelcomeScreen />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
