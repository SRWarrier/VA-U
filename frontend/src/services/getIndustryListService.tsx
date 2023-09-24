import axios from "axios";

interface industryTypes {
  id: number;
  name: string;
}

const getIndustryList = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/classification/industrytypes/"
    );
    return response.data as industryTypes[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getIndustryList;
export type { industryTypes };
