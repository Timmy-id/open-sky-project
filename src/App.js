import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/Layouts/Navbar/Navbar';
import Footer from '../src/Layouts/Footer/Footer';
import HomePage from '../src/Pages/HomePage';
import LoginPage from '../src/Pages/LoginPage';
import DashboardPage from '../src/Pages/DashboardPage';
import NotFoundPage from '../src/Pages/NotFoundPage';
import ProtectedRoute from '../src/Components/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashboardPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
