import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import logo from './logo.svg';
import './App.css';
import Routing from "./components/Routing";

function App() {
  return (
    <div className="App">
      <Routing/>
    </div>
  );
}

export default App;

/*
  
  .character {
    width: 100%;
    opacity: 0;i
    transition: all 0.5s;
    position: absolute;
    z-index: -1;
  }
  
  .card:hover .character {
    opacity: 1;
    transform: translate3d(0%, -30%, 100px);
  }
  */