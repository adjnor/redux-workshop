import {
    TOGGLE_SELECTED_WORD,
    MOVE_WORDS
} from './constants';
//Import all our action types

//Define the initial state for our app
const initialState = {
    wordlistA: ['cat', 'frenchman', 'bob', 'umbrella', 'toast'],
    wordlistB: [],
    selectedA: {},
    selectedB: {},
};


//the reducer gets the current state of the app (default to initialState) and an incoming action
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SELECTED_WORD: {
            //If the action type is TOGGLE_SELECTED_WORD, we want to do something and return a new state
            if (action.payload.id === 'A') {
                //If the id is A, we want to update our selectedA property of the state
                let selected = { ...state.selectedA }; //Create a copy of the selectedA object
                if (state.selectedA[action.payload.word]) delete selected[action.payload.word]; //If selectedA has the word as a property, delete it (unselect it)
                else { selected[action.payload.word] = true; } //If selectedA does not have the word as a property, add it (select it)
                return { ...state, selectedA: selected }; //return our state with everything + our updated selectedA object
            }
            else {
                let selected = { ...state.selectedB };
                if (state.selectedB[action.payload.word]) delete selected[action.payload.word];
                else { selected[action.payload.word] = true; }
                return { ...state, selectedB: selected };
            }
        }
        case MOVE_WORDS: {
            if (action.payload === 'forward') {
                return {
                    ...state,
                    wordlistA: state.wordlistA.filter(word => !state.selectedA[word]),//remove the selected words
                    wordlistB: state.wordlistB.concat(Object.keys(state.selectedA)),//add the selected words
                    selectedA: {}//clear the selectedA array
                };
            } else {
                return {
                    ...state,
                    wordlistB: state.wordlistB.filter(word => !state.selectedB[word]),
                    wordlistA: state.wordlistA.concat(Object.keys(state.selectedB)),
                    selectedB: {}
                };
            }

        }
        default:
            return state;//if action type is not recognized, return current state (which is initalState in the beginning)
    }
}
