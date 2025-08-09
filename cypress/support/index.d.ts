declare namespace Cypress {
  interface Chainable<Subject = unknown> {
    saveLocalStorage(): Chainable<void>;
    restoreLocalStorage(): Chainable<void>;
  }
}