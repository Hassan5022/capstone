// video call
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

// hooks
import { createContext, useEffect, useState, useRef, useReducer } from "react";
// config file
import { projectAuth } from "../firebase/config";
import { useCollection } from "../hooks/useCollection";
import { usePatientCollection } from "../hooks/usePatientCollection";

// socket
const socket = io('http://localhost:5000');

export const AuthContext = createContext();

const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, user: action.payload };
		case "LOGOUT":
			return { ...state, user: null };
		case "AUTH_IS_READY":
			return { ...state, user: action.payload, authIsReady: true };
		case "DOCTOR_DATA":
			return { ...state, doctors: action.payload };
		case "PATIENT_DATA":
			return { ...state, patients: action.payload };
		case "DOCTOR_DATA_ERROR":
			return { ...state, doctor_error: action.payload };
		case "PATIENT_DATA_ERROR":
			return { ...state, patient_error: action.payload };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {

	// video call states start
	const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState();
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
	const [me, setMe] = useState('');
	
    const myVideo = useRef();
    const userVideo = useRef();
	const connectionRef = useRef();
	// video call states end

	// video call context start
	useEffect(() => {
        const getUserMedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
				setStream(stream);
				let video = stream;
                myVideo.current.srcObject = stream;
				console.log(myVideo.current.srcObject);
            } catch (e){
                console.log(e)
            }
        };
        getUserMedia()

    socket.on('me', (id) => setMe(id));
    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, [myVideo]);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

    const callUser = (e, id) => {
        e.preventDefault()
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

    const leaveCall = (e) => {
      e.preventDefault()
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
	};
	
	// video call context end

	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false,
		doctors: null,
		patients: null,
		doctor_error: null,
		patient_error: null,
	});

	const { documents, error } = useCollection(
		"doctors"
		// ["uid", "==", user.uid],
		// ["createdAt", "ascn"]
	);

	const { patientDocuments, patientError } = usePatientCollection("patients");

	useEffect(() => {
		dispatch({ type: "DOCTOR_DATA", payload: documents });
		dispatch({ type: "DOCTOR_DATA_ERROR", payload: error });
		dispatch({ type: "PATIENT_DATA", payload: patientDocuments });
		dispatch({ type: "PATIENT_DATA_ERROR", payload: patientError });
	}, [documents, patientDocuments]);

	useEffect(() => {
		const unsub = projectAuth.onAuthStateChanged((user) => {
			dispatch({ type: "AUTH_IS_READY", payload: user });
			unsub();
		});
	}, []);

	return (
		<AuthContext.Provider value={{
			...state,
			dispatch,
			call,
			callAccepted,
			myVideo,
			userVideo,
			stream,
			name,
			setName,
			callEnded,
			me,
			callUser,
			leaveCall,
			answerCall
		}}>
			{children}
		</AuthContext.Provider>
	);
};
