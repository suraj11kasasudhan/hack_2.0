import './App.css';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import  History  from './components/HistoryPage'
import  Create  from './components/CreatePage'
import userdash from './components/usersdash'
import create_mail from './components/create_send'
function App() {
  return (
    <>
      

      <Route exact path="/">
        <Signup />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/history">
        <History />
      </Route>

      <Route path="/create">
        <Create />
      </Route>

      <Route path="/user_dash">
      <Navbar/>
    </Route>

    <Route path="/send_mail">
    <create_mail/>
  </Route>

    </>
  );
}

export default App;
