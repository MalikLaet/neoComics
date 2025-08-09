import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.ts', // ou .js se usar JS
    supportFile: 'cypress/support/e2e.ts', // se tiver suporte
  },
})