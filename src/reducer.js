const initialState = {
	displayImage: false,
	// imgSrc:
	// 'https://www.quebecoriginal.com/sites/default/files/h-mtl-montreal_0.jpg',
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_IMAGE_VISIBILITY':
			return { displayImage: !state.displayImage };
		// case 'UPDATE_IMAGE':
		//Example of using spread operator '...' to pass all state props and overwrite the one we want to change
		// 	return { ...state, imgSrc: action.payload };
		default:
			return state;
	}
}

export default reducer;
