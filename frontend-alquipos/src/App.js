import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home.jsx';
import MainPage from "./components/MainPage/MainPage.jsx"
import Inventario from './components/Inventario/Inventario.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          |<Route path="/" element={<Home />} />
          <Route path="/Main" element={<MainPage />} />
          <Route path="/Inventario" element={<Inventario />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
