// import Quiz from '../../client/src/components/Quiz'

// describe('test', () => {
//   it('pass', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Complete Quiz Game', () => {
  it('Click Start Quiz and finish game', () => {
    cy.visit("http://127.0.0.1:3001")

    cy.get("button").contains("Start Quiz").click()

    cy.get("button").contains("1").click()
    cy.get("button").contains("2").click()
    cy.get("button").contains("3").click()
    cy.get("button").contains("4").click()
    cy.get("button").contains("3").click()
    cy.get("button").contains("2").click()
    cy.get("button").contains("1").click()
    cy.get("button").contains("2").click()
    cy.get("button").contains("3").click()
    cy.get("button").contains("4").click()

    cy.get("h2").contains("Quiz Completed")
    cy.get("button").contains("Take New Quiz").click()
  })
})