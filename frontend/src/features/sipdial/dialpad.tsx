import React from "react";
import { Input, Button } from "antd";
import { Call, Sip, CallStatus, SipStatus } from "react-sip";



const Dialpad =() =>{

    const onCall = (destination:number,) =>{

    }

    return (

    )
}

class Dialpad extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      destination: 1002
    };
    this.setState({
      destination: 1002
    });
  }
  onCall() {
    console.log("sipStatus", Sip);
    console.log("callStatus", CallStatus);
    const {
      startCall,
      sip: { status: sipStatus },
      call: { status: callStatus }
    } = this.props;
    const { destination } = this.state;
    if (!destination) {
      return;
    }
    if (sipStatus !== sipType.REGISTERED) {
      return;
    }
    if (callStatus !== callType.IDLE) {
      return;
    }
    startCall(destination);
  }

  render() {
    return (
      <React.Fragment>
        <Input placeholder="Type number" value={this.state.destination} />
        <Button
          icon="phone"
          shape="round"
          size="large"
          onClick={() => this.onCall()}
        />
      </React.Fragment>
    );
  }
}

export default Dialpad;
