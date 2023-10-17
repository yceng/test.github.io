import './App.css';
import { Router,Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Layout from './Layout';
import Page3 from './page3';


function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/page3" element={<Page3/>}/>
      </Route>

    </Routes>
  );
}

export default App;
