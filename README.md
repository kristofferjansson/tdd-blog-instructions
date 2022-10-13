# TDD Blog Instructions

This is a TDD workshop. Write the tests using [outside in](https://www.codecademy.com/article/tdd-outside-in) tests.

## Rules

* Take turns. One write test, the other solves the test
* Code can only be ran with tests. No starting the code and use postman or similar
* Start with sunny days, then rainy days
* When writing test - Stop writing as soon as you have a red test.
* When writing code - Write the bare minimum code that satisfy the test.

**protip(s)**
* Do not test for things that are not there (they are infinite), test for things that are present.


## Task: Create a simple blog engine (API)

Dont care about rights, users or authentication for now.

### 1. Create & Read
You should be able to create a blogpost by POSTing to the API. When GETing the blogpost by its id you should see the same post. If no blogpost is present, you should return 404. A blog post consists of a title and a text.

* :sunny: Create blog post
* :sunny: Read blog post
* :cloud: Read blog post but no blog post found

### 2. View the all of the blog posts
On a typical blog there is a index page which lists all the blog posts. Build the API endpoint for this page.

* :sunny: Read the list endpoint. Make sure it contains a newly created blog post.
* :cloud: Read the list endpoint. No posts should be present.


### 3. Blog post validations
Title and text should be mandatory. The text cant be shorter than 10 chars. If it is you should show an error message and the post should not be present anywhere.

* :cloud: Create a blog post without anything. Make sure it is not accepted.
* :cloud: Create a blog post with a title but no body
* :cloud: Create a blog post with a body but no title
* :cloud: Create a blog post with a valid title but too short body


### 4. Update a blog post
You should be able to update an existing post by PUTing to an endpoint. Title and text should still be mandatory and the text still can't be shorter than 10 chars. When the post is updated it should be reflected in the other endpoints.

* :sunny: Create a blog post. Update it and read it.
* :cloud: `your on your own now`

### 5. Delete a blog post
You should be able to delete an existing post by sending DELETE to an endpoint.

:sunny:, :cloud:

### Bonus: Comments

Preferably make the comments be managed by a separate comments service which you mock out in the tests. If this is too hard, stick with database/in memory.

##### 1. Lägg till en kommentar till ett blogginlägg
There should be a nested comments endpoint. (or an `include=comments` query-parameter) (`posts/:postid:/comments`). When viewing that the comments should be included. Comments can't be empty.

##### 2.Kräv email av användaren
För att en användare ska få lämna en kommentar krävs att den anger en giltig emailadress. Annars ska ett felmeddelande visas.

##### 3. En användare får endast lämna en kommentar per inlägg
Se till att email är unik för varje kommentar (per blogginlägg)


### Bonus 2: Kategorier

##### 1. Varje blogginlägg har en kategori
När en användare skriver ett blogginlägg kan den välja en kategori från en dropdown. Kategorierna måste vara en av de befintliga kategorierna (t.ex. `%w{ fun education music film news misc }`) Kategorien ska vara obligatorisk.

##### 2. En användare kan redigera kategorier
En användare kan lägga till och ta bort kategorier i en speciellt vy. Det går även att byta namn på befintliga kategorier.
