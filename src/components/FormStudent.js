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

			currentStudentname :''

		}
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
			onClick={ () => this.props.addStudent() }
			/>

			</div>

			)
	}
}