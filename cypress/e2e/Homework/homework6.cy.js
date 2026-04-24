const url = 'https://jsonplaceholder.typicode.com/posts/1'

describe('Homework 6', () =>{
    it('should test json placeholder API', function () {

        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)
        })

        cy.request(
            {
                method: 'PUT',
                url : url,
                body: JSON.stringify({
                    id: 1,
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                }),
                headers: {'Content-type' : 'application/json'}
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('foo')
            expect(response.body.userId).to.eq(1)
            expect(response.body.userId).not.to.eq(2,10,100)
        })

        cy.request(
            {
                method: 'DELETE',
                url: url,
                headers: {'Content-type': 'application/json'}     
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).not.to.exist
            expect(response.body).to.be.empty
        })
    })
})