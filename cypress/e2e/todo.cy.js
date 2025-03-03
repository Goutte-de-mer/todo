describe("Gestion des tâches", () => {
  it("Ajoute une tâche", () => {
    cy.visit("/");
    cy.get("button[id='open-form']").click();
    cy.get("input[name='task']").type("Nouvelle tâche");
    cy.get("button[type='submit']").click();
    cy.contains("Nouvelle tâche");
  });
});
