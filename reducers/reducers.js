import {combineReducers} from 'redux';
import {addtodo,todolistclick,filterchange} from "../Actions/actions";


function todoList_reducer(state=[],action){
	switch(action.type){
		case addtodo:
			return [...state,{text:action.text,completed:false}]
		case todolistclick:
			let new_state=state.concat()
			new_state[action.key]['completed']=!state[action.key]['completed']
			return new_state
		default:
			return state
	}
}

function filterChange_reducer(state="Show_All",action){
	switch(action.type){
		case filterchange:
			return action.filter
		default:
			return state
	}
}


const todoApp=combineReducers({
	todolist:todoList_reducer,
	filter:filterChange_reducer
})

export default todoApp;