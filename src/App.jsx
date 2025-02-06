import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from "./components/Footer"
import FetchCSVData from './utils/fetchGooglSheet';
import Navbar from "./components/Navbar"
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetchCsvData" element={<FetchCSVData />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
