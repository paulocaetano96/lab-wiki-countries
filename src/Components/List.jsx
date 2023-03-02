import React, {useState, useEffect} from "react";
import axios from 'axios';

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function List() {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
    
        console.log("useEffect - initial render (mounting)");

        axios.get(apiURL).then((response) => {

            setCountries(response.data);
            setLoading(false);

        });
    
    }, []);

    console.log(countries)
    return (

        <div>
            <h3>List of countries</h3>

                {loading && <p>Loading ...</p>}


                {countries.map((country) => {
                    return (
                        <div key={country._id} className="card">
                            <h3>{country.name.common}</h3>
                        </div>
                    )
                })}
        </div>

    )

}

export default List;