import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
  expect(getByText('loc collective.')).toBeInTheDocument();
});
