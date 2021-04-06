import React from 'react';
import CharacterList from './CharacterList';
import CharacterMovies from './CharacterMovies';

const App = () =>
  <div className='container'>
    <div className='row'>
      <CharacterList />
    </div>
    <div className='row'>
      <CharacterMovies />
    </div>
  </div>;

export default App;
