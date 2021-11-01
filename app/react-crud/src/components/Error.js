import React from 'react';
import { Link } from 'react-router-dom';

class Error extends React.Component {
	constructor(props) {
		super(props);
		this.state = {products: []};
		this.headers = [
			{ key: 'id', label: 'Id'},
			{ key: 'name', label: 'Name' },
			{ key: 'price', label: 'Price' },
			{ key: 'sale_price', label: 'Selling Price' },
			{ key: 'sales_count', label: 'Sales Count' },
			{ key: 'sale_date', label: 'Sale Date' }
		];
	}
	
	
	render() {
		return (
			<div id="container">
				<Link to="/*">ERROR!</Link>
				<p/>
			</div>
		)
	}
}

export default Error;