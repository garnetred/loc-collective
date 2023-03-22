import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

describe('About', () => {
  it('should render the about section', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );
    let expectedText1 = await getByText(
      'This site was designed to make the process of finding a loctician much easier for black people with locs. In my own search for a loctician, I often noticed that it was difficult to filter out stylists who do not work with my hair texture or to find stylists who specialized in locs beyond traditional locs. It was even difficult to find people to start locs in less common ways. This site tries to make this process a little easier for others.',
    );
    expect(expectedText1).toBeInTheDocument();
    expect(
      getByText(
        'If you have any questions, comments, or concerns, please feel free to reach out via the .',
      ),
    ).toBeInTheDocument();
    expect(getByText('contact form')).toBeInTheDocument();
  });
});
