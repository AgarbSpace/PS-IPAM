// DUCKS pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    value: string | null;
}

const initialState: State = {
    value: null,
}

const statesSlice = createSlice({
    name: 'State',
    initialState,
    reducers: {
        selected(state, action: PayloadAction<string>) {
            // it's okay to do this because Immen makes it imutable under the hood
            state.value = action.payload;
        },
    }
});

export const { selected } = statesSlice.actions;
export default statesSlice.reducer;
