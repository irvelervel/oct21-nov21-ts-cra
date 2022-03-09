import React from 'react'
import './App.css'
import FuncComponent from './components/FuncComponent'
// import MainComponent from './components/MainComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormComponent from './components/FormComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          {/* <MainComponent title='NEW TITLE' subTitle='my subtitle' color='red' />
        <MainComponent title='another title' subTitle='another subtitle' /> */}
          <Routes>
            <Route
              path='/'
              element={
                <FuncComponent
                  title='FUNC TITLE'
                  subTitle='SUBTITLE'
                  color='green'
                />
              }
            />
            <Route path='/form' element={<FormComponent />} />
            <Route path='/fetch' element={<FetchComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
