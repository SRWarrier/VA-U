import axios from "axios";

const getClientList = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/clients/clientslist/"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getClientList;
