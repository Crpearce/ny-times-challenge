beforeEach(() => {
  cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=VGbjJxvHBhAtxDW1L6udQrT2acMxQXlG', {
    statusCode: 200,
    ok: true,
    fixture: 'articles'
  });
  cy.visit('http://localhost:3000')
})

it('Should have a homepage with a nav bar', () => {
  cy.get('.navigation').should('exist')
    .get('.app-name').should('exist')
    .get('.app-name').contains('THE NEW YORK TIMES')
    .get('.app-sub').should('exist')
    .get('.app-sub').contains('NEWS READER')
});

it('Should have a search bar to filter articles', () => {
  cy.get('.search-container').should('exist')
    .get('.search-box').type('Live')
});

it('Should have an articles container to display each individual news story', () => {
  cy.get('.articles-container').should('exist')
    .get('[href="/2023-01-04T12:31:47-05:00"] > .article-card').should('exist')
    .get('[href="/2023-01-04T12:31:47-05:00"] > .article-card > .wrapper > .card-image').should('exist')
    .get('[href="/2023-01-04T12:31:47-05:00"] > .article-card > h3').should('exist')
    .get('[href="/2023-01-04T12:31:47-05:00"] > .article-card > h4').should('exist')
    .get('[href="/2023-01-04T12:31:47-05:00"] > .article-card > .card-date').should('exist')
    .get('[href="/2023-01-05T11:57:09-05:00"]').should('exist')
    .get('[href="/2023-01-05T11:57:09-05:00"] > .article-card > .wrapper > .card-image').should('exist')
    .get('[href="/2023-01-05T11:57:09-05:00"] > .article-card > h3').should('exist')
    .get('[href="/2023-01-05T11:57:09-05:00"] > .article-card > h4').should('exist')
    .get('[href="/2023-01-05T11:57:09-05:00"] > .article-card > .card-date').should('exist')
});

it('Should have a search bar to filter articles', () => {
  cy.get('.articles-container').should('exist')
    .get('[href="/2023-01-04T12:31:47-05:00"] > .article-card').click()
});





