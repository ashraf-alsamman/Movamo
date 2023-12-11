import React from 'react';
import { render } from '@testing-library/react-native';
import CharacterListItem from '../src/components/CharacterListItem';

// Mock character data
const mockCharacter = {
  id: 2,
  name: 'Rick Sanchez',
  image: 'https://example.com/rick.png',
  gender: 'Male',
  species: 'Human',
};

describe('CharacterListItem', () => {
  it('renders character information correctly', () => {
    const { getByText } = render(
      <CharacterListItem character={mockCharacter} />
    );

    expect(getByText(mockCharacter.name)).toBeDefined();
    expect(getByText(mockCharacter.gender)).toBeDefined();
    expect(getByText(mockCharacter.species)).toBeDefined();
  });
});
