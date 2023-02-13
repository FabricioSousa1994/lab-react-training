import Data from '../data/berlin.json';
import { useState } from 'react';
import UserCard from './UserCard';
function Facebook() {
  const [isSelected, setSelected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountry = (country) => {
    setSelected(true);
    setSelectedCountry(country);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleCountry('');
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          handleCountry('England');
        }}
      >
        England
      </button>
      <button
        onClick={() => {
          handleCountry('USA');
        }}
      >
        USA
      </button>
      <button
        onClick={() => {
          handleCountry('Malasia');
        }}
      >
        Malasia
      </button>
      <button
        onClick={() => {
          handleCountry('Germany');
        }}
      >
        Germany
      </button>

      {Data.map((person) => {
        return (
          <UserCard
            person={person}
            country={selectedCountry}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
}

export default Facebook;