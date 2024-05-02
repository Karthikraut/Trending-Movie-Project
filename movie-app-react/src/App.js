import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App bg-[#1F1E24] h-screen flex w-screen overflow-x-hidden">
     <Home/>
    </div>
    </BrowserRouter>
  );
}

export default App;
