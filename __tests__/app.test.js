import app from "../server.js";
import supertest from "supertest";
import express from "express";
const request = supertest(app);


describe("GET method tests", () => {

  it("it should show all the movies", async () => { // get all 
    const res = await request.get("/movies");
    expect(res.statusCode).toBe(200);
  });

  it("it should return a specific movie with id", async () => {
    const res = await request.get("/movies/5");
    expect(res.body.msg).toEqual([
      {
        id: 5,
        title: "Ice Age",
        director: "Chris Wedge",
        release_date: 2005
      }]);
    expect(res.statusCode).toBe(200);
  });

  it("if there is no id number it should return a error message", async () => {
    const res = await request.get("/movies/6");
    expect(res.status).toBe(404);
    expect(res.body.msg).toBe("There is no film with id number:6");
  })
});

describe("POST method tests", () => {
  it("It should add a new movie with corrent movie informations", async () => {
    const movie = {
      title: "Abc",
      director: "My",
      release_date: 2000
    };
    const res = await request.post("/movies").send(movie);
    expect(res.statusCode).toBe(201);

  });

  it("It should return an error with wrong movie informations", async () => {
    const movie = {
      name: "Abc",
      release_date: 2000
    };
    const res = await request.post("/movies").send(movie);
    expect(res.statusCode).toBe(404);
    expect(res.body.msg).toBe("Please write a correct movie informations!")
  })
})

describe("PUT method tests", () => {
  it("It should not update with empty movie title", async () => {
    const title = {
      title: ""
    };
    const res = await request.put("/movies/LOTR").send(title);
    expect(res.statusCode).toBe(404);
    expect(res.body.msg).toBe("You should write a movie title")
  });

  it("It should update movie with a correct movie title", async () => {
    const title = {
      title: "UpdatedMovie"
    };
    const res = await request.put("/movies/LOTR").send(title);
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("The movie with LOTR name was updated!")
  });

  it("It should not update with wrong movie title", async () => {
    const title = {
      title: "UpdatedMovie"
    };
    const res = await request.put("/movies/LOTRR").send(title);
    expect(res.statusCode).toBe(404);
    expect(res.body.msg).toBe("There is no film with this title:LOTRR")
  });

})

describe("DELETE method tests", () => {
  it("Movie can be delete with a correct id number", async () => {
    const res = await request.delete("/movies/5");
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Movie with 5 id number was deleted!")
  })

  it("Movies can not be delete with a wrong id number", async () => {
    const res = await request.delete("/movies/6");
    expect(res.statusCode).toBe(404);
    expect(res.body.msg).toBe("The movie with id 6 not found in the database.")
  })
})