import { useDispatch } from "react-redux";
import { update_industry } from "@reducers/industryListReducer";
import { update_entity } from "@reducers/entityTypeReducer";
import { update } from "@reducers/userReducer";

interface SaveToReduxProps {
  data: object;
  type: "industry" | "entity" | "user";
}
const useSaveToReduxStore = ({ data, type }: SaveToReduxProps) => {
  const dispatch = useDispatch();
  switch (type) {
    case "industry":
      dispatch(update_industry(data));
      break;
    case "entity":
      dispatch(update_entity(data));
      break;
    case "user":
      dispatch(update(data));
      break;
    default:
      throw new Error(`Invalid slice type: ${type}`);
  }
};

export default useSaveToReduxStore;
