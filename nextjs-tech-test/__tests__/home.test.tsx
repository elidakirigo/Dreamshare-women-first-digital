// Import necessary libraries and components
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../app/page';

// Unit tests for the Home component
describe('Home Component', () => {

    it('renders the Header component', () => {
        const { getByLabelText } = render(<Home />);
        expect(getByLabelText(/Main Navigation/i)).toBeInTheDocument();
    });
 
});
