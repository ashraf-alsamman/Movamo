import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PrimaryButton from '../src/components/PrimaryButton';
import { View } from 'react-native';

describe('PrimaryButton', () => {
  it('renders the button with the correct title', () => {
    const { getByText } = render(
      <PrimaryButton title="Click Me" onPress={() => {}} />
    );
    expect(getByText('Click Me')).toBeDefined();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <PrimaryButton title="Click Me" onPress={mockOnPress} />
    );
    fireEvent.press(getByText('Click Me'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('renders an icon when provided', () => {
    const TestIcon = <View testID="test-icon" />;
    const { getByTestId } = render(
      <PrimaryButton
        title="Button With Icon"
        onPress={() => {}}
        icon={TestIcon}
      />
    );
    expect(getByTestId('test-icon')).toBeDefined();
  });
});
