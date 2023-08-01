import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Header" element={<Header/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
