import supertest from "supertest";
import app from "../../index.js";

Feature("Update blog post", () => {
    Scenario("Update blog post successfully", () => {
        let response;
        let responseGet;
        const postData = {
                title: "Foo",
                body: "Barbarbarbar"
        }
        let postId;
        When("making a POST request", async () => {
            response = await supertest(app).post("/posts").send(postData)
        });

        Then("we should get a 201 OK", () => {
            expect(response.status).to.equal(201, response.text);
        });

        And("we get back ID", () => {
            expect(response.body.id).to.be.ok;
            postId = response.body.id;
        });
        
        const updatedPostData = {
            title: "Boo",
            body: "Harharharhar"
        }
        When("making a PUT request on ID", async () => {
            response = await supertest(app).put(`/posts/${postId}`).send(updatedPostData)
        })

        Then("we should get 200 OK", () => {
            expect(response.status).to.equal(200);
        })

        When("making a GET request on ID", async () => {
            responseGet = await supertest(app).get(`/posts/${postId}`)
        })

        Then("we should get 200 OK", () => {
            expect(responseGet.status).to.equal(200);
        })

        And("we get updated post back", () => {
            expect(responseGet.body).to.deep.equal(updatedPostData);
        })
    });
    
    Scenario("Update blog post unsuccessfully", () => {
    });     
});