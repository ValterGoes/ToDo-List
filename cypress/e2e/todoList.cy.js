/// <reference types="cypress" />

describe('UI testing in a CRUD project', () => {
  it('test insertion, deletion, task completion', () => {

    cy.visit('http://localhost:5173/');
    cy.get('h1').should('have.text', 'ToDo List');
  });
});