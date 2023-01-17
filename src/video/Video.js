import "./Video.css";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

function Video() {

	return (
		<div className="wrapper">
			<div className="app-bar">
				<h1>Video  <span style={{color:'orange'}}>Call</span> </h1>
			</div>
			<VideoPlayer />
			<Options>
				<Notifications />
			</Options>
		</div>
	);
}

export default Video;
