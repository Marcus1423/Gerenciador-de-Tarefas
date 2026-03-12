import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "./renderWithProviders";

import App from "../App";

describe("Tela de tarefas", () => {

  test("mostra o título Crie uma Nova Tarefa", () => {

    renderWithProviders(<App />);

    const titulo = screen.getByText(/Crie uma Nova Tarefa/i);

    expect(titulo).toBeInTheDocument();

  });

});