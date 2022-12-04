import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts } from './operations';

const getContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = true;
  state.error = action;
};

const extraActions = [getContacts];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getContacts.fulfilled, getContactsSuccessReducer)
      .addMatcher(getActions('fulfilled'), handleFulfilled)
      .addMatcher(getActions('rejected'), handleRejected),
});

export const contactsReducer = slice.reducer;
