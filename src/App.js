 import './App.css';
import Home from './layout/Home';
import {Route ,Switch} from 'react-router-dom'
import Register from './authetification/Register';
import SignIn from './authetification/SignIn';
import PrivetRoute from './HOC/privetRoute';
import Dashboard from './layout/dashboard';
import {useDispatch,useSelector} from 'react-redux'
import React,{useEffect} from 'react'
import { isUserLoggedIn } from './actions/authactions';

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state =>state.auth)


  useEffect(()=>{
    if(!auth.authenticate)
   { dispatch(isUserLoggedIn())}
    },[auth.authenticate])
  return (
    <div className="App">
      <Home />
      <Switch>
      <PrivetRoute path="/" exact component={Dashboard} />
        
<Route path="/register"  component={Register} />
 

 
<Route path="/signin"  component={SignIn} />
 
</Switch>
    </div>
  );
}

export default App;
