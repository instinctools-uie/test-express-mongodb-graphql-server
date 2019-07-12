# GraphQL test task

## Running

Make sure you have [Node.js](http://nodejs.org/) and the [Docker](https://www.docker.com/) and the [Docker Compose](https://docs.docker.com/compose/) installed.

```sh
$ git clone
$ docker-compose up
```

Your app should now be running on [localhost:3003/graphql](http://localhost:3003/graphql).

### Example
```sh
query mainQuery {
  authors (offset: 0) {
    id,
    firstName,
    lastName,
    created,
    books {
      id,
      name,
      created,
      genre
    }
  },
  author (id: "5d233dd025940833f563b4d2") {
    id,
    firstName,
    lastName,
    created,
    books {
      id,
      name,
      created,
      genre
    }
  },
  books (limit: 5) {
    id,
    name,
    created,
    author {
      id,
      firstName,
      lastName,
      created
    },
    genre
  },
  book (id: "5d233dd025940833f563b4d3") {
    id,
    name,
    created,
    author {
      id,
      firstName,
      lastName,
      created
    },
    genre
  }
}

mutation createAuthor {
  createAuthor(input: { firstName: "firstName new", lastName: "firstName new", books: ["5d233dd025940833f563b4d3"] }) {
    id,
    firstName,
    lastName,
    created,
    books {
      id,
      name,
      created,
      genre
    }
  }
}

mutation updateAuthor {
  updateAuthor(input: { id: "5d233dd025940833f563b4d1", lastName: "firstName changed" }) {
    id,
    firstName,
    lastName,
    created,
    books {
      id,
      name,
      created,
      genre
    }
  }
}

mutation removeAuthor {
  removeAuthor(id: "5d233dd025940833f563b4d1") {
    id,
    firstName,
    lastName,
    created,
    books {
      id,
      name,
      created,
      genre
    }
  }
}

mutation createBook {
  createBook(input: { name: "name new", author: "5d233dd025940833f563b4d1" }) {
    id,
    name,
    created,
    author {
      id,
      firstName,
      lastName,
      created
    },
    genre
  }
}

mutation updateBook {
  updateBook(input: { id: "5d233dd025940833f563b4d3", name: "name changed", genre: Classic }) {
    id,
    name,
    created,
    author {
      id,
      firstName,
      lastName,
      created
    },
    genre
  }
}

mutation removeBook {
  removeBook(id: "5d233dd025940833f563b4d4") {
    id,
    name,
    created,
    author {
      id,
      firstName,
      lastName,
      created
    },
    genre
  }
}

subscription newBookSubscribtion {
    newBook {
        id,
        name,
        created,
        author {
          id,
          firstName,
          lastName,
          created
        },
        genre
     }
}

```