import client from "./apolloClient";
import { Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Home from "./Home";
import Detail from "./Detail";
function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:movieId" element={<Detail />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
