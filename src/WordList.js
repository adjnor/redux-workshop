import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 40%;
    margin: 10px;
    margin-top: 50px;
    border: 1px solid orange;
    text-align: left;
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

const words = ['cat', 'bob', 'bird', 'average', 'movie', 'frenchman', 'baguette'];

class WordList extends Component {
    constructor(props) {
        super(props);
        this.state = { words, selected: {} };
    }
    handleClick = (word) => {
        let selected = this.state.selected;
        if (selected[word]) {
            selected[word] = false;
            this.props.removeTransitWords(word, this.props.id);
        }
        else {
            selected[word] = true;
            this.props.addTransitWords(word, this.props.id);
        }
        this.setState({ selected });
    }
    componentWillReceiveProps(nextProps) {
        // this.props.clearTransitWords();
        this.setState({ words: this.state.words.concat(nextProps.transitWords.map(e => e.word)) });
    }
    render() {
        console.log(`Wordlist ${this.props.id}`, this.state);
        const allWords = [...this.state.words, ...(this.props.transitWords.filter(e => e.id === this.props.id).map(w => w.word))];
        return (
            <Wrapper>
                {allWords.map(word => (
                    <WordButton
                        key={word}
                        selected={this.state.selected[word]}
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
