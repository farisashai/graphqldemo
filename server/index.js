const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  # This "Book" type defines the queryable fields: 'title' and 'author'.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scoot Fitzgerald",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
