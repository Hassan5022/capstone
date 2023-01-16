import { useAuthContext } from "../../hooks/useAuthContext";

const Notifications = () => {
	const { answerCall, call, callAccepted } = useAuthContext()

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
