export const fetchAllCountries = async () => fetch('https://restcountries.com/v3.1/all').then(
  (res) => res.json(),
).then((res) => res.map((country) => ({
  name: country.name.common,
  capital: country.capital,
  region: country.region,
  population: country.population,
  languages: country.languages,
  flag: country.flags.png,
})));
