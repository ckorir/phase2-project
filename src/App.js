import './App.css';
import Navbar from './components/Navbar';
import CurrencyCollection from './components/CurrencyCollection';
import WatchList from './components/WatchList';

function App() {
  return (
    <div className="App">
      <Navbar />
     
      <CurrencyCollection />
      
    </div>
  );
}

export default App;
