import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <Navbar></Navbar>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/about" component={About} /> */}
      </div>
    </Router>

    </div>
  );
}

export default App;
