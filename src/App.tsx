import React from 'react'
import './App.css'
import FuncComponent from './components/FuncComponent'
// import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <MainComponent title='NEW TITLE' subTitle='my subtitle' color='red' />
        <MainComponent title='another title' subTitle='another subtitle' /> */}
        <FuncComponent title='FUNC TITLE' subTitle='SUBTITLE' color='green' />
      </header>
    </div>
  )
}

export default App
