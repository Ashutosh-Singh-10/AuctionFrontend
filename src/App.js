import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Auction from './Components/Auction';
import Bid from './Components/Bid';
import Bid2 from './Components/Bid2';
import ProductPage from './Components/ProductPage';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Foot from './Components/Foot';
import Signup from './Components/Signup';

function App() {
  return (<>
  <Router>
<Navbar2/>  
   
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/auction' element={<Auction/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/profile/:id' element={<Profile/>}/>
<Route path='/bid/:id' element={<Bid2/>}/>
<Route path='/productpage' element={<ProductPage/>}/>


</Routes>
<Foot/>



  </Router>
  
  
  
  
  </>

  );
}

export default App;
