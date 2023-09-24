import { createSlice } from "@reduxjs/toolkit";

interface industryData {
  id: string;
  name: string;
}

export interface IndustryState {
  lastupdate: string;
  data: industryData[];
}

const industryListSlice = createSlice({
  name: "industry",
  initialState: { lastupdate: "", data: [] },
  reducers: {
    update_industry: (industries, newindustries) => {
      return {
        ...industries,
        lastupdate: new Date().toString(),
        data: newindustries.payload,
      };
    },
  },
});

export const { update_industry } = industryListSlice.actions;
export default industryListSlice.reducer;
