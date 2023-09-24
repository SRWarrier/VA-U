import { useState } from "react";
import { Button } from "antd";
import getDataFromStore from "@hooks/useDatafromStore";
import AddClientForm, { AddClientFormData } from "./components/addClientForm";
import { createOperation } from "@api/apiRouters";

const AddClientPage = () => {
  const industryStore = getDataFromStore("industry");
  const entitytypeStore = getDataFromStore("entitytype");
  const user = getDataFromStore("user");

  const entityLookup = entitytypeStore.data.reduce((lookup: any, item: any) => {
    lookup[item.name] = item.id;
    return lookup;
  }, {});

  const handleFinish = () => {
    createOperation({ type: "client", record: [] });
  };

  return (
    <div>
      <AddClientForm
        formValues={{}}
        setFormValues={(values) =>
          setFormState((prevState) => ({
            ...prevState,
            formValues: {
              ...prevState.formValues,
              primaryInfo: values,
            },
          }))
        }
      />
    </div>
  );
};

export default AddClientPage;
