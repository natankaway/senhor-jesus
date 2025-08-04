import React from 'react'
import './App.css'
import Header from './components/Header'
import BibliaSection from './components/BibliaSection'
import PrayerSection from './components/PrayerSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <BibliaSection />
        <PrayerSection />
      </main>
      <Footer />
    </div>
  )
}

export default App