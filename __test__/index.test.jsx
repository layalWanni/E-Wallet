import { render, screen } from '@testing-library/react';
import Login from '../pages/login';
import '@testing-library/jest-dom';




describe('Login', () => {
    it('renders a heading', () => {
      render(<Login />)
  
      const heading = screen.getByRole('heading', {
        name: /\E-WALET/i,
      })
  
      expect(heading).toBeInTheDocument()
    })
  })