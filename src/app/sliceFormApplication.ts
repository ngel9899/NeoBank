import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



interface IinitialState {
  dataApplication: Array<Record<string, any>> | null,
  errorsApplication: Record<string, any> | null,
}

const initialState: IinitialState = {
  dataApplication: null,
  errorsApplication: null,
};

export const sendFormDataApplication = createAsyncThunk<IinitialState['dataApplication'], any, { rejectValue: IinitialState['errorsApplication'] }>
('sendFormDataApplication', async function( dataApplication, thunkAPI) {
  const {data, id} = dataApplication;
  const modifiedData = {
    gender: data.gender,
    maritalStatus: data.maritalStatus,
    dependentAmount: data.dependentAmount,
    passportIssueDate: data.passportIssueDate,
    passportIssueBranch: data.passportIssueBranch,
    employment: {
      employmentStatus: data.employmentStatus,
      employerINN: data.employerINN,
      salary: data.salary,
      position: data.position,
      workExperienceTotal: data.workExperienceTotal,
      workExperienceCurrent: data.workExperienceCurrent
    }
  };
  const url = new URL('http://localhost:8080/application/registration/'+ id);
  const result = await fetch(url.toString(), {
    method: 'PUT',
    body: JSON.stringify(modifiedData),
    headers: { 'Content-type': 'application/json' },
  });
  if (result.ok) {
    return thunkAPI.fulfillWithValue((await result.json()) as IinitialState['dataApplication']);
  }
  return thunkAPI.rejectWithValue((await result.json()) as IinitialState['errorsApplication']);
});

const prescoringSliceApplication = createSlice({
  name: 'prescoringSliceApplication',
  initialState,
  extraReducers(builder) {
    builder.addCase(sendFormDataApplication.fulfilled, (state, action) => {
      state.dataApplication = action.payload;
    });
    builder.addCase(sendFormDataApplication.rejected, (state, action) => {
      state.errorsApplication = action.payload as IinitialState['errorsApplication'];
    });
  },
  reducers: {
    setDataApplication: (state, action) => {
      state.dataApplication = action.payload;
    },
    setErrorsApplication: (state, action) => {
      state.errorsApplication = action.payload;
    },
  },
});
type PrescoringSlice = { prescoringSliceApplication: ReturnType<typeof prescoringSliceApplication.getInitialState> }

export const reducerApplication = prescoringSliceApplication.reducer;
export const { setDataApplication, setErrorsApplication } = prescoringSliceApplication.actions;
export const getDataApplication = (state: PrescoringSlice) => state.prescoringSliceApplication.dataApplication;
export const getErrorsApplication = (state: PrescoringSlice) => state.prescoringSliceApplication.errorsApplication;
