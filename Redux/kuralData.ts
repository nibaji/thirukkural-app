import { createSlice } from "@reduxjs/toolkit";
import kuralDetails from "../Data/kuralDetails";

const kuralsSlice = createSlice({
  name: "kurals",
  initialState: {
    aramDetails: <any[]>[],
    porulDetails: <any[]>[],
    kaamamDetails: <any[]>[],
    status: <String>"",
  },
  reducers: {
    fetchKuralDetails: (state) => {
      state.aramDetails = kuralDetails[0].section.detail[0].chapterGroup.detail;
      state.porulDetails =
        kuralDetails[0].section.detail[1].chapterGroup.detail;
      state.kaamamDetails =
        kuralDetails[0].section.detail[2].chapterGroup.detail;

      //   const url =
      //     "https://raw.githubusercontent.com/nibaji/thirukkural/master/detail.json";
      //   const response = await fetch(url);
      //   // console.log(response.ok);
      //   if (response.ok) {
      //     const jsonData = await response.json();
      //     // console.log(jsonData[0].section.detail[0].chapterGroup.detail);
      //     state.aramDetails = jsonData[0].section.detail[0].chapterGroup.detail;
      //     state.porulDetails = jsonData[0].section.detail[1].chapterGroup.detail;
      //     state.kaamamDetails = jsonData[0].section.detail[2].chapterGroup.detail;
      //     return;
      //   } else {
      //     return;
      //   }
      //   fetch(url).then((response) => {
      //     if (response.ok) {
      //       response.json().then((jsonData) => {
      //         //console.log(jsonData[0].section.detail[0].chapterGroup.detail[0]);
      //         state.aramDetails =
      //           jsonData[0].section.detail[0].chapterGroup.detail;
      //         state.porulDetails =
      //           jsonData[0].section.detail[1].chapterGroup.detail;
      //         state.kaamamDetails =
      //           jsonData[0].section.detail[2].chapterGroup.detail;
      //         return;
      //       });
      //     }
      //   });
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchKuralDetails } = kuralsSlice.actions;

export default kuralsSlice.reducer;
