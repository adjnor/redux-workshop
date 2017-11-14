import {
    TOGGLE_SELECTED_WORD,
    MOVE_WORDS
} from './constants';
//First we import all our action types

//Define an action creator and export it
//Our action creators make sure that our action objects always look the same, with a type and payload
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
