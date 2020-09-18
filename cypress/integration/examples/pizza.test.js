describe("Boarding app", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/pizza");
	});
	const usernameInput = () => cy.get("input[name=username]");
	const toppingInput = () => cy.get("[type=checkbox");
	const submitBtn = () => cy.get(`button[id=submitBtn]`);

	it("This test is going to be for a name text box", () => {
		usernameInput()
			.type("Jabril") //Type is invoked to manually change the value of the text to ("whatever u want")
			.should("have.value", "Jabril"); //Should checks to make sure it == the value
	});

	it("Test if you can select multiple toppings", () => {
		toppingInput().check();
	});

	it("Test if form can submit", () => {
		usernameInput().type("Maximus").should("have.value", "Maximus");
		cy.get("select").select("Large");
		toppingInput().check();
		submitBtn().click();
	});
});
