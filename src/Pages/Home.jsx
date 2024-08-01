import React from 'react'
import Banner from '../Banner/Banner'
import Services from '../Serivces/Services'
import Patient from '../Serivces/Patient/Patient'
import Doctor from '../Doctor/Doctor'
import Contact from './Contact'


const Home = () => {
  return (
    <div className=' mx-auto'>
  <Banner></Banner>
  <Services></Services>
  <Patient></Patient>
  <Doctor></Doctor>
  <Contact></Contact>

      
       
      
    </div>
  )
}

export default Home
