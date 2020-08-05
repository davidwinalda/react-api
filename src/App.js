import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  // useEffect(() => {
  //   const url = 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=R4zqJ5ZHschneHIM3WHmkEuBdif2TkOU&limit=5';
  //   fetch(url)
  //   .then((resp) => resp.json())
  //   .then(function(data) {
  //     // Here you get the data to modify as you please
  //     console.log(data)
  //     })
  //   .catch(function(error) {
  //     // If there is any error you will catch them here
  //     console.log(error);
  //   }); 
  // }, []);

  useEffect(() => {
    const url = 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=R4zqJ5ZHschneHIM3WHmkEuBdif2TkOU&limit=5';
    axios.get(url)
    .then(function (result) {
      console.log(result.data.data)
      setGiphy(result.data.data);
      setLoading(false);
    })
    .catch(function(error) {
      setError(true);
      console.log(error.message)
      setErrorMessage(error.message)
      setLoading(false);
    });
  });

  return (
    <div className="App">
      <h2>Call API</h2>
      {loading ? (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      ) : (
          error ? (
            <div>{errorMessage}</div>
          ) : (
              giphy.map((item) => (
              <ul>
                <li><img src={item.images.original.url} alt="Giphy" /></li>
                <li>{item.title}</li>
              </ul>
            ))
          )
      )
      }
    </div>
  );
};

export default App;
