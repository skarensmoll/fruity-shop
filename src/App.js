import './App.css';
import Home from './pages/Products/Products';
import Header from './components/Header';
import GlobalContext from './context/GlobalContext';


function App() {
  return (
    <GlobalContext>
      <div className="App">
        <Header />
        <Home />
      </div>
    </GlobalContext>
  );
}

export default App;
