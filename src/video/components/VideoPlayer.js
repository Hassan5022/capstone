import "./VideoPlayer.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const VideoPlayer = () => {
	const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useAuthContext()

	return (
		<div className="grid-containe">
			{stream && (
				<div className="paper">
						<h2 className="name">{name || "Name"}</h2>
						<video playsInline className="video" muted autoPlay ref={myVideo} />
				</div>
			)}
			{callAccepted && !callEnded && (
                <div className="paper">
                    <h2 className="name">{call.name || "Name" }</h2>
					<video playsInline ref={userVideo} autoPlay className="video" />
				</div>
			)}
		</div>
	);
};

export default VideoPlayer;
