//import { useState } from 'react'

import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
//import {ModifyTaskModal} from "./components/taskModal/modifyTaskModal.tsx";

function App() {

  return (
    <main className="background-task-interface">
      <Header />
      <SearchBar />
      <Content />
    </main>
  )
}

export default App
