import { useQuery, gql } from "@apollo/client";

const App = () => {
  const BOOK_QUERY = gql`
    query GetBooks {
      books {
        author
        title
      }
    }
  `;

  const { loading, error, data } = useQuery(BOOK_QUERY);
  if (loading) return <p> Loading </p>;
  if (error) return <p> Error </p>;

  return (
    <div className="App">
      <h1>GraphQL Client</h1>
      {data.books.map(({ author, title }) => {
        return (
          <div>
            <h3>Author: {author}</h3>
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
