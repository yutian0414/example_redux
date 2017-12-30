import { render } from "react-dom";
import React from 'react';
import Todo from './components/Todo';
import { Provider } from "react-redux";
import todoApp from './reducers/reducers';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux'

let store=createStore(todoApp)


render(
		<AppContainer>
			<Provider store={store}>
				<Todo></Todo>
			</Provider>
		</AppContainer>,

		document.getElementById("root")
	);
if(module.hot){
	module.hot.accept('./components/Todo',()=>{
		const NewTodo=require("./components/Todo").default;
		render(
			<AppContainer>
				<Provider store={store}>
					<NewTodo />
				</Provider>
			</AppContainer>,
			document.getElementById("root")
		);
	})
}