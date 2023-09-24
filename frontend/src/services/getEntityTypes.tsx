import axios from "axios";

interface entityTypes {
  id: number;
  name: string;
}

const getEntityTypes = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/classification/entitytypes/"
    );
    return response.data as entityTypes[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getEntityTypes;
export type { entityTypes };
