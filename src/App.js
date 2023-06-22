import logo from './logo.png';
import name from './name.png';
import './App.css';
import {useState} from "react";
import Login from "./Login";


function App() {
  const [isLogin, setIsLogin] = useState(false)

  const login = () => {
    
  }
  return (
    <div className="App">
    <div className="App-body">
      <img src={logo} className="App-logo" alt="logo" style={{width:300}} />
      <img src={name} className="App-name" alt="logo" />
      {!isLogin &&<Login isLogin={}/>}
      {isLogin &&<Login/>}

    </div>
      {/*login as Patient or Psy*/}

      {/*Login*/}
      {/*Dashboard for patient */}
      {/*Dashboard for Psy */}
      {}
      {/**/}
    </div>
  );
}

export default App;
