import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleSelectedWord } from './actions';

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

function WordList(props) {
    console.log(props);
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

const mapStateToProps = (state, props) => {
    console.log(state, props);
    if (props.id === 'A') {
        return {
            words: state.wordlistA,
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

const mapDispatchToProps = (dispatch) => ({
    doToggleSelectedWord: (word, id) => dispatch(toggleSelectedWord(word, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WordList);
