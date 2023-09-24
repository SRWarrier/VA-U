import { useEffect, useState } from "react";
import { Typography, theme } from "antd";
import { ProjectModalForm } from "./projectRegistration/projectModalForm";
import ProjectPageForm from "./projectRegistration/projectPageForm";
import FormDispenser from "../../../../features/formDispenser/formDispenser";
import BillingAddressTable, {
  BillingAddressForm,
} from "./projectRegistration/BillingAddressTable";
import { returnOperation } from "../../../../api/apiRouters";
import {
  type_city,
  type_client,
  type_hub,
} from "../../../../customtypes/dataTypes";
import ThemeValueDispenser from "../../../../features/themeValueDispenser";

interface ProjectRegistrationFormProps {
  title?: string;
  note?: string;
  isModal?: boolean;
  formValues: ProjectRegistrationFormData;
  setFormValues: (values: ProjectRegistrationFormData) => void;
  clientslist: string[];
  cityList: string[];
}

interface ProjectRegistrationFormData {
  projectName: string;
  projectCity: string;
  projecyClient: string;
  gstin: string;
  AddressList: typeof BillingAddressForm;
}

const ProjectRegistrationForm = ({
  title,
  note,
  formValues,
  setFormValues,
  isModal,
}: ProjectRegistrationFormProps) => {
  const [cityList, setCityList] = useState<type_city[]>([]);
  const [hubList, setHubList] = useState<type_hub[]>([]);
  const [clientslist, setClientList] = useState<type_client[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getClientList = await returnOperation({ type: "client" });
        setClientList(getClientList);
        const getCityList = await returnOperation({ type: "city" });
        setCityList(getCityList);
        const getHubList = await returnOperation({ type: "hub" });
        setHubList(getHubList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const hubCodes = hubList.map((hub: type_hub) => hub.shortname);
  const cityname = cityList.map((city: type_city) => city.name);
  const clientname = clientslist.map((client: type_client) => client.name);

  return (
    <>
      <Typography.Title level={4}>{title}</Typography.Title>
      <FormDispenser
        formfields={
          isModal
            ? ProjectModalForm
            : ProjectPageForm({ client: clientname, city: cityname })
        }
        initialValues={formValues}
        setFormValues={setFormValues}
        formLayout="one"
      />
      <div
        style={{
          padding: "10px",
          maxHeight: "300px",
          overflowY: "auto",
          backgroundColor: ThemeValueDispenser("colorBgElevated"),
        }}
      >
        <BillingAddressTable
          formValues={formValues}
          setFormValues={setFormValues}
        />
      </div>
      {note && (
        <Typography.Text type="secondary">
          Note:
          {note}
        </Typography.Text>
      )}
    </>
  );
};

export default ProjectRegistrationForm;
export type { ProjectRegistrationFormData };
