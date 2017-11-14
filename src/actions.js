import {
    TOGGLE_SELECTED_WORD,
    MOVE_WORDS
} from './constants';

export function toggleSelectedWord(word, id) {
    return {
        type: TOGGLE_SELECTED_WORD,
        payload: { word, id }
    }
}

export function moveWords(direction) {
    return {
        type: MOVE_WORDS,
        payload: direction
    }
}
