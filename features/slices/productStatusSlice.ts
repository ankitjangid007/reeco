import { createSlice } from "@reduxjs/toolkit";

interface Product {
  status: string;
}

const productStatusSlice = createSlice({
  name: "product",
  initialState: [] as Product[],
  reducers: {
    initializeData: (state, action) => {
      return action.payload;
    },

    changeOrderStatus: (state, action) => {
      const { rowIndex, status } = action.payload;
      if (rowIndex >= 0 && rowIndex < state.length) {
        state[rowIndex].status = status;
      } else {
        console.warn(`Invalid rowIndex: ${rowIndex}`);
      }
    },
  },
});

export const { initializeData, changeOrderStatus } = productStatusSlice.actions;

export default productStatusSlice.reducer;
