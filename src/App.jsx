import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MainRauter from './router/MainRauter';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <MainRauter/>
      </CartProvider>
    </div>
  );
}

export default App;