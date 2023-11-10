import React, { useState, useEffect } from 'react';
import WatchList from './WatchList';

export default function CurrencyCollection() {

    const [currency, setCurrency] = useState([]);
    const [yourWatchlist, setYourWatchlist] = useState([]);
  
    useEffect(() => {
        // calls the fetchBots function
        fetchData();
    }, []);

    function fetchData() {
        const fetchurl = 'http://localhost:3000/total_market_cap';
    
        fetch(fetchurl)
          .then((response) => response.json())
          .then(data => setCurrency(data))
          .catch(error => console.error(error)); // Add error handling
    
        console.log(currency);
    }

    // Add to Watch List
    const addToYourBotArmy = (coin) => {
        if (!yourWatchlist.find(c => c.id === coin.id)) {
            setYourWatchlist([...yourWatchlist, coin]);
        }
        console.log(coin)
    };


  return (
    <div>CurrencyCollection</div>
  )
}
