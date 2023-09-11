import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sendFormData } from './slice';


interface IinitialState {
  dataLoanOffers: number | null | boolean,
  errorsLoanOffers: Record<string, any> | null,
  loanOfferSelected: boolean
}

const initialState: IinitialState = {
  dataLoanOffers: null,
  errorsLoanOffers: null,
  loanOfferSelected: false
};

export const sendLoanOffers = createAsyncThunk<IinitialState['dataLoanOffers'], any, { rejectValue: IinitialState['errorsLoanOffers'] }>
('sendLoanOffers', async function(dataLoanOffers, thunkAPI) {
  const url = new URL('/application/apply','http://localhost:8080');
  const result = await fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify(dataLoanOffers),
    headers: { 'Content-type': 'application/json' },
  });
  if (result.ok) {
    return thunkAPI.fulfillWithValue((await result.json()) as IinitialState['dataLoanOffers']);
  }
  return thunkAPI.rejectWithValue((await result.json()) as IinitialState['errorsLoanOffers']);
});

const prescoringLoanOffers = createSlice({
  name: 'prescoringLoanOffers',
  initialState,
  extraReducers(builder) {
    builder.addCase(sendLoanOffers.fulfilled, (state, action) => {
      state.dataLoanOffers = action.payload;
    });
    builder.addCase(sendLoanOffers.rejected, (state, action) => {
      state.errorsLoanOffers = action.payload as IinitialState['errorsLoanOffers'];
      state.loanOfferSelected = true;
    });
  },
  reducers: {
    setDataLoanOffers: (state, action) => {
      state.dataLoanOffers = action.payload;
    },
    setErrorsLoanOffers: (state, action) => {
      state.errorsLoanOffers = action.payload;
    },
  },
});
type PrescoringLoanOffers = { prescoringLoanOffers: ReturnType<typeof prescoringLoanOffers.getInitialState> }

export const reducerLoanOffers = prescoringLoanOffers.reducer;
export const {setDataLoanOffers, setErrorsLoanOffers} = prescoringLoanOffers.actions;
export const getLoanOfferSelected = (state: PrescoringLoanOffers) => state.prescoringLoanOffers.loanOfferSelected;
export const getDataLoanOffers = (state: PrescoringLoanOffers) => state.prescoringLoanOffers.dataLoanOffers;
export const getErrorsLoanOffers = (state: PrescoringLoanOffers) => state.prescoringLoanOffers.errorsLoanOffers;