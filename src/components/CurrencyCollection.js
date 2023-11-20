import React, { useState, useEffect } from 'react';
import WatchList from './WatchList';
import AddCurrency from './AddCurrency';

export default function CurrencyCollection() {

    const [currency, setCurrency] = useState([]);
    const [yourWatchlist, setYourWatchlist] = useState([]);
  
    useEffect(() => {
        // calls the fetchCurrency function
        fetchData();
    }, []);

    function fetchData() {
        const fetchurl = 'https://phase2-project-ten.vercel.app/total_market_cap';
    
        fetch(fetchurl)
          .then((response) => response.json())
          .then(data => setCurrency(data))
          .catch(error => console.error(error)); // Add error handling
    
        console.log(currency);
    }

    // Add to Watch List
    const addToYourList = (coin) => {
        if (!yourWatchlist.find(c => c.id === coin.id)) {
            setYourWatchlist([...yourWatchlist, coin]);
        }
        console.log(coin)
    };

    // Release from Watchlist
    const releaseFromList = (coin) => {
        setYourWatchlist(yourWatchlist.filter(c => c.id !== coin.id));
    };

    // Delete Coin from Server
    const dischargeCoin = (coin) => {
        fetch(`https://phase2-project-ten.vercel.app/total_market_cap/${coin.id}`, {
        method: 'DELETE'
        })
        .then(() => {
        const updatedCoin = yourWatchlist.filter(c => c.id !== coin.id);
        setYourWatchlist(updatedCoin);
        })
        .catch(error => console.error(error));
    };

    const addCurrency = (newCurrency) => {
      setCurrency([...currency, newCurrency]);
    };


  return (
    <div className="container row mx-auto">
      <WatchList list={yourWatchlist} releaseFromYourWatchlist={releaseFromList} dischargeCoin={dischargeCoin} />
      <AddCurrency onAddCurrency={addCurrency} />
      {currency.map(coin => (
        <div className='col-md-3' key={coin.id}>
          <div className='cards my-4'>
            <div className='col coininfo p-4' >
              <div>
                <h5>{coin.name}</h5>
                <p>Market Cap</p>
                <p>{coin.marketCap}</p>
                <button onClick={() => addToYourList(coin)}>Watchlist</button>
                <button onClick={() => dischargeCoin(coin)} className="my-2">Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
