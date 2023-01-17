import "./Video.css";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

function Video() {

	return (
		<div className="wrapper">
			<div className="app-bar">
				<h2>Video Chat</h2>
			</div>
			<VideoPlayer />
			<Options>
				<Notifications />
			</Options>
		</div>
	);
}

export default Video;
