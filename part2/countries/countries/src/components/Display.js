import React from 'react'

const Display = ({ countries, search, handleButton, weather }) => {

    if (search.length < 1 || countries.length < 1) {
        return null;
    }

    if (countries.length > 9) {
        return <p>Too many matches, specify another filters</p>
    } else if (countries.length > 1) {
        return (
            <ul>
                {countries.map((country, index) => <li key={index}>{country.name.common} <button value={index} onClick={handleButton}>show</button></li>)}
            </ul>
        )
    }

    let iconURL;

    if (weather) {
        const icon = weather.weather[0].icon;
        iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
    }

    return (
        <>
            <div className="countryInfo">
                <h1>{countries[0].name.common}</h1>
                <p><strong>Languages:</strong></p>
                <ol>
                    {Object.values(countries[0].languages).map((language, index) => <li key={index}>{language}</li>)}
                </ol>
                <p>Population: {countries[0].population}</p>
                <img src={countries[0].flags.png} width="100px" />
                <h2>Weather in {countries[0].capital[0]}</h2>
                <p>{weather ? weather.weather[0].description : ""}</p>
                <p>Temperature: {weather ? weather.main.temp : ""} C</p>
                <img src={iconURL} alt="weather icon" />
            </div>
        </>
    )
}

export default Display