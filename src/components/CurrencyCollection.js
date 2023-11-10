import React, { useState, useEffect } from 'react';
import WatchList from './WatchList';

export default function CurrencyCollection() {

    const [currenct, setCurrency] = useState([]);
    const [yourWatchlist, setYourWatchlist] = useState([]);
  
    useEffect(() => {
        // calls the fetchBots function
        fetchData();
    }, []);

    function fetchData() {
        const fetchurl = 'http://localhost:3000/total_market_cap';
    
        fetch(boturl)
          .then((response) => response.json())
          .then(data => setBots(data))
          .catch(error => console.error(error)); // Add error handling
    
        console.log(bots);
    }


  return (
    <div>CurrencyCollection</div>
  )
}
