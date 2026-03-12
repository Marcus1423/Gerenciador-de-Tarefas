import { render } from "@testing-library/react";
import { ThemeProvider } from "../contexts/ThemeContext";
import { TaskProvider } from "../contexts/TaskContext";

export function renderWithProviders(ui) {
  return render(
    <ThemeProvider>
      <TaskProvider>
        {ui}
      </TaskProvider>
    </ThemeProvider>
  );
}