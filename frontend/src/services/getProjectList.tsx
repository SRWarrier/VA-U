import axios from "axios";

const getProjectList = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/projects/projectlist/"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getProjectList;
