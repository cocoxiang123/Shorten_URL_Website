import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Introduction from './components/Introduction'
import LinkForm from './components/LinkForm'
import Advanced from './components/Advanced'

function App() {
  return (
    <div className="App">
     <Navigation />
     <Introduction />
     <LinkForm />
     <Advanced />
    </div>
  );
}

export default App;
