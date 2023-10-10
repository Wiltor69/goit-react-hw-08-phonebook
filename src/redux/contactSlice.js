import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContact, fetchContacts } from './operation';

const contactsInitial = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const setError = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};
const setPending = state => {
  state.contacts.isLoading = true;
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitial,

  extraReducers: {
    [fetchContacts.pending]: setPending,
    [addContacts.pending]: setPending,
    [deleteContact.pending]: setPending,

    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },

    [fetchContacts.rejected]: setError,
    [addContacts.rejected]: setError,
    [deleteContact.rejected]: setError,
  },
});

export const contactReduce = contactSlice.reducer;
