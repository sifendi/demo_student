 // === Descturcturing===
import React, { Component } from 'react'
import ListStudent from './ListStudent'

export default class FormStudent extends Component{

// ====melakukan export dengan cara biasa / umum 	
// import React from 'react'
// export default class FormStudent extends React.Component {


// ===STATE
	constructor(){
		super()
		this.state={
			students:['Afendi'],
			currentStudentname :''

		}
	}


addStudent(){
	let currentStudents = this.state.students
	currentStudents.push(this.state.currentStudentname)
	this.setState({
		students:currentStudents
	})
}

	render(){
		return(
			
			<div>
			<span>{this.state.currentStudentname}</span>
			<br/>


			<input type="text" name="student_name" 
			onChange={(e) => this.setState({currentStudentname : e.target.value})}/>

			<input 
			type="submit" 
			value="Simpan"
			onClick={ () => this.addStudent() }
			/>


			<h2> Student </h2>
			<ListStudent students={this.state.students}></ListStudent>

			</div>

			)
	}
}