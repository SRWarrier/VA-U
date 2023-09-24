import JsSIP from "jssip";
import { useEffect, useState } from "react";

const SIPDial = () => {
  // Declare ua here to make it accessible in the component
  const [ua, setUA] = useState(null);

  useEffect(() => {
    const socket = new JsSIP.WebSocketInterface("wss://192.168.0.104:5060");
    const configuration = {
      sockets: [socket],
      uri: "sip:1001@192.168.0.104:5060",
      password: "1234",
    };

    const userAgent = new JsSIP.UA(configuration);

    userAgent.on("registered", () => {
      console.log("Registered with SIP server");
    });

    userAgent.on("unregistered", () => {
      console.log("Unregistered from SIP server");
    });

    userAgent.on("registrationFailed", (e) => {
      console.log("SIP registration failed:", e.cause);
    });

    userAgent.on("newRTCSession", (data) => {
      const session = data.session;

      session.on("progress", () => {
        console.log("Call is in progress");
      });

      session.on("failed", (data) => {
        console.log(data);
        console.log("Call failed with cause:", data.cause);
      });

      session.on("ended", (data) => {
        console.log("Call ended with cause:", data.cause);
      });

      session.on("confirmed", () => {
        console.log("Call confirmed");
      });
    });

    try {
      userAgent.start();
      setUA(userAgent); // Store the UA instance in the state
    } catch (err) {
      console.error("Failed to start UA:", err);
    }

    return () => {
      userAgent.stop();
    };
  }, []);

  const handleCall = () => {
    if (ua) {
      var options = {
        mediaConstraints: { audio: true, video: false },
      };
      ua.call("sip:1001@192.168.0.104:5060", options);
    }
  };

  return (
    <div className="App">
      <h1>SIP Dialer</h1>
      <button onClick={handleCall}>Call</button>
    </div>
  );
};

export default SIPDial;
