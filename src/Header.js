import React from 'react'

export default class Header extends React.Component {

constructor(){
	super()
}

render(){
	return(
		<div>
			<h1> Ini Component Header </h1>
			    <ul>
			    <li>Home</li>
			    <li>Data Murid</li>
			    <li>Tambah Murid</li>
			    </ul>
		</div>
		);
	}
}