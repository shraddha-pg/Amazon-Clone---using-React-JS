import React, {useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51HvyakErad5Hvthvm0SQfOueI08oeBZ0IYTdee2mBidrII90nEob5zZfGw2VVlVE3LfD6ipogKMmLoUVq0bJlUW400TanOItXr');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
   auth.onAuthStateChanged(authUser => {
     console.log('The User is >>>' , authUser);
    if(authUser)
    {
      //Keeps user logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    }else
    {
      //User logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })

    }

    })
  }, [] )
  return (
    //BEM
    <Router>
    <div className="App">
      <Switch>
        <Route path="/orders">
        <Header />
        <Orders />
        </Route>

      <Route path="/login"> 
          <Login />
        </Route>

        <Route path="/payment"> 
        <Header />
        <Elements stripe= {promise}>
        <Payment />
        </Elements>
        </Route>

        <Route path="/checkout">
        <Header />
          <Checkout />
        </Route>

        <Route path="/">
        <Header />
       <Home />
       </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
