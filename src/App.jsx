import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MainRauter from './router/MainRauter';
import { CartProviden } from './context/CartContext';

function App() {

  return (
    <div className="App">
      <CartProviden>
        <MainRauter/>
      </CartProviden>
    </div>
  );
}

export default App;