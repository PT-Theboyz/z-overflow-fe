
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios');

// fungsi dibawah ini untuk dijadikan action pada createSlice
const incremented = (state) => { //state ini isinya ada pada initialState
  state.value += 1 //bisa mengubah state, wajib mengubah sesuatu secara immutable untuk array atau object
}

const decremented = (state) => {
  state.value -= 1
}

const getPokemon = createAsyncThunk('get/getPokemon', async () => {
  const endpoints = [
    'https://pokeapi.co/api/v2/pokemon/1',
    'https://pokeapi.co/api/v2/pokemon/2',
    'https://pokeapi.co/api/v2/pokemon/3'
  ]
  const res = await axios.all(endpoints.map(endpoint => axios.get(endpoint))).then(data => data.map(val => val.data))
  return res
})


const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    pokemon: [],
    loading: false,
  },
  reducers: {//sync actions
    incremented,
    decremented,
  },
  extraReducers: {//hasil dari async thunk function
    [getPokemon.pending]: (state, action) => { //ini karena udah connect asyncThunk jadi akan ada 3 hasil pending, fulfilled, rejected
      state.loading = true;
    },
    [getPokemon.fulfilled]: (state, action) => {
      console.log(action)
      state.loading = false;
      state.pokemon = action.payload
    },
  }
})

export const actions = {
  ...slice.actions, getPokemon
};
export default slice.reducer;
