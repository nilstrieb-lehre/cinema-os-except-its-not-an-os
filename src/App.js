import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import {Container} from 'react-bootstrap';
import WelcomeScreen from './welcome/WelcomeScreen';
import {Route, Routes} from 'react-router-dom';
import Navigation from './common/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Container>
        <Routes>
          <Route path="/" element={<WelcomeScreen/>}/>
          {/*TODO: add more routes*/}
        </Routes>
      </Container>
    </>
  );
}

export default App;
