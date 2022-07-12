import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../actions/loginActions';


const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const loginData = useSelector(state => state.login);
  const dispatch = useDispatch();

  const handleLogin = ()=>{
   dispatch(loginRequest(userName, password));
  } 

  const handleChange = (e) => {
    const name = e.target.name;
    if(name==="username"){
      setUserName(e.target.value);
    }
    if(name==="password"){
      setPassword(e.target.value);
    }
  }
  console.log("LoginData",loginData);
  if(loginData.userDetail){
    // redirect on Products
    
  }

  return (
    <div >
  <h3>Sign In &amp; Sign Up</h3>
  
      <div >
        <h2>{loginData.isLoading ? "Wait..." : "Login to your account"}</h2>
       
          <input type="text" 
            name="username" placeholder="Username" required=" "
            onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required=" "
          onChange={handleChange} />
          <input type="submit" value="Login"
          onClick={handleLogin} />
    
      </div>
    </div>
  )
}

export default Login