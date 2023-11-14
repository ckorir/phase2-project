# Crypyo Watch
## _Watch Your Favorite Currencies With Ease_

Currency Watch is a website that showcases the market cap of currencies along with their symbols, providing users with valuable insights into the world of digital assets.
The website utilises data that has been retreived from coingeko api. A local server has been used as a database for the website.

## Features

- View real-time market cap data for currencies.
- Add currencies to your watchlist to keep track of your favorite cryptocurrencies.
- Remove currencies from your watchlist when you no longer wish to monitor them.
- Add a currency and its market cap to the currencies list.

## Tech

Crypto Watch uses the following to function:

- HTML
- CSS
- React
- Json Server

## How to run the code
To run the app:
```sh
npm install
npm start
```
## Server Access

The project fetches data that is being used from a local Server that displays all of the currencies. This allows us to use the data as we want.
The code for fetching the data is as follows:

![](/src/img/Fetch.png)

- With the data that has been fetched we can be able to delete a currency from the server using the following code: 

![](/src/img/delete.png)

- The website also allows us to be able to add a currency that we could want and it adds the currency to the server. To do that we implement the following code: 

![](/src/img/patch.png)


## Screenshots
Here are photos as to how the the website fully looks like. This will give you a better understanding of how you as a user will be interracting with the website. 

![](/src/img/SC1.png)
![](/src/img/SC2.png)
![](/src/img/SC3.png)

## License

MIT License

Copyright (c) 2023 ckorir

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.