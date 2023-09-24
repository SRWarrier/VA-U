import { createSlice } from "@reduxjs/toolkit";

const entityTypeSlice = createSlice({
  name: "entitytype",
  initialState: { lastupdate: "", data: [] },
  reducers: {
    update_entity: (entitytype, newentitytypes) => {
      return {
        ...entitytype,
        lastupdate: new Date().toString(),
        data: newentitytypes.payload,
      };
    },
  },
});

interface EntitytTypeData {
  id: string;
  name: string;
}

export interface EntityTypeState {
  lastupdate: string;
  data: EntitytTypeData[];
}

export const { update_entity } = entityTypeSlice.actions;
export default entityTypeSlice.reducer;
