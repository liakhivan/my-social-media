import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
