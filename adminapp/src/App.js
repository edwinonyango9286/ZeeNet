import './App.css';
import "./index.css"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import ResestPassword from './Pages/ResestPassword';
import ForgotPassword from './Pages/ForgotPassword';
import Dashboard from './Pages/Dashboard';
import MainLayout from './Components/MainLayout';

function App() {
  return (
    <>
    
     <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reset-password' element={<ResestPassword/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='admin' element={<MainLayout/>}/>
        <Route>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
