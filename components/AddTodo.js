import React from "react";



class AddTodo extends React.Component{
	constructor(props){
		super(props);
		this.addTodo=this.addTodo.bind(this)
	}

	addTodo(){
		let input_text_node=this.refs.input;
		let input_text=input_text_node.value.trim();
		this.props.onAddTodo(input_text);
		input_text_node.value='';
	}
	render(){
		return(
			<div>
				<input type="text" ref="input"></input>
				<button onClick={this.addTodo}> Add Something Todo </button>
			</div>

		)
	}
};

export default AddTodo;