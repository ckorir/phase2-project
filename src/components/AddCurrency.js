import React, { useState } from 'react';

export default function AddCurrency({ onAddCurrency }) {
  const [newCurrency, setNewCurrency] = useState({
    name: '',
    symbol: '',
    marketCap: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCurrency({
      ...newCurrency,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the server
    fetch('https://phase2-project-ten.vercel.app/total_market_cap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCurrency),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddCurrency(data);
      })
      .catch((error) => console.error('Error:', error));

    // Reset the form
    setNewCurrency({
      name: '',
      symbol: '',
      marketCap: '',
    });
  };

  return (
    <div>
      <h2>Add a New Currency</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={newCurrency.name}
            onChange={handleInputChange}
            placeholder="Currency Name"
          />
        </label>
        <label>
          <input
            type="text"
            name="symbol"
            value={newCurrency.symbol}
            onChange={handleInputChange}
            placeholder="Symbol"
          />
        </label>
        <label>
          <input
            type="number"
            name="marketCap"
            value={newCurrency.marketCap}
            onChange={handleInputChange}
            placeholder="Market Cap"
          />
        </label>
        <button type="submit" className="add">
          Add Currency
        </button>
      </form>
    </div>
  );
}
