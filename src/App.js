import {BrowserRouter as Router,Switch,Route,useHistory} from "react-router-dom"
import Blog from "./components/blog/main"
import Navbar from "./components/nav/navbar"
import './App.css';
import Blogview from "./components/blog/blogView";
import Protectedroute from "./components/protectedroute";
import Register from "./components/Register";
import {useDispatch} from "react-redux"
import {login} from "./store/action"
import {URI} from "./defiens"
import { useEffect } from "react";
import Login from "./components/Login"
import Profile from "./components/Profile"
import Post from "./components/Post"
import Editpost from "./components/Editpost"
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    fetch(URI+"getusername",{
      mode:"cors",
      credentials:"include"
    }).then(res=>res.json())
    .then(j=>{
      if(!Object.keys(j).includes("type")){
        dispatch(login(j.username))
      }
    })
    .catch(err=>console.log(err))
  },[])
    
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Blog/>
          </Route>
          <Route path="/post/:id" >
            <Blogview/>
          </Route>
          <Protectedroute path="/register">
            {Register}
          </Protectedroute>
          <Protectedroute path="/login">
            {Login}
          </Protectedroute>
          <Protectedroute path="/profile">
              {Profile}
          </Protectedroute>
          <Protectedroute path="/create">
              {Post}
          </Protectedroute>
          <Protectedroute path="/edit/:id">
              {Editpost}
          </Protectedroute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
