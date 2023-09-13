import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


interface IinitialState {
  dataCode: boolean | null,
  errorsCode: Record<string, any> | null,
  flagIsloading: boolean,
}

const initialState: IinitialState = {
  dataCode: null,
  errorsCode: null,
  flagIsloading: false,
};

export const sendCode = createAsyncThunk<IinitialState['dataCode'], any, { rejectValue: IinitialState['errorsCode'] }>
('sendCode', async function(dataAll, thunkAPI) {
  const { pinCod, id } = dataAll;
  const url = new URL('http://localhost:8080/document/' + id + '/sign/code');
  const result = await fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify(pinCod),
    headers: { 'Content-type': 'application/json' },
  });
  if (result.ok) {
    return thunkAPI.fulfillWithValue(null);
  }
  return thunkAPI.rejectWithValue((await result.json()) as IinitialState['errorsCode']);
});

const sliceCode = createSlice({
  name: 'sliceCode',
  initialState,
  extraReducers(builder) {
    builder.addCase(sendCode.fulfilled, (state, action) => {
      state.dataCode = true;
      state.flagIsloading = false;
    });
    builder.addCase(sendCode.rejected, (state, action) => {
      state.errorsCode = action.payload as IinitialState['errorsCode'];
      state.flagIsloading = false;
    });
    builder.addCase(sendCode.pending, (state) =>{
      state.flagIsloading = true;
    })
  },
  reducers: {
    setDataCode: (state, action) => {
      state.dataCode = action.payload;
    },
    setErrorsCode: (state, action) => {
      state.errorsCode = action.payload;
    },
    setClearStory: (state) => {
      state.errorsCode = initialState.errorsCode;
      state.dataCode = initialState.dataCode;
    },
  },
});
type PrescoringSlice = { sliceCode: ReturnType<typeof sliceCode.getInitialState> }

export const reducerCode = sliceCode.reducer;
export const { setDataCode, setErrorsCode, setClearStory } = sliceCode.actions;
export const getDataCode = (state: PrescoringSlice) => state.sliceCode.dataCode;
export const getErrorsCode = (state: PrescoringSlice) => state.sliceCode.errorsCode;
export const getFlagIsloading = (state: PrescoringSlice) => state.sliceCode.flagIsloading;
