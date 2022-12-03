import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/login';
import '@testing-library/jest-dom';

import api from '../services/api';
import fakeFetchApi from '../services/UserAPIFetch';




describe('Login', () => {
  it('renders a heading', () => {
    render(<Login />)


    expect(screen.getByLabelText("Senha")).toBeInTheDocument()
    expect(screen.getByLabelText("Email")).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "billgates@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText("Senha"), {
      target: { value: "#FuckApple666" },
    });

    expect(screen.getByRole('heading', {
      name: /\E-WALET/i,
    })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', {
      name: /\Entrar/i,
    }));

  })

  it('api', () => {
    render(<Login />)

    expect(fakeFetchApi({
      email: "billgates@gmail.com",
      password: "#FuckApple666",
    }).status).toBe(200)

    expect(fakeFetchApi({
      email: "billgates@gmail",
      password: "#FuckApple666",
    }).status).not.toBe(200)


  })
})

