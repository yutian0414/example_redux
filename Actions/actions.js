export const addtodo="addtodo";
export const todolistclick="todolistclick";
export const filterchange="filterchange";


export function addTodo(text){
	return{
		type:addtodo,
		text:text,
		}
}

export function toDoListClick(key){
	return{
		type:todolistclick,
		key:key,
	}
}

export function filterChange(filter){
	return{
		type:filterchange,
		filter:filter,
	}
}