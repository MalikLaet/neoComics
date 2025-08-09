// Import commands.js using ES2015 syntax:
import './commands'



const LOCAL_STORAGE_MEMORY: Record<string, string> = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key: string) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key: string) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
