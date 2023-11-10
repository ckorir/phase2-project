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

    // Release from Watchlist
    const releaseFromList = (coin) => {
        setYourWatchlist(yourWatchlist.filter(c => c.id !== coin.id));
    };

    // Delete Bot from Server
    const dischargeBot = (coin) => {
        fetch(`http://localhost:3000/total_market_cap/${coin.id}`, {
        method: 'DELETE'
        })
        .then(() => {
        const updatedCoin = yourWatchlist.filter(c => c.id !== coin.id);
        setYourWatchlist(updatedCoin);
        })
        .catch(error => console.error(error));
  };


  return (
    <div>CurrencyCollection</div>
  )
}
