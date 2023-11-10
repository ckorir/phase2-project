import React from 'react'

export default function WatchList({ list, releaseFromYourWatchlist, dischargeCoin }) {
  return (
    <div className="row mx-auto myList">
      {list && list.map(coin => (
        <div className='col-md-3' key={coin.id}>
          <div className='cards my-2'>
            <div className='col coininfo p-3'>
              <div>
                <h5>{coin.name}</h5>
                <p>Market Cap</p>
                <p>{coin.marketCap}</p>
                <button onClick={() => releaseFromYourWatchlist(coin)}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
