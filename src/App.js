import './App.css';
import Home from './pages/Products/Products';
import Header from './components/Layout/Header';
import GlobalContext from './context/GlobalContext';
import CartCheckout from './components/Cart/CartCheckout';


function App() {
  return (
    <GlobalContext>
      <Header />
      <main>
        <Home />
        <CartCheckout />
      </main>
    </GlobalContext>
  );
}

export default App;
