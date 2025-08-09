import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import md5 from 'crypto-js/md5';

export interface Price {
  type: string;
  price: number;
}

export interface Comic {
  id: number;
  title: string;
  thumbnail: { path: string; extension: string };
  prices: Price[];
}

interface ComicsState {
  comics: Comic[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: ComicsState = {
  comics: [],
  loading: false,
  error: null,
  searchQuery: "",
};


export const fetchComics = createAsyncThunk('comics/fetchComics', async () => {
const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey).toString();

  const res = await fetch(
    `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  if (!res.ok) throw new Error('Erro na requisição');
  const data = await res.json();
  const filtered = data.data.results.filter(
    (comic: Comic) => !comic.thumbnail.path.includes('image_not_available')
  );
  return filtered as Comic[];
});

const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
  setSearchQuery(state, action) {
    state.searchQuery = action.payload;
  }
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComics.fulfilled, (state, action) => {
        state.loading = false;
        state.comics = action.payload;
      })
      .addCase(fetchComics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro desconhecido';
      });
  },
});

export const { setSearchQuery } = comicsSlice.actions;
export default comicsSlice.reducer;