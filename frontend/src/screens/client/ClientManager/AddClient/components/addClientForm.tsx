import { useEffect, useState } from "react";
import { Typography } from "antd";
import AddClientFormFields from "./addClientFormFields";
import FormDispenser from "@features/formDispenser/formDispenser";
import AddClientFormVa from "../addClientForm";
import { returnOperation } from "@api/apiRouters";

const { Title } = Typography;

interface ApiData {
  id: number;
  name: string;
}

interface AddClientFormProps {
  formValues: AddClientFormData;
  setFormValues: (values: AddClientFormData) => void;
}

interface AddClientFormData {
  name: string;
  shortname: string;
  registered_office: string;
  pan: string;
  registration_number: string;
  industry: string;
  entity_type: string;
  created_by?: string;
}

const AddClientForm = ({ formValues, setFormValues }: AddClientFormProps) => {
  const [industryList, setIndustryList] = useState<ApiData[]>([]);
  const [entityList, setEntityList] = useState<ApiData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const industryData = await returnOperation({ type: "industry" });
        setIndustryList(industryData);
        const entityTypeData = await returnOperation({ type: "entity" });
        setEntityList(entityTypeData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      
      <AddClientFormVa />
      {/* <FormDispenser
        formfields={AddClientFormFields(
          industryList.map((items: ApiData) => {
            return items.name;
          }),
          entityList.map((items: ApiData) => {
            return items.name;
          })
        )}
        initialValues={formValues}
        setFormValues={setFormValues}
      /> */}
    </>
  );
};

export default AddClientForm;
export type { AddClientFormData };
