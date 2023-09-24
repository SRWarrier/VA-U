import { returnOperation } from "@api/apiRouters";
import { ReturnAPI } from "@api/returnAPIIndex";

const useData = () => {
  const fetchData = async (dataType: keyof typeof ReturnAPI) => {
    try {
      const response = await returnOperation({ type: dataType });
      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return { fetchData };
};

export default useData;
