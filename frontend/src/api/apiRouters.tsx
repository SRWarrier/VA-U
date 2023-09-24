import axios from "axios";
import { DeleteAPI } from "./deleteApIIndex";
import { UpdateAPI } from "./updateAPIIndex";
import { AddAPI } from "./createAPIIndex";
import { ReturnAPI } from "./returnAPIIndex";
import { APIRoot } from "./rootAPI";

interface createOperationProps {
  record: any;
  type: keyof typeof AddAPI;
  okFunction?: () => void;
  hasfileUpload?: boolean;
}

interface returnOperationProps {
  record?: number | Array<any>;
  type: keyof typeof ReturnAPI;
  okFunction?: () => void;
}

interface deleteOperationProps {
  record?: number | Array<any>;
  type: keyof typeof DeleteAPI;
  okFunction?: () => void;
}

interface updateOperationProps {
  record?: number | Array<any>;
  type: keyof typeof UpdateAPI;
  okFunction?: () => void;
}

const createOperation = ({
  record,
  type,
  hasfileUpload,
}: createOperationProps): Promise<any> => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    for (const key in record) {
      formData.append(key, record[key]);
    }
    const axiosConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post(APIRoot + AddAPI[type], formData, axiosConfig)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log("response", error);
        reject(error);
      });
  });
};

const returnOperation = async ({ type }: returnOperationProps) => {
  try {
    const response = await axios.get(APIRoot + ReturnAPI[type]);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateOperation = ({ record, type }: updateOperationProps) => {
  axios
    .put(APIRoot + UpdateAPI[type], record)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("Failed to update record", error);
    });
};

const deleteOperation = ({
  record,
  type,
  okFunction,
}: deleteOperationProps) => {
  axios
    .delete(APIRoot + DeleteAPI[type], {
      data: { clientid: record },
    })
    .then((response) => {
      console.log(response);
      okFunction && okFunction();
    })
    .catch((error) => {
      console.error("Failed to delete record", error);
    });
};

export { createOperation, returnOperation, updateOperation, deleteOperation };
