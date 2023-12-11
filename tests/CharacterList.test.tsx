import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore, Store } from '@reduxjs/toolkit';
import characterReducer from '../src/redux/slices/charactersSlice';

import CharacterList from '../src/components/CharacterList';

interface Character {
  id: number;
  name: string;
}

interface CharactersState {
  characters: Character[];
  loading: 'idle' | 'loading' | 'succeeded' | 'failed';
  hasMoreData: boolean;
  totalCount: number;
}

// Assuming your store looks something like this
interface AppState {
  characters: CharactersState;
}
let store: Store<AppState>;

afterEach(() => {
  jest.resetAllMocks();
});

describe('CharacterList', () => {
  beforeEach(() => {
    store = configureStore<AppState>({
      reducer: {
        // @ts-ignore
        characters: characterReducer,
      },

      preloadedState: {
        characters: {
          characters: [
            { id: 1, name: 'Character 1' },
            { id: 2, name: 'Character 2' },
          ],
          loading: 'idle',
          hasMoreData: true,
          totalCount: 100,
        },
      },
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CharacterList />
      </Provider>
    );

    expect(getByText('Loaded 2')).toBeDefined();
    expect(getByText('All 100')).toBeDefined();
  });
});
