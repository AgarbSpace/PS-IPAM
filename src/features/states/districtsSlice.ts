import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    value: string | null;
}

const initialState: State = {
    value: null,
}

const districtsSlice = createSlice({
  name: 'District',
  initialState,
  reducers: {
    districtSelected(state, action: PayloadAction<string>) {
      // it's okay to do this because Immen makes it imutable under the hood
        state.value = action.payload;
      },
    }
});

export const { districtSelected } = districtsSlice.actions;
export default districtsSlice.reducer;