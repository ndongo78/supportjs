import React from 'react'
import {Route, Routes} from "react-router-dom"
import HomeScreen from '../home/HomeScreen'
import Employes from '../employes/Employes'
import Syntaxe from '../js/Syntaxe'
import Variables from '../js/Variables'
import Operators from '../js/Operators'
import Functions from '../js/Fonctions'
import Objects from '../js/Objects'
import Arrays from '../js/Arrays'

export const RouteNavigation = () => {
  return (
    <Routes>
     <Route  path='/' element={<HomeScreen/>}  />
     <Route  path='/syntaxe' element={<Syntaxe/>}  />
     <Route  path='/variables' element={<Variables/>}  />
     <Route  path='/operators' element={<Operators/>}  />
     <Route  path='/functions' element={<Functions/>}  />
     <Route  path='/object' element={<Objects/>}  />
     <Route  path='/array' element={<Arrays/>}  />
    </Routes>
  )
}

export default RouteNavigation