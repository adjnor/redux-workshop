import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.toggleImage}>toggle Image</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	toggleImage: () => {
		dispatch({ type: 'TOGGLE_IMAGE_VISIBILITY' });
	},
});

export default connect(null, mapDispatchToProps)(Sidebar);
