import React from 'react';


class Footer extends React.Component{
	constructor(props){
		super(props);
		this.renderFilter=this.renderFilter.bind(this);
	}
	renderFilter(filter="Show_All"){
		if (filter===this.props.filter){
			return filter
		}else{
			return(<a href="#" onClick={(e)=>
				{	e.preventDefault();
					this.props.onFilterChange(filter);
				}}>
				{filter}
				</a>)
		}
	}

	render(){
		return(
			<div>
				Show:{this.renderFilter("Show_All")}, {this.renderFilter("Show_Completed")}, {this.renderFilter("Show_Active")}
			</div>


		)
	}
};

export default Footer;