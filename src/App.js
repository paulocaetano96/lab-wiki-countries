import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from './Components/Header';
import CountryDetails from './Components/CountryDetails';
import CountriesList from './Components/CountriesList';



const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFromApi = async () => {
    try {
      const response = await axios.get(apiURL);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);
  
        return (


          <div className="App">
            <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <h1>Loading</h1>
            ) : (
              <CountriesList countries={countries} />
            )
          }
        />
        <Route
          path="/country/:id"
          element={
            loading ? (
              <h1>I said WAIT!</h1>
            ) : (
              <CountryDetails countries={countries} />
            )
          }
        />
      </Routes>



          </div>
    
  
        )
        }

export default App;
