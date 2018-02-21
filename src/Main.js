import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
	render() {
		return (
			<div>
				{this.props.displayImage && (
					<img src="https://lonelyplanetimages.imgix.net/mastheads/stock-photo-sunrise-87597293.jpg?sharp=10&vib=20&w=1200" />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	displayImage: state.displayImage,
});

export default connect(mapStateToProps)(Main);
