import movies from "../sources/movies.js";
import { v4 as uuid_v4 } from "uuid";


export const getMovies = (req, res) => { // show all movies to users
  res.status(200).json({ msg: movies });
};

export const getMoviesById = (req, res) => { // show specific movies with id number
  const reqId = req.params.id;
  const movie = movies.filter(eachMovie => eachMovie.id == reqId);
  if (movie.length === 0) { // if id number is wrong send a error message
    res.status(404).json({ msg: `There is no film with id number:${reqId}` });
  }
  res.status(200).json({ msg: movie })
};

export const addMovie = (req, res) => { // add movie with correnct informations
  const newMovie =
  {
    id: uuid_v4(),
    title: req.body.title,
    director: req.body.director,
    release_date: req.body.release_date
  };

  if (!newMovie.title || !newMovie.director || !newMovie.release_date) { // if the informations missing, send error message
    res.status(404).json({ msg: "Please write a correct movie informations!" });
    return;
  };

  movies.push(newMovie);
  res.status(201).json({ msg: `New Movie was created with ${newMovie.id} id number!` })
};

export const updateMovie = (req, res) => { // reach to movie with title name and update it
  const movieTitle = req.params.title;
  const movie = movies.filter(eachMovie => eachMovie.title === movieTitle);
  if (movie.length === 0) { // if ttitle name is wrong send a error message
    res.status(400).json({ msg: `There is no film with this title:${movieTitle}` })
    return;
  }
  if (!req.body.title) { // if the title name is empty send a error message
    res.status(404).json({ msg: `You should write a movie title` })
    return;
  }
  movie[0].title = req.body.title;
  res.status(200).json({ msg: `The movie with ${movieTitle} name was updated!` });
};

export const deleteMovie = (req, res) => { // delete a specific movie with id number
  const movieId = req.params.id;
  const indexOfObject = movies.findIndex(eachMovie => eachMovie.id == movieId); // checked id number valid or not
  if (indexOfObject == (-1)) { // if id number is wrong send a error message
    res.status(404).json({ msg: `The movie with id ${movieId} not found in the database.` });
    return;
  }
  movies.splice(indexOfObject, 1);
  res.status(200).json({ msg: `Movie with ${movieId} id number was deleted!` });
}

