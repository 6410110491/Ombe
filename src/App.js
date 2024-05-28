import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './componants/Home';
import Signin from './componants/Signin';
import Login from './componants/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
