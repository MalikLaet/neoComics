import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import md5 from 'crypto-js/md5';

export interface Comic {
  id: number;
  title: string;
  thumbnail: { path: string; extension: string };
}

interface ComicsState {
  comics: Comic[];
  loading: boolean;
  error: string | null;
}

const initialState: ComicsState = {
  comics: [],
  loading: false,
  error: null,
};


export const fetchComics = createAsyncThunk('comics/fetchComics', async () => {
  const publicKey = 'cca0fda9ccd59784c51d1235a0d916e4';
  const privateKey = 'e2836998fb198bd9fc62356ee436afda64b09c5c';
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey).toString();

  const res = await fetch(
    `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  if (!res.ok) throw new Error('Erro na requisição');
  const data = await res.json();
  // filtrar quadrinhos que têm imagem
  const filtered = data.data.results.filter(
    (comic: Comic) => !comic.thumbnail.path.includes('image_not_available')
  );
  return filtered as Comic[];
});

const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {},
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

export default comicsSlice.reducer;
