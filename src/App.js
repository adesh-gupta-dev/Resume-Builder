// import logo from './logo.svg';
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/UI/Layout.jsx';
import Hero from './components/UI/heroSection.jsx';

function App() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default App;
