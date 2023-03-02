import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            {/* <Route path='/' element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/checkout' element={<Checkout/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
