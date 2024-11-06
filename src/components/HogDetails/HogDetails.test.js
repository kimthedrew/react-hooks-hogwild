import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HogDetails from './HogDetails';

describe('<HogDetails />', () => {
  test('it should mount', () => {
    render(<HogDetails />);

    const hogDetails = screen.getByTestId('HogDetails');

    expect(hogDetails).toBeInTheDocument();
  });
});