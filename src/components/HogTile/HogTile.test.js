import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HogTile from './HogTile';

describe('<HogTile />', () => {
  test('it should mount', () => {
    render(<HogTile />);

    const hogTile = screen.getByTestId('HogTile');

    expect(hogTile).toBeInTheDocument();
  });
});