import { FormFieldsTypes } from "@features/formDispenser/formFieldTypes";
import { routePlans } from "./routePlansOptions";

const printSelect = (selection: string) => {
  console.log(selection);
};

interface generateFormProps {
  handleRouteMap: (routemap: string) => void;
}

const generateForm = (handleRouteMap) => {
  const addTripForm: FormFieldsTypes[][] = [
    [
      {
        label: "Client Name",
        name: "client Name",
        inputType: "select",
        selectOptions: [{ label: "Reefer", value: "reefer" }],
      },
    ],
    [
      {
        label: "Project Name",
        name: "projectName",
        inputType: "select",
        selectOptions: [{ label: "Reefer", value: "reefer" }],
      },
    ],
    [
      {
        label: "Vendor Name",
        name: "vendorName",
        inputType: "select",
        selectOptions: [{ label: "Reefer", value: "reefer" }],
      },
      {
        label: "Driver Name",
        name: "driverName",
        inputType: "select",
        selectOptions: [{ label: "Reefer", value: "reefer" }],
      },
    ],
    [
      {
        label: "Vehicle Number",
        name: "vehicleNumber",
        inputType: "select",
        selectOptions: [{ label: "Reefer", value: "reefer" }],
      },
      {
        label: "Vehicle",
        name: "VehicleType",
        inputType: "select",
        selectOptions: [{ label: "Reefer", value: "reefer" }],
      },
      {
        label: "Container",
        name: "containerType",
        inputType: "select",
        selectOptions: [
          { label: "Reefer", value: "reefer" },
          { label: "Reefer", value: "reefer" },
        ],
      },
    ],
    [
      { label: "Trip Start Time", inputType: "date", name: "TripStart" },
      { label: "Trip End Time", inputType: "date", name: "TripEnd" },
    ],
    [
      { label: "Trip Start KM", inputType: "number", name: "TripStartKM" },
      { label: "Trip End KM", inputType: "number", name: "TripEndKM" },
    ],
    [
      {
        label: "Routeplans",
        inputType: "select",
        selectOptions: routePlans,
        onChangeFn: handleRouteMap,
        name: "routeplan",
      },
    ],
  ];
  return addTripForm;
};

export { generateForm };
