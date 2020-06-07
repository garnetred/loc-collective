import React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import Header from "./Header"

describe('Header', () => {
    it('should render the header', () => {
        const {getByText} = render(<BrowserRouter><Header /></BrowserRouter>)
        expect(getByText('about')).toBeInTheDocument();
    })
})