import React from 'react';
import logo from './logo.svg';
import './App.css';


// import namabebas from namafile
import Header from'./Header';
import Form from'./FormStudent';


///compoent
// sebuah class / funtion yang bs dipanggil, ini bagian dari UI

//state
//props

function App() {
  return (
    <div className="App">
    <Header/>

    <Form/>

    </div>
  );
}

export default App;
