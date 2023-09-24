import { createContext } from "react";
import { TripDetailsProps } from "@screens/services/TransportServices/Roadways/components/tripDetails";

export interface TripDetailsContextState {
  data: any;
  datadispensor: (newData: TripDetailsProps) => void;
}

// Trips Context
const TripDetailsContext = createContext<TripDetailsContextState>({
  data: {},
  datadispensor: () => {},
});
export { TripDetailsContext };
