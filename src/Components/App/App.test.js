import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import '@sheerun/mutationobserver-shim';
import { fetchStylist, getSearchResults } from '../../apiCalls';
import { singleSalonBusinessFetch, salons } from '../../mockData';

window.MutationObserver = require('@sheerun/mutationobserver-shim');
jest.mock('../../apiCalls');

describe('App', () => {
  it('renders the App component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(getByText('loc collective.')).toBeInTheDocument();
  });

  it('can navigate to other pages', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const aboutDetails =
      'This site was designed to make the process of finding a loctician much easier for black users with locs. In my own search for a loctician, I often noticed that it was difficult to filter out stylists who couldn’t do black hair or find stylists who specialized in locs other than traditional locs. It was even difficult to find people to start locs in less common ways. This site tries to make this process a little easier for others.';
    fireEvent.click(getByText('about'));
    expect(getByText(aboutDetails)).toBeInTheDocument();
    fireEvent.click(getByText('styles'));
    expect(getByText('Interlocks')).toBeInTheDocument();
  });

  it('should show no results found if there are no appropriate matches', async () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    fireEvent.change(getByTestId('select'), {
      target: { value: 'locs+dreadlocks' },
    });

    fireEvent.change(getByPlaceholderText('location'), {
      target: { value: 'Boston' },
    });

    fireEvent.click(getByText('search'));

    getSearchResults.mockReturnValue(
      Promise.resolve({
        businesses: [],
        region: {
          center: { longitude: -84.30290222167969, latitude: 39.8673127275353 },
        },
        total: 0,
      }),
    );
    await waitFor(() =>
      expect(
        getByText('No results found. Please try a new search.'),
      ).toBeInTheDocument(),
    );
  });

  it.skip('should show loading spinner while searching', async () => {
    getSearchResults.mockResolvedValue(salons);
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    fireEvent.change(getByTestId('select'), {
      target: { value: 'locs+dreadlocks' },
    });

    fireEvent.change(getByPlaceholderText('location'), {
      target: { value: 'Boston' },
    });

    fireEvent.click(getByText('search'));
  });

  it('should show results found if there are appropriate matches', async () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    fireEvent.change(getByTestId('select'), {
      target: { value: 'locs+dreadlocks' },
    });

    fireEvent.change(getByPlaceholderText('location'), {
      target: { value: 'Boston' },
    });

    fireEvent.click(getByText('search'));
    getSearchResults.mockResolvedValue(salons);

    await waitFor(() => expect(getByText('Zahara Locs')).toBeInTheDocument());
  });

  it('should show detailed results after a user clicks on a result', async () => {
    fetchStylist.mockReturnValue(Promise.resolve(singleSalonBusinessFetch));
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    fireEvent.change(getByTestId('select'), {
      target: { value: 'locs+dreadlocks' },
    });

    fireEvent.change(getByPlaceholderText('location'), {
      target: { value: 'Boston' },
    });

    fireEvent.click(getByText('search'));

    await getSearchResults.mockResolvedValue(salons);

    await waitFor(() => expect(getByText('Bornu Locs')).toBeInTheDocument());

    fireEvent.click(getByText('Bornu Locs'));

    await waitFor(() =>
      expect(getByText('I hate this salon')).toBeInTheDocument(),
    );
  });
});
