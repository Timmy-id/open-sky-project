import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/Layouts/Navbar/Navbar';
import Footer from '../src/Layouts/Footer/Footer';
import HomePage from '../src/Pages/HomePage';
import LoginPage from '../src/Pages/LoginPage';
import DashboardPage from '../src/Pages/DashboardPage';
import NotFoundPage from '../src/Pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/dashboard' element={<DashboardPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
