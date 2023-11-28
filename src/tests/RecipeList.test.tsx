import { render, screen } from '@testing-library/react';
import RecipeList from '../pages/RecipeList';
import { BrowserRouter } from 'react-router-dom';

describe('recipe list page', () => {
    test('rendering the title', () => {
      render(<BrowserRouter><RecipeList /></BrowserRouter>);
      const titleElement = screen.getByText('Thanksgiving Side Ideas');
      expect(titleElement).toBeInTheDocument();
    });

    test('show loading state initially', () => {
        render(<BrowserRouter><RecipeList /></BrowserRouter>);
        const loadingElement = screen.getByText('Loading...');
        expect(loadingElement).toBeInTheDocument();
    });
})
