import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './componants/Home/Home';
import TopBar from './componants/Navbar/TopBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
