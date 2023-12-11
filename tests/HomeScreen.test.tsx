import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';
import NetInfo from '@react-native-community/netinfo';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

jest.mock('@react-native-community/netinfo', () => ({
  fetch: () =>
    Promise.resolve({
      isConnected: true,
      isInternetReachable: true,
    }),
  addEventListener: jest.fn(),
}));

describe('HomeScreen', () => {
  it('renders the loading state initially', () => {
    // @ts-ignore
    NetInfo.addEventListener.mockImplementation((callback) => {
      callback({ isConnected: null });
      return () => {};
    });

    const { getByText } = render(
      <Provider store={store}>
        <HomeScreen />{' '}
      </Provider>
    );
    expect(getByText('Loading...')).toBeDefined();
  });

  it('renders the character list when online', () => {
    // @ts-ignore
    NetInfo.addEventListener.mockImplementation((callback) => {
      callback({ isConnected: true });
      return () => {};
    });

    const { queryByText } = render(
      <Provider store={store}>
        <HomeScreen />{' '}
      </Provider>
    );
    expect(queryByText('No Internet Connection')).toBeNull();
  });

  it('shows an error message when offline', () => {
    // @ts-ignore
    NetInfo.addEventListener.mockImplementation((callback) => {
      callback({ isConnected: false });
      return () => {};
    });

    const { getByText } = render(
      <Provider store={store}>
        <HomeScreen />{' '}
      </Provider>
    );
    expect(getByText('No Internet Connection')).toBeDefined();
  });
});
