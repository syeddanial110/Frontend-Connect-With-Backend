// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ApiFetch from './Components/ApiFetch';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  return (
    <div >
      {/* <ApiFetch /> */}
      <Router >
<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api/products' element={<Shop />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
