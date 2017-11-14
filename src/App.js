import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import WordList from './WordList';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowButton = styled.button`
  display: block;
  margin: 20px 0px;
  cursor: pointer;
`;

class App extends Component {
  constructor() {
    super();
    this.state = { transitWords: [] };
  }
  addTransitWords = (word, id) => {
    this.setState({ transitWords: this.state.transitWords.concat({ word, id }) });
  }
  removeTransitWords = (word, id) => {
    const filteredWords = this.state.transitWords.filter(e => e.word !== word && e.id !== id);
    console.log(this.state.transitWords, word, filteredWords);
    this.setState({ transitWords: filteredWords });
  }
  clearTransitWords = () => {
    this.setState({ transitWords: [] });
  }
  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <WordList transitWords={this.state.transitWords} addTransitWords={this.addTransitWords} removeTransitWords={this.removeTransitWords} clearTransitWords={this.clearTransitWords} id="a" />
        <div>
          <ArrowButton onClick={() => this.setState({ transitWords: this.state.transitWords.map(e => ({ word: e.word, id: 'b' })) })}>&gt;</ArrowButton>
          <ArrowButton onClick={() => this.setState({ transitWords: this.state.transitWords.map(e => ({ word: e.word, id: 'a' })) })}>&lt;</ArrowButton>
        </div>
        <WordList transitWords={this.state.transitWords} addTransitWords={this.addTransitWords} removeTransitWords={this.removeTransitWords} clearTransitWords={this.clearTransitWords} id="b" />
      </Wrapper>
    );
  }
}

export default App;
