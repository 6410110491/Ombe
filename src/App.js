import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeMobile from './componants/Home/HomeMobile';
import Signin from './componants/Signin';
import Login from './componants/Login';
import Create_Account from './componants/Create_Account';
import Started from './componants/Started/Started';
import ProductDetail from './componants/Product/ProductDetail';
import Delivery from './componants/Delivery/Delivery';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#04764e',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
