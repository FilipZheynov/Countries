import { useState } from 'react';
import countries from './countries.json'

const Home = () => {
    const [country, setCountry] = useState('');
    const [bodyText, setBodyText] = useState('');
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log("clicked");
        console.log(country);
        const match = countries.countries.find(element => {
            return element.title === country
        });
        setBodyText(match.body);
        fetch('https://restcountries.com/v3.1/all').then(
            res => {return res.json()} 
        ).then(
            data => console.log(data)
        )
        console.log(match);
        
    }
    const handleChange = event => {
        setCountry(event.target.value);
    }

    return ( 
        <div className="home">
            <h2>Type in the country:</h2>
            <div className='all'>
            <a href='{./allcountries}' className='buttonAll'>All countries</a>
            </div>
            <form onSubmit={handleClick}>
            <div className="inputDiv">
            <input id="country" name="country" type = "text" className="input" onChange={handleChange} value={country} ></input>
            <button className="submit">Search</button>
            </div>
            <div className='info'>
                <h5> {bodyText} </h5>
            </div>
            </form>
        </div>
     );
}
 
export default Home;