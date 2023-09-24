import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface SelectorMap {
  [key: string]: (state: RootState) => any;
}

const selectorMap: SelectorMap = {
  user: (state: RootState) => state.user,
  industry: (state: RootState) => state.industry,
  entitytype: (state: RootState) => state.entitytype,
};

const useDataFromReduxStore = (datakey: string) => {
  const selector = selectorMap[datakey];
  if (selector) {
    return useSelector(selector);
  }
  return null;
};

export default useDataFromReduxStore;
