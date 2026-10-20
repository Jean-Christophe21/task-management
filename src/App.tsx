//import { useState } from 'react'

import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Header from './components/Header/Header'
import {ModifyTaskModal} from "./components/taskModal/modifyTaskModal.tsx";

function App() {

  return (
    <body className="background-task-interface">
      <Header />
      <SearchBar />
    </body>
  )
}

export default App
