import "./Options.css";
import { useState} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useAuthContext } from "../../hooks/useAuthContext";

const Options = ({ children }) => {
	const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
		useAuthContext()
	const [idToCall, setIdToCall] = useState("");

	return (
		<div className="container">
			<div className="paper">
				<form className="root" noValidate autoComplete="off">
					<div className="grid-container">
						<div className="padding">
							<CopyToClipboard text={me} className="btnn">
								<button onClick={(e) => e.preventDefault()}>join</button>
							</CopyToClipboard>
						</div>
						<div className="padding">
							
                            {callAccepted && !callEnded ? (
                                <button onClick={(e) => leaveCall(e)} className="btnn">
                                    Hang Up
                                </button>
                            ) : (
                                    <button className="btnn" onClick={(e) => callUser(e, idToCall)}>
                                        Call
                                    </button>
                            )}
						</div>
					</div>
				</form>
				<div className="accept">
				<p style={{color:'#006',fontWeight:'bold'}}>areesha is calling <span style={{color:'orange'}}>.....</span></p>
				<button className="accept-btn">accept</button>
				</div>
			{children}
			</div>
		</div>
	);
};

export default Options;
