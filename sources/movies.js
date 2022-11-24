import { v4 as uuid_v4 } from "uuid";

const movies =
  [
    {
      id: uuid_v4(),
      title: "LOTR",
      director: "Peter Jackson",
      release_date: 2002
    },
    {
      id: uuid_v4(),
      title: "Titanic",
      director: "James Cameron",
      release_date: 1997
    },
    {
      id: uuid_v4(),
      title: "Breaking Bad",
      director: "Vince Gilligan",
      release_date: 2009
    },
    {
      id: 4,
      title: "Fast And Furious",
      director: "Louis Leterrier",
      release_date: 2009
    },
    {
      id: 5,
      title: "Ice Age",
      director: "Chris Wedge",
      release_date: 2005
    }
  ];

export default movies;