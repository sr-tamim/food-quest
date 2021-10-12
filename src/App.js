
import { createContext, useState } from 'react';
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
import Checkout from './components/Checkout/Checkout';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

export const CartContext = createContext();
export const UserContext = createContext();

// get authentication
initializeFirebase(); // initialize firebase app
const auth = getAuth();

function App() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (usr) => {
    if (usr) { setUser(usr) }
    else if (Object.keys(user).length) {
      setUser({})
      /*if usr is null but user is not {} then set user as {}*/
    }
  });

  const [cart, setCart] = useCart({});
  const { currentUser } = auth;
  const allContext = {
    auth: auth,
    user: user,
    setUser: setUser
  }

  return (
    <UserContext.Provider value={allContext}>
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
    </UserContext.Provider>
  );
}

export default App;
