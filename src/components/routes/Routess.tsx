import React from 'react'
import {Route, Routes} from "react-router-dom"
import HomeScreen from '../home/HomeScreen'
import Employes from '../employes/Employes'
import Syntaxe from '../js/Syntaxe'
import Variables from '../js/Variables'
import Operators from '../js/Operators'

export const RouteNavigation = () => {
  return (
    <Routes>
     <Route  path='/' element={<HomeScreen/>}  />
     <Route  path='/syntaxe' element={<Syntaxe/>}  />
     <Route  path='/variables' element={<Variables/>}  />
     <Route  path='/operators' element={<Operators/>}  />
    </Routes>
  )
}

export default RouteNavigation