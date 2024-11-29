import './index.css';
import { BrowserRouter as Router,Routes, Route,useLocation} from 'react-router-dom';

// Components
import Home from "./components/Home/Home";
import About from './components/About/About';
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Application from "./components/Application/Application";
import NotFound from './components/Notfound';

function Main() {

  const location = useLocation();

  return (
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/application' element ={<Application />} />
          <Route path="/notfound" element ={<NotFound />} />
        </Routes>
  );
}

const App = () => (
  <div className="App">
  <Router>
    <Main />
  </Router>
  </div>
);


export default App;
