import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Home from './Pages/Home';
import './styles/App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext();


function App() {
  const [showEaster360, setShowEaster360] = useState(false);
  
  return (
    <AppContext.Provider value={[showEaster360, setShowEaster360]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          limit={5}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
