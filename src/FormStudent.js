 // === Descturcturing===
import React, { Component } from 'react'
export default class FormStudent extends Component{

// ====melakukan export dengan cara biasa / umum 	
// import React from 'react'
// export default class FormStudent extends React.Component {


// ===STATE
	constructor(){
		super()
		this.state={
			students_array:['Afendi'],
			currentStudentname :''

		}
	}


addStudent(){
	let currentStudents = this.state.students_array
	currentStudents.push(this.state.currentStudentname)
	this.setState({
		students_array:currentStudents
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




			{this.state.students_array.map( student => {
				return <h3>{ student }</h3>
			})}
			</div>

			)
	}
}