import { getGreeting } from '../support/app.po';

describe('materials', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to materials!');
  });
});
