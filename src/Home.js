import { useState } from 'react';
import countries from './countries.json';
import { fetchAllCountries } from './api/fetchAllCountries';

function Home() {
  const [country, setCountry] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  const getAllCountries = () => {
    fetchAllCountries().then((res) => {
      setCountriesData(res);
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
  };
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSelectCountry = (countryName) => {
    const match = countriesData.find((element) => element.name === countryName);
    setSelectedCountry(match);
  };

  return (
    <div className="home">
      <h2>Type in the country:</h2>
      <div
        style={{
          display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '15rem',
        }}
        className="all"
      >
        <button style={{ width: '100%', cursor: 'pointer' }} onClick={getAllCountries} className="buttonAll">Get all countries</button>
        <div>
          <ul>
            {
            countriesData ? countriesData?.map((fetchedCountry) => (
              <li onClick={() => handleSelectCountry(fetchedCountry.name)} style={{ cursor: 'pointer' }} key={fetchedCountry.name}>{fetchedCountry.name}</li>
            )) : null
            }
          </ul>
        </div>
      </div>
      <form onSubmit={handleClick}>
        <div className="inputDiv">
          <input id="country" name="country" type="text" className="input" onChange={handleChange} value={country} />
          <button className="submit">Search</button>
        </div>
        <div className="info">
          <h5>
            {' '}
            {bodyText}
            {' '}
          </h5>
        </div>
      </form>
      {selectedCountry.name ? (
        <div>
          <h2>
            Selected country
            {' '}
            {selectedCountry.name}
          </h2>
          <div>
            <h2>
              Capital:
            </h2>
            {selectedCountry.capital}
          </div>
          <h3>
            Population:
            {' '}
            {selectedCountry.population}
          </h3>
          <img src={selectedCountry.flag} alt="Flag" width="120" height="80" />
        </div>
      ) : null}

    </div>
  );
}

export default Home;
