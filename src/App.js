
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import useCart from './hooks/useCart/useCart';

function App() {
  const [cart, setCart] = useCart();
  // useEffect(() => getCartFromDB(setCart), []);
  console.log(cart);

  return (
    <div className="App">
      <Router>
        <Header cart={cart} />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route exact path="/foods" >
            <Foods useCart={[cart, setCart]} />
          </Route>
          <Route path="/foods/:foodId" >
            <FoodDetails />
          </Route>
          <Route exact path="*"> <NotFoundPage /> </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
