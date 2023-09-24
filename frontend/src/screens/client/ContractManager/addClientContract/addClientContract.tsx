import { useState } from "react";
import { Button } from "antd";
import getDataFromStore from "@hooks/useDatafromStore";
import ClientContractForm from "./addClientContractFormFields";
import { createOperation } from "@api/apiRouters";
import FormDispenser from "@features/formDispenser/formDispenser";

const AddClientContract = () => {
  const user = getDataFromStore("user");
  const handleFinish = () => {
    createOperation({ type: "client", record: [] });
  };

  const [ClientContractFormFields] = ClientContractForm();
  console.log(ClientContractFormFields);

  return (
    <div>
      <FormDispenser
        formfields={ClientContractFormFields}
        initialValues={[]}
        layout="vertical"
        isModal={false}
        formLayout={"two"}
        setFormValues={() => {
          console.log("Hello");
        }}
      />
    </div>
  );
};

export default AddClientContract;
