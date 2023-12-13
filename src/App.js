
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from './component/Home'
import {BrowserRouter, Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element ={<Signup/>}></Route>
        <Route path="/signup" element ={<Signup/>}></Route>
        <Route path="/login" element ={<Login/>}></Route>
        <Route path="/home" element ={<Home/>}></Route>

      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
