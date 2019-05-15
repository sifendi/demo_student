 // === Descturcturing===
import React, {Component} from 'react'


export default class ListStudent extends Component{
	render(){
		return(
			<div>
				<ul>
					{ this.props.students.map( student => {
						return  <li>{ student }</li>
					})}
				</ul>
			</div>
			)
	}
}
