import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentCharacter,
  getMovies,
} from '../redux/character/actions';
import { Dropdown} from 'react-bootstrap';

const CharacterList = ({ characters, setCharacter, character }) =>
  <div className='character-list'>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Characters
      </Dropdown.Toggle>

      <Dropdown.Menu>
          {characters.map((c, i) =>
              <Dropdown.Item key={c.name} onClick={setCharacter(i + 1)}>{c.name}</Dropdown.Item>
          )}
      </Dropdown.Menu>
       </Dropdown>

       <div className="selected-char">{character.id ? `Character :` : ''} <strong>{character.id ? characters[character.id - 1].name : ''} </strong></div>     
  </div>;

const mapStateToProps = ({ characters, character }) => ({
  characters,character
});

const mapDispatchToProps = dispatch => ({
  setCharacter(id) {
    return () => {
      dispatch(setCurrentCharacter(id));
      dispatch(getMovies(id));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
