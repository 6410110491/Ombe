import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './componants/Home/Home';
import TopBar from './componants/Navbar/TopBar';
import Signin from './componants/Signin';
import Login from './componants/Login';
import Create_Account from './componants/Create_Account';
import Started from './componants/Started/Started';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create_Account />} />
          <Route path="/started" element={<Started />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
