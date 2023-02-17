import { useEffect, useState } from 'react';
import countryService from './services'
import Filter from './components/Filter';
import Display from './components/Display';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    countryService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries);
      })
  }, [])

  useEffect(() => {
    if (searchResults.length == 1) {
      const api_key = process.env.REACT_APP_API_KEY
      console.log('fetching weather...')
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${searchResults[0].latlng[0]}&lon=${searchResults[0].latlng[1]}&units=metric&appid=${api_key}`)
        .then(response => {
          console.log(response.data);
          setWeather(response.data);
        })
    }
  }, [searchResults])

  const handleFilter = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    const found = countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()));
    setSearchResults(found);
    console.log(found);
  }

  const handleButton = (event) => {
    console.log(event.target.value);
    const newSearchResult = searchResults[event.target.value];
    setSearchResults([newSearchResult]);
  }

  return (
    <div >
      <h1>Country App</h1>
      <Filter handleFilter={handleFilter} />
      <br /><br />
      <Display countries={searchResults} search={search} handleButton={handleButton} weather={weather} />
    </div>
  );
}

export default App;
