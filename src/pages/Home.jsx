import React from 'react'
import { Navbar } from '../component/Navbar'
import { Section } from '../component/Section'
import { Showprodatce } from '../component/Showprodatce'
import { Footer } from '../component/Footer'
import { Stylish } from '../component/Stylish'


export const Home = () => {

  return (
    <>
    <Navbar/>
    <Section/>
    <Showprodatce/>
    <Stylish/>
    <Footer/>
    </>
  )
}
