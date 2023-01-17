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
							<p>Account Info</p>
                            <input
                                placeholder="Name"
                                    className="input"
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							<CopyToClipboard text={me} className="btn">
								<button onClick={(e) => e.preventDefault()}>Copy Your ID</button>
							</CopyToClipboard>
						</div>
						<div className="padding">
							<p>Make a call</p>
                            <input
                                placeholder="ID to Call"
                                    className="input"
									type="text"
									value={idToCall}
									onChange={(e) => setIdToCall(e.target.value)}
								/>
                            {callAccepted && !callEnded ? (
                                <button onClick={(e) => leaveCall(e)} className="btn">
                                    Hang Up
                                </button>
                            ) : (
                                    <button className="btn" onClick={(e) => callUser(e, idToCall)}>
                                        Call
                                    </button>
                            )}
						</div>
					</div>
				</form>
			{children}
			</div>
		</div>
	);
};

export default Options;
