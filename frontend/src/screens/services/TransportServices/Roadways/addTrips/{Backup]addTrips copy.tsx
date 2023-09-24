import {
  Form,
  Input,
  Modal,
  DatePicker,
  Button,
  Row,
  Col,
  Typography,
} from "antd";
import { useRef, useState } from "react";
import { createOperation } from "@api/apiRouters";
import MapComponent from "../../features/maps/renderMap";
import { LatLngExpression, latLng } from "leaflet";
import FormDispenser from "@features/formDispenser/formDispensor_adv";
import { generateForm } from "./addTripForm";

interface AddTripProps {
  isopen: boolean;
  setOpen: (open: boolean) => void;
}

const { Title } = Typography;

const AddTrip = ({ isopen, setOpen }: AddTripProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [waypoints, setWaypoints] = useState<LatLngExpression[][]>([
    [latLng(12, 73)],
  ]);
  const [doshowRoutes, setShowRoutes] = useState<boolean>(false);

  const appendWaypoints = (waypoint: LatLngExpression[]) => {
    setWaypoints((prevWaypoints) => [...prevWaypoints, waypoint]);
    console.log(waypoints);
  };

  const [form] = Form.useForm();

  const handleRouteClick = () => {
    RouteLocation();
  };

  const RouteLocation = () => {
    const formField = form.getFieldsValue();
    const from_location = formField["From Location"];
    const to_location = formField["To Location"];

    if (from_location === undefined || to_location === undefined) {
      console.log("Location undefined");
    } else {
      const locationPoints = [from_location, to_location];
      setWaypoints([]);
      locationPoints.map((loc) =>
        createOperation({
          record: { address: loc },
          type: "latlong",
        })
          .then((response) => {
            const waypoint = response["latlong"];
            appendWaypoints(waypoint);
          })
          .catch((error) => {
            console.error("Error fetching waypoint:", error);
          })
      );
    }
  };

  const handleLocation = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.currentTarget;
    const id = target.id;
    console.log(id);

    const inputRef = inputRefs[id];
    if (inputRef && inputRef.current) {
      const locationText = inputRef.current.input.value; // Access the input value

      createOperation({
        record: { address: locationText },
        type: "latlong",
      })
        .then((response) => {
          const waypoint = response["latlong"];
          appendWaypoints(waypoint);
        })
        .catch((error) => {
          console.error("Error fetching waypoint:", error);
        });
    }
  };

  const inputRefs: Record<string, React.RefObject<typeof Input>> = {};

  return (
    <Modal title="Add Trip" open={isopen} onCancel={handleClose} width={1200}>
      <Row>
        <Col span={14}>
          <Form
            name="Add Trip"
            layout="vertical"
            labelCol={{ span: 10 }}
            form={form}
          >
            {
              <FormDispenser
                formfields={generateForm()}
                initialValues={{}}
                formRef={form}
              />
            }
          </Form>
        </Col>
        <Col span={10}>
          <Title level={3}>Route Map</Title>
          <MapComponent
            waypoints={waypoints}
            starttime={new Date()}
            showlocation={false}
          />
          <Button onClick={handleRouteClick}>Route</Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default AddTrip;
