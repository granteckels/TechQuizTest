import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  })

  it('Start Quiz button exists and is clicked', () => {
    cy.mount(<Quiz />)

    cy.get("button").contains("Start Quiz").click()
  })

  it('Start quiz and check if a question loads', () => {
    cy.mount(<Quiz />)

    cy.get("button").contains("Start Quiz").click()

    cy.get("h2");
  })
})