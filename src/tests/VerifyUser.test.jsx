import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "./renderWithProviders";
import App from "../App";

test("adiciona uma tarefa na lista", async () => {

  renderWithProviders(<App />);

  const input = screen.getByPlaceholderText(/Título da tarefa/i);

  const select = screen.getByRole("combobox");

  const botao = screen.getByRole("button", {
    name: /Salvar/i
  });

  await userEvent.type(input, "Estudar React");

  await userEvent.selectOptions(select, "Estudo");

  await userEvent.click(botao);

  const tarefa = screen.getByText("Estudar React");

  expect(tarefa).toBeInTheDocument();

});