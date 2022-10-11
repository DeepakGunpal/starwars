import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Screen1 />} />
          <Route path='/details' element={<Screen2 />} >
            <Route path=':charId' element={<Screen2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
