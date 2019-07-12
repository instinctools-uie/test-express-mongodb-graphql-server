'use strict';

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar DateTime
  
  enum Genre {
    Dramaturgy,
    Classic
  }
  
  type Subscription {
    newBook: Book!
  }

  type Author {
    id: ID!,
    firstName: String!,
    lastName: String!,
    books: [Book!]!,
    created: DateTime
  }
    
  input CreteAuthorInput { 
    firstName: String!, 
    lastName: String!,
    books: [ID!] = []
  }
  
  input UpdateAuthorInput {
    id: ID!
    firstName: String,
    lastName: String,
    books: [ID!]
  } 
  
  type Book {
    id: ID!,
    name: String!, 
    created: DateTime,
    author: Author!,
    genre: Genre!
  }
   
  input CreateBookInput {
    name: String!,
    author: ID!,
    genre: Genre = Classic 
  } 
  
  input UpdateBookInput {
    id: ID!, 
    name: String, 
    author: ID,
    genre: Genre
  }

  type Query {
    author(id: ID!): Author,
    authors(ids: [ID!], limit: Int = 10, offset: Int = 0): [Author!]!,
    
    book(id: ID!): Book,
    books(ids: [ID!], limit: Int = 10, offset: Int = 0): [Book!]! 
  }
  
  type Mutation {
    createAuthor(input: CreteAuthorInput): Author,
    updateAuthor(input: UpdateAuthorInput): Author,
    removeAuthor(id: ID!): Author
    
    createBook(input: CreateBookInput): Book,
    updateBook(input: UpdateBookInput): Book,
    removeBook(id: ID!): Book
  }
`;

module.exports = typeDefs;