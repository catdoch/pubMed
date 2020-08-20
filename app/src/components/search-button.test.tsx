import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { sendEvent } from '../util/api';
import SearchButton from './search-button';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('../util/api', () => ({
    sendEvent: jest.fn(),
}));

test('renders Search button component', () => {
    const SUT = render(<SearchButton value="ebola" />);
    expect(SUT).toMatchSnapshot();
});


test('search now button shows when value is not empty', () => {
    render(<SearchButton value="ebola" />);
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeVisible();
});

it('onclick should dispatch action', async () => {
    const SUT = render(<SearchButton value="ebola" />);
    const submitButton = screen.getByRole('button');
    await userEvent.click(submitButton);
    expect(sendEvent).toHaveBeenCalled();
});