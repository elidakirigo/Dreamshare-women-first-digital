describe('Landing page', () => {
	beforeEach(() => {
		cy.visit('https://dreamshare-women-first-digital.vercel.app/')
	})

	it('Contains correct header text', () => {
		cy.getDataTest('title-header').should('contain.text', 'DREAMSHARE')
	})
})
