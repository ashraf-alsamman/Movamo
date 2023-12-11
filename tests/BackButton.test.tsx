import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BackButton from '../src/components/BackButton';
import { BackHandler } from 'react-native';

// Mock BackHandler.exitApp
jest.mock('react-native/Libraries/Utilities/BackHandler', () => ({
  exitApp: jest.fn(),
}));

describe('BackButton', () => {
  it('calls BackHandler.exitApp when pressed', () => {
    const { getByTestId } = render(<BackButton />);
    const backButton = getByTestId('backButton');

    fireEvent.press(backButton);

    expect(BackHandler.exitApp).toHaveBeenCalled();
  });
});
