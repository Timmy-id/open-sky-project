import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/Layouts/Navbar/Navbar';
import Footer from '../src/Layouts/Footer/Footer';
import HomePage from '../src/Pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
