import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://657aab661acd268f9afb81bc.mockapi.io/adverts';

export const fetchAdverts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/advert');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const getOneContact = createAsyncThunk(
//   'contacts/getOneContact',
//   async id => {
//     try {
//       const { contact } = await axios.get(`/advert/${id}`);
//       // console.log(id);
//       return contact;
//     } catch (error) {}
//   }
// );
