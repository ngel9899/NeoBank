import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


interface IinitialState {
  statusApplicationId: string | null,
  dataApplicationId: Record<string, any> | null,
  errorsApplicationId: Record<string, any> | null,
}

const initialState: IinitialState = {
  statusApplicationId: null ,
  dataApplicationId: null,
  errorsApplicationId: null,
};

export const getApplicationId = createAsyncThunk
('getApplicationId', async function(id: number, thunkAPI) {
  const url = new URL('http://localhost:8080/admin/application/'+ id);
  const result = await fetch(url.toString(), {
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
  })
  if (result.ok) {
    return thunkAPI.fulfillWithValue((await result.json()) as IinitialState['dataApplicationId']);
  }
  return thunkAPI.rejectWithValue((await result.json()) as IinitialState['errorsApplicationId']);
});

const prescoringSliceApplicationId = createSlice({
  name: 'prescoringSliceApplicationId',
  initialState,
  extraReducers(builder) {
    builder.addCase(getApplicationId.fulfilled, (state, action) => {
      state.dataApplicationId = action.payload;
      state.statusApplicationId = action.payload!.status;
    });
    builder.addCase(getApplicationId.rejected, (state, action) => {
      state.errorsApplicationId = action.payload as IinitialState['errorsApplicationId'];
    });
  },
  reducers: {
    setDatagApplicationId: (state, action) => {
      state.dataApplicationId = action.payload;
    },
    setErrorsApplicationId: (state, action) => {
      state.errorsApplicationId = action.payload;
    },
  },
});
type PrescoringSlice = { prescoringSliceApplicationId: ReturnType<typeof prescoringSliceApplicationId.getInitialState> }

export const reducerApplicationId = prescoringSliceApplicationId.reducer;
export const {setDatagApplicationId, setErrorsApplicationId } = prescoringSliceApplicationId.actions;
export const getDataApplicationId = (state: PrescoringSlice) => state.prescoringSliceApplicationId.dataApplicationId;
export const getStatusApplicationId = (state: PrescoringSlice) => state.prescoringSliceApplicationId.statusApplicationId;
export const getErrorsApplicationId = (state: PrescoringSlice) => state.prescoringSliceApplicationId.errorsApplicationId;