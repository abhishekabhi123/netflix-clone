import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import {originals,action,Romance,horror,documentary,comedy} from './urls'
import './App.scss'
import { Banner } from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
export const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={Romance} title="Romance" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>
      <RowPost url={documentary} title="Documentary" isSmall/>


    </>
  )
}
