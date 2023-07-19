import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://64b4fba0f3dbab5a95c66caa.mockapi.io/contacts';
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', 
async(_, {rejectWithValue}) => {
try {
    const contacts = await axios.get('/contacts');
    return contacts.data;
    
} catch (e) {
    return rejectWithValue(e.message);
}
})

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name, number}, {rejectWithValue}) => {
      try {
        const response = await axios.post("/contacts", { name, number });
        return response.data;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );

  export const removeContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, {rejectWithValue}) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );