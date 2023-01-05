
import './App.css';
import img from './download.jpg';
import Home from './home';
import About from './about'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
   </div>
 );
}

export default App;
