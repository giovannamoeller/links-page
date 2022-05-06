import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';
import { ApolloProvider } from "@apollo/client";
import client from './graphql/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);