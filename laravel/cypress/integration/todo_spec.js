const dummyData =  {task: 'Task 2'};

describe('Running Request `TODO` API', () => {

	after(() => {
	    cy.exec("php artisan migrate:refresh --seed");
	});

	it('POST Request empty Todo value should return false', () => {
		// POST without or empty task  
		cy.request('POST', 'api/todo', { task: '' }).then(
			(res) => {
				expect(res.status).to.eq(200)
				expect(res.body.error.task).to.have.property(0, "The task field is required.") // true
			}
		);
	});

	it('POST Request', () => {
		// 
		cy.request('POST', 'api/todo', dummyData).then(
			(res) => {
				expect(res.status).to.eq(200)
				expect(res.body).to.have.property('status', 1) // true
			}
		);

		cy.request('GET', 'api/todo').then((res) => {
			expect(res.status).to.eq(200);
			expect(res.body.todos.length).to.eq(6);
		});	

	});

	// 
	it('GET Request', () => {
		cy.request('GET', 'api/todo').then((res) => {
			expect(res.status).to.eq(200);
			expect(res.body.todos.length).to.eq(6);
		});	
	});
	
	it('DELETE Request', () => {
	  	// DELETE 
		cy.request('DELETE', 'api/todo/2').then(
			(res) => {
				expect(res.status).to.eq(200)
				expect(res.body).to.have.property('status', 1) // // since I don't have the ID 2 this will return false 
			}
		)
	});

})

describe('Running Request `TODO` API PUT', () => { 

	it('PUT Request', () => {
		// PUT
	 	cy.request('PUT', 'api/todo/1', null).then(
			(res) => {
				expect(res.status).to.eq(200)
				expect(res.body).to.have.property('status', 1) // true
			}
		)

		cy.request('GET', 'api/todo').then((res) => {
			expect(res.status).to.eq(200);
			expect(res.body.todos.length).to.eq(5);
		});	
	});
});


describe('Mocked data Request `TODO` GET API', () => {

	beforeEach('View Request', (res) => {
		cy.server();
		cy.route('GET', 'api/todo', 'todo.json');
	});


});

