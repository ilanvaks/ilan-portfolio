import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Home from './Pages/Home';
import ThreeThings from './layout/ThreeThings';
import './styles/App.scss';
import "bootstrap/dist/css/bootstrap.min.css"

export const AppContext = createContext();


function App() {
  const [showEaster360, setShowEaster360] = useState(false);
  
  return (
    <AppContext.Provider value={[showEaster360, setShowEaster360]}>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/threethings" element={<ThreeThings/>} />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
