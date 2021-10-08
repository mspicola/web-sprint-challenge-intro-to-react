import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [characters, setCharacters] = useState(null);
const [currentCharacter, setCurrentCharacter] = useState(null);
const [error, setError] = useState(null);

const openDetails = (id) =>
{
    const character = characters.filter(item => item.id === id);
    setCurrentCharacter(character);
};

const closeDetails = () =>
{
    setCurrentCharacter(null);
};


useEffect(() => {
  axios.get('https://swapi.dev/api/people')
    .then(res =>{
      console.log(res.data);
      // setDetails(res.data)
    }).catch(err =>{
      console.error(err);
    })
}, []
)

// const SWCharacter = characters.map() 

  return (
    <div className="App">
      <h1 className="Header">SW Characters</h1>
      {/* {characters[0].name} */}
      {console.log(characters[0])}
    </div>
  );
}

export default App
