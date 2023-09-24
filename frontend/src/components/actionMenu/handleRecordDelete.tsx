import { deleteOperation } from "@api/apiRouters";

const handleRecordDelete = (record) => {
  const recordid = record.id;
  // axios
  //   .delete("http://localhost:8000/api/clients/deleteclient/", {
  //     data: { clientid: clientid },
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     updateTable();
  //   })
  //   .catch((error) => {
  //     console.error("Failed to delete record", error);
  //   });
};

export default handleRecordDelete;
