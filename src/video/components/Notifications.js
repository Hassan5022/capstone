// import { useAuthContext } from "../../hooks/useAuthContext";
import { SocketContext } from "../SocketContext";
import { useContext } from "react";

const Notifications = () => {
	// const { answerCall, call, callAccepted } = useAuthContext()
	const { answerCall, call, callAccepted } = useContext(SocketContext);

	return (
		<>
			{call.isReceivingCall && !callAccepted && (
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<h1>{call.name} is calling:</h1>
					<button onClick={answerCall}>
						Answer
					</button>
				</div>
			)}
		</>
	);
};

export default Notifications;
