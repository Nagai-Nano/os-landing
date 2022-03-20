import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

import Header from 'components/Header'
import Hero from 'components/Hero'
import Benefits from 'components/Benefits'
import Features from 'components/Features'
import Extra from 'components/Extra'
import CallToAction from 'components/CallToAction'
import Footer from 'components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Benefits />
    <Features />
    <Extra />
    <CallToAction />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
