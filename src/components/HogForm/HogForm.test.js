import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HogForm from './HogForm';

describe('<HogForm />', () => {
  test('it should mount', () => {
    render(<HogForm />);

    const hogForm = screen.getByTestId('HogForm');

    expect(hogForm).toBeInTheDocument();
  });
});