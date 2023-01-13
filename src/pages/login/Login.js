// styles
// import "./Login.css";
// hooks
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { error, isPending, login } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password)
		
	};

	return (
		<div className="bg">
<div className="containe">
<form className="signup-form" onSubmit={handleSubmit} >
<h3 className="h1">Login <span style={{color:'orange'}}>Form</span></h3>

      <div className="col-25">
        <label >Email</label>
      </div>
      <div >
        <input   placeholder="Email" 	id="email"
				required
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}/>
      </div>
    
	
      <div className="col-25">
        <label >Password</label>
      </div>
      <div >
        <input  placeholder="Password"
			id="password"
				required
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
		/>
      </div>
    
   
	  <div className="col">
      {!isPending && <button type="submit" className="bt" >Submit</button>}
      {isPending && <button  type="submit" className="bt" disabled>Loading</button>}
      {error && <p className="error" style={{color:'red'}}>{ error}</p> }
      </div>
     
   
  
  </form>
 
</div>

</div>
	);
}
