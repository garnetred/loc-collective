import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Styles from './Styles';

describe('Styles', () => {
  it('should render the first paragraph', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Styles />
      </BrowserRouter>,
    );
    let textHeader = getByText('Traditional locs');
    let textParagraph = getByText(
      "Traditional locs are a long-term hair style that can be started using many methods - most popularly, twists or comb coils. Traditional locs are normally retwisted using palm rolling - however, it's possible to get traditional locs and then switch to a different retightening technique. Traditional locs are larger than other locs and someone with traditional locs will have fewer locs than someone with micro locs.",
    );
    expect(textHeader).toBeInTheDocument();
    expect(textParagraph).toBeInTheDocument();
  });

  it('should render the second paragraph', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Styles />
      </BrowserRouter>,
    );
    let textHeader = getByText('Interlocks');
    let textParagraph = getByText(
      'Interlocks are generally smaller locs that are maintained and started via a method called interlocking, which crochets the hair together. Some people choose interlocks because retightenings often last longer and you can do things such as swim or wash your hair immediately after a retightening with no ill effect. Interlocking can also be used to maintain other types of locs as well.',
    );
    expect(textHeader).toBeInTheDocument();
    expect(textParagraph).toBeInTheDocument();
  });

  it('should render the third paragraph', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Styles />
      </BrowserRouter>,
    );
    let textHeader = getByText('Sisterlocks');
    let textParagraph = getByText(
      'Sisterlocks are micro locs (very small locs) They come in several different sizes. Since sisterlocks are a patented technique, they can be expensive to install and maintain, but they offer a lot of versatility in terms of hair styling options and the same benefits as interlocking above.',
    );
    expect(textHeader).toBeInTheDocument();
    expect(textParagraph).toBeInTheDocument();
  });

  it('should render the fourth paragraph', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Styles />
      </BrowserRouter>,
    );
    let textHeader = getByText('Brotherlocks');
    let textParagraph = getByText(
      "Brotherlocks are larger sisterlocks - they may not always be considered microlocs. They're also a patented technique and look similar to sisterlocks except for the size.",
    );
    expect(textHeader).toBeInTheDocument();
    expect(textParagraph).toBeInTheDocument();
  });

  it('should render the fifth paragraph', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Styles />
      </BrowserRouter>,
    );
    let textHeader = getByText('Microlocs');
    let textParagraph = getByText(
      'Microlocs very small locs. Someone with microlocs can have upwards of 500+ locs. Usually microlocs are not maintained by palm rolling.',
    );
    expect(textHeader).toBeInTheDocument();
    expect(textParagraph).toBeInTheDocument();
  });

  it('should render the sixth paragraph', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Styles />
      </BrowserRouter>,
    );
    let textHeader = getByText('Faux locs');
    let textParagraph = getByText(
      'Faux loc hair extensions that look like locs. They often look like traditional locs, but have a shinier appearance. This can be a good way to test out locs without making the commitment.',
    );
    expect(textHeader).toBeInTheDocument();
    expect(textParagraph).toBeInTheDocument();
  });
});
