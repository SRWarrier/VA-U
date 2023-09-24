import { useDispatch } from "react-redux";
import { update_industry } from "../reducers/industryListReducer";
import { update_entity } from "../reducers/entityTypeReducer";

const UpdateStore = (reducerFn: string, payload: any) => {
  const dispatch = useDispatch();
  switch (reducerFn) {
    case "industry":
      dispatch(update_industry(payload));
      return true;
    case "entity":
      dispatch(update_entity(payload));
      return true;
    default:
      return false;
  }
};

export default UpdateStore;
