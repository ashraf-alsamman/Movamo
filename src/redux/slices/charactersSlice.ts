import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacters } from '../../services/api';

interface Character {
  id: number;
  name: string;
  gender: string;
  species: string;
  image: string;
}

interface CharactersState {
  characters: Character[];
  loading: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
  hasMoreData: boolean;
  totalCount: number;
}

interface FetchCharactersInfo {
  page: number;
}

export const fetchCharactersAsync = createAsyncThunk(
  'characters/fetchCharacters',
  async (info: FetchCharactersInfo) => {
    const response = await getCharacters(info.page);
    return response;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [] as Character[],
    loading: 'idle',
    error: null,
    hasMoreData: true,
    totalCount: 0,
  } as CharactersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersAsync.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(fetchCharactersAsync.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.characters = [
          ...state.characters,
          ...(action.payload.characters || []),
        ];
        state.hasMoreData = action.payload.hasMoreData;
        state.totalCount = action.payload.totalCount;
        state.error = null;
      })
      .addCase(fetchCharactersAsync.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default charactersSlice.reducer;
