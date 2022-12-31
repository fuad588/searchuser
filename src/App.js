import React from 'react'
import FeedForm from './components/FeedForm/FeedForm.js'
import './App.css'
export default function App() {
  const message = 'Form məlumatları müvəffəqiyyətlə göndərildi';
  return (
    <div className='App'>
      <FeedForm name = 'Ad: ' surname = 'Soyad: ' email = 'Email: ' comment = 'Şərh: ' message = {message}/>
    </div>
  )
}
