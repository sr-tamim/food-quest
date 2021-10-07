
import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import useCart from './hooks/useCart';

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useCart('cart');


  return (
    <CartContext.Provider value={[cart, setCart]}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/home" >
              <Home />
            </Route>
            <Route exact path="/foods" >
              <Foods />
            </Route>
            <Route path="/foods/:foodId" >
              <FoodDetails />
            </Route>
            <Route exact path="*"> <NotFoundPage /> </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
