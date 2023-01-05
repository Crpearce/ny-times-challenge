beforeEach(() => {
  cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=VGbjJxvHBhAtxDW1L6udQrT2acMxQXlG', {
    statusCode: 200,
    ok: true,
    fixture: 'articles'
  });
  cy.visit('http://localhost:3000')
  cy.get('.articles-container').should('exist')
    .get('[href="/2023-01-04T12:31:47-05:00"] > .article-card').click()
})

it('Should have a nav bar', () => {
  cy.get('.navigation').should('exist')
    .get('.app-name').should('exist')
    .get('.app-name').contains('THE NEW YORK TIMES')
    .get('.app-sub').should('exist')
    .get('.app-sub').contains('NEWS READER')
});

it('Should have an article detailed view with title, image, authors, abstract, and navigational buttons', () => {
  cy.get('.detail-wrapper').should('exist')
    .get('.detailed-title').should('exist').contains("Live Vote Count: Tracking the House Speaker Votes")
    .get('.card-image').should('exist')
    .get('.detailed-author').should('exist').contains("By Allison McCartney, Alicia Parlapiano and Emily Cochrane")
    .get('h5').should('exist').contains('Follow live to see how each representative voted for House speaker on each ballot')
    .get('u').should('exist')
    .get('button').should('exist')
});

it('Should provide a user multiple ways to navigate from the detailed view back to the homepage', () => {
  cy.url().should('eq', 'http://localhost:3000/2023-01-04T12:31:47-05:00')
  cy.get('.detail-wrapper').get('button').click()
  cy.url().should('eq', 'http://localhost:3000/')
  cy.go('back')
  cy.url().should('eq', 'http://localhost:3000/2023-01-04T12:31:47-05:00')
  cy.get('.navigation').get('.app-name').click()
  cy.url().should('eq', 'http://localhost:3000/')
  cy.go('back')
  cy.get('.navigation').get('.app-sub').click()
  cy.url().should('eq', 'http://localhost:3000/')
  cy.go('back')

});

