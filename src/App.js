
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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

export const CartContext = createContext();

// get authentication
initializeFirebase(); // initialize firebase app
const auth = getAuth();
export const AuthContext = createContext();

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

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <div className="App">
        <Router>
          <Header user={user} />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/home" >
              <Home user={user} />
            </Route>
            <AuthContext.Provider value={auth} >
              <Route path="/user" >
                {
                  Object.keys(user).length ? <Redirect to="/profile" /> :
                    <UserPage setUser={setUser} />
                }
              </Route>
              <Route path="/profile" >
                {
                  !Object.keys(user).length ? <Redirect to="/user" /> :
                    <UserProfile user={user} setUser={setUser} />
                }
              </Route>
            </AuthContext.Provider>
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
