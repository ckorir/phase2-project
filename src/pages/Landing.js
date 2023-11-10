import React from 'react'
import Navbar from '../components/Navbar';
import CurrencyCollection from '../components/CurrencyCollection';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div>
      <Navbar />
      <CurrencyCollection />
      <Footer />
    </div>
  )
}
