import './App.css';
import { Home } from './pages/Home';
import { Routes,Route } from "react-router-dom";
import { Proudate } from './pages/Proudate';
import { Order } from './pages/Order';



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/proudate' element={<Proudate/>}/>
      <Route path='/Order/:idprd' element={<Order/>}/>
      <Route path='/Order' element={<Order/>}/>

    </Routes>
    </>
  );
}

export default App;
