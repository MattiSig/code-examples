import React, { useState, useEffect } from 'react';

function StarWarsCharacters({ data }) {
  if (data.length === 0) {
    return <p>loading...</p>;
  }
  return <>
    {
      data.results.map(i => <div>{i.name}</div>)
    }
  </>
}

function StarWarsPlanets({ data }) {
  if (data.length === 0) {
    return <p>loading...</p>;
  }
  return <>
    {
      data.results.map(i => <div>{i.name}</div>)
    }
  </>
}

function getData(path) {
  return function withData(WrappedComponent) {
    return () => {
      const [data, setData] = useState([]);

      useEffect(() => {
        fetch('https://swapi.dev/api/' + path)
          .then(response => response.json())
          .then(data => setData(data));
      }, []);

      return <WrappedComponent data={data} />
    };
  }
}

export const Characters = getData('people/')(StarWarsCharacters);
export const Planets = getData('plantes/')(StarWarsPlanets);
