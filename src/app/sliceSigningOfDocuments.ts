import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


interface IinitialState {
  dataSigningOfDocuments: Array<Record<string, any>> | null,
  errorsSigningOfDocuments: Record<string, any> | null,
}

const initialState: IinitialState = {
  dataSigningOfDocuments: null,
  errorsSigningOfDocuments: null,
};

export const sendSigningOfDocuments = createAsyncThunk<IinitialState['dataSigningOfDocuments'], any, { rejectValue: IinitialState['errorsSigningOfDocuments'] }>
('SigningOfDocuments', async function(data, thunkAPI) {
  const url = new URL('http://localhost:8080/document/' + data + '/sign');
  const result = await fetch(url.toString(), {
    method: 'POST',
  });
  if (result.ok) {
    return thunkAPI.fulfillWithValue((await result.json()) as IinitialState['dataSigningOfDocuments']);
  }
  return thunkAPI.rejectWithValue((await result.json()) as IinitialState['errorsSigningOfDocuments']);
});

const sliceSigningOfDocuments = createSlice({
  name: 'sliceSigningOfDocuments',
  initialState,
  extraReducers(builder) {
    builder.addCase(sendSigningOfDocuments.fulfilled, (state, action) => {
      state.dataSigningOfDocuments = action.payload;
    });
    builder.addCase(sendSigningOfDocuments.rejected, (state, action) => {
      state.errorsSigningOfDocuments = action.payload as IinitialState['errorsSigningOfDocuments'];
    });
  },
  reducers: {
    setDataSigningOfDocuments: (state, action) => {
      state.dataSigningOfDocuments = action.payload;
    },
    setErrorsSigningOfDocuments: (state, action) => {
      state.errorsSigningOfDocuments = action.payload;
    },
  },
});
type PrescoringSlice = { sliceSigningOfDocuments: ReturnType<typeof sliceSigningOfDocuments.getInitialState> }

export const reducerSigningOfDocuments = sliceSigningOfDocuments.reducer;
export const { setDataSigningOfDocuments, setErrorsSigningOfDocuments } = sliceSigningOfDocuments.actions;
export const getDataSigningOfDocuments = (state: PrescoringSlice) => state.sliceSigningOfDocuments.dataSigningOfDocuments;
export const getErrorsSigningOfDocuments = (state: PrescoringSlice) => state.sliceSigningOfDocuments.errorsSigningOfDocuments;
