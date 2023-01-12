// styles
import "./PatSignUp.css";
// hooks
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link} from "react-router-dom";

export default function PatSignUp() {
	const [email, setEmail] = useState("");
	const [displayName, setdisplayName] = useState("");
	const [password, setPassword] = useState("");
	const {error, isPending, signup} = useSignup()

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, displayName)
	};

	return (
<div className="bg">
<div className="containe">
<form className="signup-form">
<h3 className="h1">SignUP Form</h3>

      <div className="col-25">
        <label >Email</label>
      </div>
      <div >
        <input type="email"  placeholder="Email" id="email"/>
      </div>
    
	
      <div className="col-25">
        <label >Password</label>
      </div>
      <div >
        <input type="password"  placeholder="Password" id="password"/>
      </div>
    
      <div className="col-25">
        <label>DisplayName</label>
      </div>
      <div >
        <input type="text" id="fname" name="firstname" placeholder=" name.."/>
      </div>
   
    
	
      <div className="col-25">
        <label>Photo</label>
      </div>
      <div  >
        <input type="file" id="file" name="firstname" placeholder="Picture"/>
      </div>
   
	  <div className="col">
    {!isPending && <button type="submit" className="bt" >Submit</button>}
      {isPending && <button  type="submit" className="bt" disabled>Loading</button>}
      {error && <p>{ error}</p> }
      </div>
      <div >
       <span style={{color:'#006'}}>Already registered?<Link to="/login" style={{textDecoration:'none',color:'orange'}}> Login</Link></span> 
      </div>
   
  
  </form>
 
</div>

</div>
		
	);
}
