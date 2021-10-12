
import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import UserPage from './components/UserPage/UserPage';
import useCart from './hooks/useCart';
import initializeFirebase from './Firebase/firebase-init';
import UserProfile from './components/UserProfile/UserProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserContext from './components/UserContext/UserContext';
import useFirebase from './hooks/useFirebase';
import Checkout from './components/Checkout/Checkout';

export const CartContext = createContext();

// get authentication
initializeFirebase(); // initialize firebase app

function App() {
  const [cart, setCart] = useCart({});
  const { currentUser } = useFirebase().auth;

  return (
    <UserContext>
      <div className="App">
        <CartContext.Provider value={[cart, setCart]}>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route path="/home" >
                <Home />
              </Route>
              <Route path="/user" >
                {!currentUser ? <UserPage /> : <Redirect to="/profile" />}
              </Route>
              <PrivateRoute path="/profile" >
                <UserProfile />
              </PrivateRoute>
              <Route exact path="/foods" >
                <Foods />
              </Route>
              <Route path="/foods/:foodId" >
                <FoodDetails />
              </Route>
              <PrivateRoute path="/checkout" >
                <Checkout />
              </PrivateRoute>
              <Route path="*"> <NotFoundPage /> </Route>
            </Switch>
          </Router>
        </CartContext.Provider>
        <Footer />
      </div>
    </UserContext>
  );
}

export default App;
