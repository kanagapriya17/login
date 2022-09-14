import React ,{useState} from 'react';
import LoginForm from './components/loginform';
function App() {
  const adminuser={
    email:"admin@admin.com",
    password:"admin123"
  }
  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");
  const Login= details=>
   {
    console.log(details);
  

if(details.email == adminuser.email && details.password == adminuser.password)
{
  console.log("logged in");
  setUser({
    name:details.name,
  email:details.email
});
}
else
{
  console.log("details do not match!");
  setError("details do not match!");
}
   }

  
  const logout =() =>
  {
    console.log("logout");
    setUser({name:"",email:""});

  }
  return(
    <div className="App">
      {(user.email !="") ? 
      (
          <div classname="welcome">
            <h2>Welcome,<span>{user.name}</span></h2>
            
            <button onClick={logout}>Logout</button>
            </div>
     



    ) :  (
      <loginForm Login={Login} error={error} />
    )}
   </div> 
);
    }
 

export default App;