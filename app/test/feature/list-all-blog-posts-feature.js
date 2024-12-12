import supertest from "supertest";
import app from "../../index.js";
import { clear } from "../../lib/db.js";

Feature("List all blog posts", () => {
  beforeEachScenario(() => {
    clear();
  });
  Scenario("Successfully list all blog posts", () => {
    const post1 = {
      title: "First post",
      body: "Some body for first post"
    }
    const post2 = {
      title: "Second post",
      body: "Some body for second post"
    }
    Given("two blog posts exist", async () => {
      const post1Id = (await supertest(app).post("/posts").send(post1)).body.id;
      post1.id = post1Id;
      const post2Id = (await supertest(app).post("/posts").send(post2)).body.id;
      post2.id = post2Id;
    });

    let response;
    When("requesting /posts to get all posts", async () => {
      response = await supertest(app).get("/posts");
    });
    Then("we should get a 200 OK", () => {
      expect(response.statusCode).to.eql(200, response.text);
    });
    And("a list of blog posts", () => {
      expect(response.body).to.deep.eql([post1, post2])
    });
  });
});
