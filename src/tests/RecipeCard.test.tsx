import { render, screen } from '@testing-library/react';
import RecipeCard from '../components/RecipeCard';
import { BrowserRouter } from 'react-router-dom';

describe('recipe card component', () => {
    test('rendering the title', () => {
      render(<BrowserRouter><RecipeCard id="123" title="Test Recipe" image="www.test.com" /></BrowserRouter>);
      const titleElement = screen.getByText('Test Recipe');
      expect(titleElement).toBeInTheDocument();
    });
})
