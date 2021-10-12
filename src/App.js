
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
import UserProfile from './components/UserProfile/UserProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import AuthContext from './components/AuthContext/AuthContext';
import useFirebase from './hooks/useFirebase';

export const CartContext = createContext();


function App() {

  const [cart, setCart] = useCart({});
  const { currentUser } = useFirebase().auth;

  return (
    <AuthContext>
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
    </AuthContext>
  );
}

export default App;
