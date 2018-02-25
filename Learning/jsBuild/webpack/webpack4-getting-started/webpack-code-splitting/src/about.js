import { Component } from 'react';
import { render } from 'react-dom';

class About extends Component {
	render() {
		return(
			<div>
				This is some information about our company!
			</div>
		);
	}
}

render(<About />, document.getElementById('root'));