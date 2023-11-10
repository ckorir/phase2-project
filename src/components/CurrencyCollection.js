import React, { useState, useEffect } from 'react';
import WatchList from './WatchList';

export default function CurrencyCollection() {

    const [currenct, setCurrency] = useState([]);
    const [yourWatchlist, setYourWatchlist] = useState([]);
  
    useEffect(() => {
        // calls the fetchBots function
        fetchBots();
    }, []);
    


  return (
    <div>CurrencyCollection</div>
  )
}
