import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



interface IinitialState {
  dataDeny: Array<Record<string, any>> | null,
  errorsDeny: Record<string, any> | null,
}

const initialState: IinitialState = {
  dataDeny: null,
  errorsDeny: null,
};

export const sendDeny = createAsyncThunk<IinitialState['dataDeny'], any, { rejectValue: IinitialState['errorsDeny'] }>
('sendDeny', async function( data, thunkAPI) {
  const url = new URL('http://localhost:8080/application/' + data + '/deny');
  const result = await fetch(url.toString(), {
    method: 'POST',
  });
  if (result.ok) {
    return thunkAPI.fulfillWithValue((await result.json()) as IinitialState['dataDeny']);
  }
  return thunkAPI.rejectWithValue((await result.json()) as IinitialState['errorsDeny']);
});

const sliceDeny = createSlice({
  name: 'sliceDeny',
  initialState,
  extraReducers(builder) {
    builder.addCase(sendDeny.fulfilled, (state, action) => {
      state.dataDeny = action.payload;
    });
    builder.addCase(sendDeny.rejected, (state, action) => {
      state.errorsDeny = action.payload as IinitialState['errorsDeny'];
    });
  },
  reducers: {
    setDataDeny: (state, action) => {
      state.dataDeny = action.payload;
    },
    setErrorsDeny: (state, action) => {
      state.errorsDeny = action.payload;
    },
  },
});
type PrescoringSlice = { sliceDeny: ReturnType<typeof sliceDeny.getInitialState> }

export const reducerDeny = sliceDeny.reducer;
export const { setDataDeny, setErrorsDeny } = sliceDeny.actions;
export const getDataDeny= (state: PrescoringSlice) => state.sliceDeny.dataDeny;
export const getErrorsDeny = (state: PrescoringSlice) => state.sliceDeny.errorsDeny;
