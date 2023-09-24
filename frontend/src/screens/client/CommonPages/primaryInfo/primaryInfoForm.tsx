import { useEffect, useState } from "react";
import { Typography } from "antd";
import PrimaryInfoFormFields from "../../ClientManager/AddClient/components/addClientFormFields";
import FormDispenser from "../../../../features/formDispenser/formDispenser";
import { returnOperation } from "../../../../api/apiRouters";

const { Title } = Typography;

interface ApiData {
  id: number;
  name: string;
}

interface PrimaryInfoFormProps {
  formValues: PrimaryInfoFormData;
  setFormValues: (values: PrimaryInfoFormData) => void;
}

interface PrimaryInfoFormData {
  name: string;
  shortname: string;
  registered_office: string;
  pan: string;
  registration_number: string;
  industry: string;
  entity_type: string;
  created_by?: string;
}

const PrimaryInfoForm = ({
  formValues,
  setFormValues,
}: PrimaryInfoFormProps) => {
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
      <Title level={4}>Primary Information</Title>
      <FormDispenser
        formfields={PrimaryInfoFormFields(
          industryList.map((items: ApiData) => {
            return items.name;
          }),
          entityList.map((items: ApiData) => {
            return items.name;
          })
        )}
        initialValues={formValues}
        setFormValues={setFormValues}
      />
    </>
  );
};

export default PrimaryInfoForm;
export type { PrimaryInfoFormData };
