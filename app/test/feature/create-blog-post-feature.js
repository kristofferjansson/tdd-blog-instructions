import supertest from "supertest";
import app from "../../index.js";

Feature("Create blog post", () => {
    Scenario("Successfully creating a blog post", () => {

        let response;
        let responseGet;
        const postData = {
                title: "Foo",
                body: "Bar"
        }
        let postId;
        When("making a POST request", async () => {
            response = await supertest(app).post("/posts").send(postData)
        });

        Then("we should get a 201 OK", () => {
            expect(response.status).to.equal(201);
        });

        And("we get back ID", () => {
            expect(response.body.id).to.be.ok;
            postId = response.body.id;
        });

        When("making a GET request on ID", async () => {
            responseGet = await supertest(app).get(`/posts/${postId}`)
        })

        Then("we should get 200 OK", () => {
            expect(responseGet.status).to.equal(200);
        })

        And("we get same post back", () => {
            expect(responseGet.body).to.deep.equal(postData);
        })
    });
});