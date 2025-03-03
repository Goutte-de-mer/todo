import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "../app/page";

describe("Home component", () => {
  beforeEach(() => {
    // On mock l'API fetch pour renvoyer un tableau vide
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ tasks: [] }),
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("affiche 'Aucune tâche' lorsque /api/tasks renvoie un tableau vide", async () => {
    render(<Home />);

    // Vérifie que la route /api/tasks a bien été appelée
    expect(global.fetch).toHaveBeenCalledWith("/api/tasks");

    // Attends que le composant ait fini de charger les données
    await waitFor(() => {
      // Vérifie que le texte "Aucune tâche" est présent dans le document
      expect(screen.getByText("Aucune tâche")).toBeInTheDocument();
    });
  });
});
