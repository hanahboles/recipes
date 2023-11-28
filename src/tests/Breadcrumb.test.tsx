import { render, screen } from '@testing-library/react';
import Breadcrumb from '../components/Breadcrumb';
import { BrowserRouter } from 'react-router-dom';

describe('breadcrumb component', () => {
    test('always render home link', () => {
      render(<BrowserRouter><Breadcrumb /></BrowserRouter>);
      const linkElement = screen.getByText('Recipes');
      expect(linkElement).toBeInTheDocument();
    });

    test('show current page name, if provided', () => {
      render(<BrowserRouter><Breadcrumb currentPage="Apple Pie" /></BrowserRouter>);
      const linkElement = screen.getByText('Apple Pie',{exact: false});
      expect(linkElement).toBeInTheDocument();
    });
})
