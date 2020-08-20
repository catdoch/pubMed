import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockImplementation((callback) => {
      return callback({
          data: { count: 115, searchResult: {657657: {uid: 123 }}, isLoading: false },
      });
  }),
  useDispatch: () => mockDispatch,
}));

jest.mock('./components/input', () => () => null);
jest.mock('./components/journal', () => () => null);

test('renders learn react link', () => {
  const SUT = render(<App />);
  expect(SUT).toMatchSnapshot();
});

test('produces the right count', () => {
  const {container} = render(<App />);
  expect(container.querySelector('h2')).toHaveTextContent('115 journals found');
});
