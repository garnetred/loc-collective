import React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import Footer from "./Footer"

describe('Footer', () => {
    it('should render the footer', () => {
        const {getByText} = render(<BrowserRouter><Footer /></BrowserRouter>)
        expect(getByText('Designed and built by')).toBeInTheDocument();
        expect(getByText('December Design & Development')).toBeInTheDocument();
    })
})