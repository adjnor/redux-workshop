import React, { Component } from 'react';
import styled from 'styled-components';

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

class WordList extends Component {
    handleClick = (word) => {
        this.props.toggleSelect(word, this.props.id);
    }
    render() {
        return (
            <Wrapper>
                {this.props.words.map(word => (
                    <WordButton
                        key={word}
                        selected={this.props.selected[word]}
                        onClick={() => this.handleClick(word)}
                    >
                        {word}
                    </WordButton>
                ))}
            </Wrapper>
        );
    }
}

export default WordList;
