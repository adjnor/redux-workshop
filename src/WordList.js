import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//Import the toggleSelectedWord action creator, it returns an object looking like this:
import { toggleSelectedWord } from './actions';

//styled components
const Wrapper = styled.div`
    width: 40%;
    margin: 10px;
    margin-top: 50px;
    border: 1px solid orange;
    text-align: left;
    min-height: 200px;
`;

const WordButton = styled.button`
    border: none;
    outline: none;
    color: ${({ selected }) => selected ? '#fff' : 'black'};
    background: ${({ selected }) => selected ? '#ffc107' : '#fff'};
    padding: 10px;
    display: block;
    cursor: pointer;
    width: 100%;
    &:hover {
        color: #fff;
        background: #ffc107;
    }
    &:active {
        background: #fca403;
    }
`;
//end styled components

//Wordlist functional component, we expect 3 props:
// words: an array of words to render
// selected: an object with the words selected as properties
// doToggleSelectedWord: a function to dispatch an action of type TOGGLE_SELECTED_WORD
function WordList(props) {
    return (
        <Wrapper>
            {props.words.map(word => (
                <WordButton
                    key={word}
                    selected={props.selected[word]}
                    onClick={() => props.doToggleSelectedWord(word, props.id)}
                >
                    {word}
                </WordButton>
            ))}
        </Wrapper>
    );
}

//Extract a words prop and a selected prop from the state based on the id
const mapStateToProps = (state, props) => {
    if (props.id === 'A') {
        return {
            words: state.wordlistA, // we want to pass a prop called 'words', the value is our wordlistA
            selected: state.selectedA
        }
    }
    else {
        return {
            words: state.wordlistB,
            selected: state.selectedB
        }
    }
}

//We want to pass a prop called doToggleSelectedWord, it is a function that dispatches an action object looking like this:
// {
//     type: TOGGLE_SELECTED_WORD,
//     payload: { word, id }
// }
const mapDispatchToProps = (dispatch) => ({
    doToggleSelectedWord: (word, id) => dispatch(toggleSelectedWord(word, id)),
})

//connect our WordList component. By using connect, we will pass to our component the props we extracted from
//mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(WordList);
