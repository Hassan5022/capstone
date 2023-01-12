// styles
import "./Signup.css";
// hooks
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link} from "react-router-dom";

export default function Signup() {
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
<div className="containe" onSubmit={handleSubmit}>
<form className="signup-form" >
<h3 className="h1">SignUP Form</h3>

      <div className="col-25">
        <label >Email</label>
      </div>
      <div >
        <input type="email" id="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
      </div>
    
	
      <div className="col-25">
        <label >Password</label>
      </div>
      <div >
        <input type="password"  placeholder="Password" id="password"
				required
				onChange={(e) => setPassword(e.target.value)}
				value={password} />
      </div>
    
      <div className="col-25">
        <label>DisplayName</label>
      </div>
      <div >
        <input type="text" id="fname" required placeholder=" name.." onChange={(e)=>setdisplayName(e.target.value)} value={displayName}/>
      </div>
   
	
      <div className="col-25">
        <label >City</label>
      </div>
      <div >
        <input type="text" id="city" name="firstname" placeholder="City"/>
      </div>
    
	
      <div className="col-25">
        <label >Category</label>
      </div>
      <div >
	  <select id="category">
          <option value="australia">Dentist</option>
          <option value="canada">HomeoPhetic</option>
          <option value="usa">Dermatology</option>
          <option value="usa">Anesthesiology</option>
          <option value="usa">Ophthalmology</option>
          <option value="usa">Pediatrics</option>
          <option value="usa">Psychiatry</option>
          <option value="usa">Clinical Pathology</option>
          <option value="usa">Nephrology</option>
          <option value="usa">Clinical Immunology</option>
        </select>
       
      </div>
    
	
      <div className="col-25">
        <label>Photo</label>
      </div>
      <div  >
        <input type="file" id="fname" name="firstname" placeholder="Picture"/>
      </div>
   
	  <div className="col">
      {!isPending && <button type="submit" className="bt" >Submit</button>}
      {isPending && <button  type="submit" className="bt"  disabled>Loading</button>}
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
