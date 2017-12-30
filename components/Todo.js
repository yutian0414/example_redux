import React from 'react';
import AddTodo from './AddTodo';
import ShowTodo from './ShowTodo';
import Footer from './Footer';
import {addTodo,toDoListClick,filterChange} from '../Actions/actions'
import {connect} from 'react-redux'

class Todo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		
		return(
			<div>
				<AddTodo onAddTodo={this.props.addTodo}></AddTodo>
				<ShowTodo onTodolistclick={this.props.todoListClick} todolist={this.props.todolist}></ShowTodo>
				<Footer filter={this.props.filter} onFilterChange={this.props.filterChange}></Footer>
			</div>
			
		)
	}
};


function mapDispartchToProps(dispatch){
	return{
		addTodo: text => dispatch(addTodo(text)),
		filterChange: filter => dispatch(filterChange(filter)),
		todoListClick: key => dispatch(key=toDoListClick(key))
	}
}

function mapStateToProps(state){
	return{
		todolist:function(){	
			if (state.filter==="Show_All"){
				return state.todolist;
			}else if(state.filter==="Show_Completed"){
				return state.todolist.filter(todo=>todo.completed)
			}else if(state.filter==="Show_Active"){
				return state.todolist.filter(todo=>!todo.completed)
			}
		}(),
		filter: state.filter,
	}
}

export default Todo =connect(mapStateToProps,mapDispartchToProps)(Todo)