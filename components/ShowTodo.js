import React from 'react';


class ShowTodo extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		let todolist=this.props.todolist.map(
			(todo,key)=>{
				return(<li key={key} onClick={() => this.props.onTodolistclick(key)} 
					style={{textDecoration:todo.completed ? 'line-through' : 'none'}}>
					{todo.text}</li>)

			}


				)
		return(
			<div>
				<ul>
					{todolist}
				</ul>
			</div>
		)
	}
};

export default ShowTodo;