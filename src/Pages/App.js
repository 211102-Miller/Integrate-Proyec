import Login from "../Components/Login";
import Graficas from "../Components/Graphics";
import Tablas from "../Components/Tables"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Graficas/>} />
          <Route exact path="macañico" element={<Login/>} />
          <Route exact path="Grafic" element={<Graficas/>} />
          <Route exact path="Tables" element={<Tablas/>} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
