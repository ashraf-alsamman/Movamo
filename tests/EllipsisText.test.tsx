import React from 'react';
import { render } from '@testing-library/react-native';
import EllipsisText from '../src/components/EllipsisText';

describe('EllipsisText', () => {
  it('displays text correctly when within max length', () => {
    const { getByText } = render(
      <EllipsisText text="Hello World" maxLength={20} />
    );

    expect(getByText('Hello World')).toBeDefined();
  });

  it('truncates text correctly when exceeding max length', () => {
    const { getByText } = render(
      <EllipsisText
        text="This is a long text that should be truncated"
        maxLength={10}
      />
    );

    expect(getByText('This is a ...')).toBeDefined();
  });
});
