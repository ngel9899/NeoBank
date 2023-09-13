import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


interface IinitialState {
  dataPayment: Array<Record<string, any>> | null,
  errorsPayment: Record<string, any> | null,
}

const initialState: IinitialState = {
  dataPayment: null,
  errorsPayment: null,
};

export const sendPayment = createAsyncThunk<IinitialState['dataPayment'], any, { rejectValue: IinitialState['errorsPayment'] }>
('sendPayment', async function(data, thunkAPI) {
  const url = new URL('http://localhost:8080/document/' + data);
  const result = await fetch(url.toString(), {
    method: 'POST',
  });
  if (result.ok) {
    return thunkAPI.fulfillWithValue((await result.json()) as IinitialState['dataPayment']);
  }
  return thunkAPI.rejectWithValue((await result.json()) as IinitialState['errorsPayment']);
});

const slicePayment = createSlice({
  name: 'slicePayment',
  initialState,
  extraReducers(builder) {
    builder.addCase(sendPayment.fulfilled, (state, action) => {
      state.dataPayment = action.payload;
    });
    builder.addCase(sendPayment.rejected, (state, action) => {
      state.errorsPayment = action.payload as IinitialState['errorsPayment'];
    });
  },
  reducers: {
    setDataPayment: (state, action) => {
      state.dataPayment = action.payload;
    },
    setErrorsPayment: (state, action) => {
      state.errorsPayment = action.payload;
    },
  },
});
type PrescoringSlice = { slicePayment: ReturnType<typeof slicePayment.getInitialState> }

export const reducerPayment = slicePayment.reducer;
export const { setDataPayment, setErrorsPayment } = slicePayment.actions;
export const getDataPayment = (state: PrescoringSlice) => state.slicePayment.dataPayment;
export const getErrorsPayment = (state: PrescoringSlice) => state.slicePayment.errorsPayment;
