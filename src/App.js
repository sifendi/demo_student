import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


// import namabebas from namafile
import Header from'./Header';
import Form from'./components/FormStudent';
import ListStudent from'./components/ListStudent';


///compoent
// sebuah class / funtion yang bs dipanggil, ini bagian dari UI

//state
//props

export default class App extends Component {

constructor(){
  super()
  this.state={
    students:[
        {
          name:'Afendi', 
          age:30
        }
      ],
  }
}


addStudent(name, age){
  // const state = this.state
  // debugger
  let currentStudents = this.state.students
  console.log(currentStudents)
  let newStudent ={
    name,
    age
  }
  currentStudents.push(this.state.currentStudentname)
  this.setState({
    students:currentStudents
  })
}


render(){
  return (
    <div className="App">

    <Header/>

    <Form addStudentprops = { (name,age) => this.addStudent(name,age) }/>

    <h2>Students</h2>
    <ListStudent students= {this.state.students}/>

    </div>
  );
}
}

