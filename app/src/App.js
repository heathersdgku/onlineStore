import logo from './logo.svg';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Footer from './components/footer';
import About from './pages/about';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Catalog></Catalog>
      <About></About>

      <Footer></Footer>
    </div>
  ); 
}

export default App;
