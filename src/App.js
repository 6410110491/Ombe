import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeMobile from './componants/Home/HomeMobile';
import Signin from './componants/Signin';
import Login from './componants/Login';
import Create_Account from './componants/Create_Account';
import Started from './componants/Started/Started';
import ProductDetail from './componants/Product/ProductDetail';
import Delivery from './componants/Delivery/Delivery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeMobile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create_Account />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/derivery" element={<Delivery />} />
          <Route path="/started" element={<Started />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
