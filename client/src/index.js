import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://localhost:4000/"
    : "http://localhost:4000/";

const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
