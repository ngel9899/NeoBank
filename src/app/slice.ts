import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


interface IinitialState {
  loading: boolean,
  data: Array<Record<string, any>> | null,
  errors: Record<string, any> | null,
}

const initialState: IinitialState = {
  loading: false,
  data: null,
  errors: null,
};

export const sendFormData = createAsyncThunk<IinitialState['data'], any, { rejectValue: IinitialState['errors'] }>
('sendFormData', async function(data, thunkAPI) {
  const url = new URL('http://localhost:8080/application');
  if (data.middleName === '' || undefined) {
    data.middleName = null;
  }
  const result = await fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  });
  if (result.ok) {
    return thunkAPI.fulfillWithValue((await result.json()) as IinitialState['data']);
  }
  return thunkAPI.rejectWithValue((await result.json()) as IinitialState['errors']);
});

const prescoringSlice = createSlice({
  name: 'prescoringSlice',
  initialState,
  extraReducers(builder) {
    builder.addCase(sendFormData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(sendFormData.rejected, (state, action) => {
      state.errors = action.payload as IinitialState['errors'];
      state.loading = false;
    });
    builder.addCase(sendFormData.pending, (state, action) => {
      state.loading = true;
    });
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});
type PrescoringSlice = { prescoringSlice: ReturnType<typeof prescoringSlice.getInitialState> }

export const reducer = prescoringSlice.reducer;
export const { setLoading, setData, setErrors } = prescoringSlice.actions;
export const isLoading = (state: PrescoringSlice) => state.prescoringSlice.loading;
export const getData = (state: PrescoringSlice) => state.prescoringSlice.data;
export const getErrors = (state: PrescoringSlice) => state.prescoringSlice.errors;