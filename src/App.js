import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './componants/Home/Home';
import TopBar from './componants/Navbar/TopBar';
import Signin from './componants/Signin';
import Login from './componants/Login';
import Create_Account from './componants/Create_Account';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/create" element={<Create_Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
