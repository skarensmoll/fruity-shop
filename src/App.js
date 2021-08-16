import './App.css';
import Home from './pages/Products/Products';
import Header from './components/Layout/Header';
import GlobalContext from './context/GlobalContext';


function App() {
  return (
    <GlobalContext>
      <Header />
      <main>
        <Home />
      </main>
    </GlobalContext>
  );
}

export default App;
