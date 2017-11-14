import {
    TOGGLE_SELECTED_WORD,
    MOVE_WORDS
} from './constants';

const initialState = {
    wordlistA: ['cat', 'frenchman', 'bob', 'umbrella', 'toast'],
    wordlistB: [],
    selectedA: {},
    selectedB: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SELECTED_WORD: {
            if (action.payload.id === 'A') {
                let selected = { ...state.selectedA };
                if (state.selectedA[action.payload.word]) selected[action.payload.word] = false;
                else { selected[action.payload.word] = true; }
                return { ...state, selectedA: selected };
            }
            else {
                let selected = { ...state.selectedB };
                if (state.selectedB[action.payload.word]) selected[action.payload.word] = false;
                else { selected[action.payload.word] = true; }
                return { ...state, selectedB: selected };
            }
        }
        case MOVE_WORDS: {
            if (action.payload === 'forward') {
                return {
                    ...state,
                    wordlistA: state.wordlistA.filter(word => !state.selectedA[word]),
                    wordlistB: state.wordlistB.concat(Object.keys(state.selectedA)),
                    selectedA: {}
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
            return state;
    }
}
