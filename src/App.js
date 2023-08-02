import logo from './logo.png';
import name from './name.png';
import './App.css';
import {useState,useEffect} from "react";
import Login from "./Login";
import BeforeLogIn from './BeforeLogIn';
import PatientList from './PatientList';
import PsychologistHome from './PsychologistHome';
import PaitentHome from './PaitentHome';
function App() {
  const data = [
    {name: 'Sam', userEmail: 'Sam@gmail.com'},
    {name: 'Jack', userEmail: 'Jack@gmail.com'},
    {name: 'Alice', userEmail: 'Alice@gmail.com'},
    {name: 'Michael', userEmail: 'Michael@gmail.com'},
    {name: 'Jim', userEmail: 'Jim@gmail.com'},
  ];
  const [user, setUser] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isType, setIsType] = useState(false);
  const [notShow] = useState(false)
  const[isPsychologistHome,setPsychologistHome]= useState(false);
  const[isPatientList,setPatientList]= useState(false);
  const[isPaitentHome,setPaitentHome]= useState(false);
  const[userType,setUserType]= useState("")
  useEffect(()=>{
    console.log("effect run")
    localStorage.setItem("userType","Paitent");
  },[])
  const loginCompleted = () => {
    setIsLogin(false);
    setIsType(true);  
    const who = localStorage.getItem("userType");
    console.log(who);
    if(who == "Thrapist")
    {
      setPatientList(true);
    }
    else if(who === "Paitent"){
      setPaitentHome(true);
    }
  }

  
  // const choosePatientcomplated = () => {
  //   setPatientList(false);
  //   setPaitentHome(true);
  // }

  const chooseThePatientcomplated = ()=> {
    setPatientList(false);
    setPsychologistHome(true);
  }

  const userTypeSelected = (userTypeS) => {
    switch (userTypeS) {
      case "Thrapist":
        localStorage.setItem("userType", "Thrapist");
        console.log("t run");
        break;
      case "Paitent":
        localStorage.setItem("userType", "Paitent");
        console.log("p run");
        break;
    }
    setIsLogin(true);
  }
  
  // useEffect(() => {
  //   console.log(userType);
  // }, [userType]);
  return (
    <div className="App">
    <div className="App-body">
      {isLogin && <img src={logo} className="App-logo" alt="logo" style={{width:150}} />}
      {isLogin &&<img src={name} className="App-name" alt="logo" />}
      {isLogin &&<Login isLoggedIn={() => loginCompleted()} setUserName={setUser} />}
      {!isType && !isLogin && <BeforeLogIn userTypeHandle={userTypeSelected} />}

      {isPaitentHome &&<PaitentHome/>}
      {isPsychologistHome &&<PsychologistHome/>}
      {isPatientList && <PatientList chooseThePatient={()=>chooseThePatientcomplated()} />}
    </div>
    </div>
  );
}
export default App