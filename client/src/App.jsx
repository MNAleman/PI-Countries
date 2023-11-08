import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Views/Home/Home';
import Create from './Views/Create/Create';
import Landing from './Views/Landing/Landing';
import Detail from './Views/Detail/Detail';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* Rutas que no requieren NavBar */}
        <Route path='/' element={<Landing />} />

        {/* Rutas que requieren NavBar */}
        <Route path='/*' element={
          <>
            <NavBar />
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/create' element={<Create />} />
              <Route path='/detail' element={<Detail />} />
            </Routes>
          </>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
