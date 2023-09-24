import { Form, Input, Modal, Button, Row, Col, Typography } from "antd";
import { useState, useEffect } from "react";
// import { createOperation } from "@api/apiRouters";
import MapComponent from "@features/mapping/Map";
import { LatLngExpression } from "leaflet";
import FormDispenser from "@features/formDispenser/formDispensor_adv";
import { generateForm } from "./addTripForm";
import { planLatLong } from "./routeplansDemo";

interface AddTripProps {
  isopen: boolean;
  setOpen: (open: boolean) => void;
}

const { Title } = Typography;

const AddTrip = ({ isopen, setOpen }: AddTripProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [waypoints, setWaypoints] = useState<LatLngExpression[][]>([[12, 73]]);

  const [form] = Form.useForm();
  const inputRefs: Record<string, React.RefObject<typeof Input>> = {};

  const handleRoutePlanChange = (plan: string) => {
    const selectedPlan = planLatLong[plan as keyof typeof planLatLong];
    console.log(selectedPlan);
    setWaypoints(selectedPlan);
  };

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
                formfields={generateForm(handleRoutePlanChange)}
                initialValues={{}}
                formRef={form}
              />
            }
          </Form>
        </Col>
        <Col span={10}>
          <Title level={3}>Route Map</Title>
          <MapComponent waypoints={waypoints} />
          <Button onClick={() => console.log("clicked")}>Route</Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default AddTrip;
