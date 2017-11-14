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
    this.state = {
      wordlistA: ['cat', 'bob', 'bird', 'average', 'movie', 'frenchman', 'baguette'],
      wordlistB: [],
      selectedA: {},
      selectedB: {}
    };
  }
  toggleSelect = (word, id) => {
    let selectedKey;
    if (id === 'A') selectedKey = 'selectedA';
    else { selectedKey = 'selectedB'; }
    const selected = this.state[selectedKey];
    if (selected[word]) {
      delete selected[word];
    }
    else {
      selected[word] = true;
    }
    this.setState({ [selectedKey]: selected });
  }
  moveWords = (direction) => {
    if (direction === 'forward') {
      this.setState({
        wordlistA: this.state.wordlistA.filter(word => !this.state.selectedA[word]),
        wordlistB: this.state.wordlistB.concat(Object.keys(this.state.selectedA)),
        selectedA: {},
      });
    } else {
      this.setState({
        wordlistB: this.state.wordlistB.filter(word => !this.state.selectedB[word]),
        wordlistA: this.state.wordlistA.concat(Object.keys(this.state.selectedB)),
        selectedB: {},
      });
    }
  }
  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <WordList words={this.state.wordlistA} selected={this.state.selectedA} toggleSelect={this.toggleSelect} id="A" />
        <div>
          <ArrowButton onClick={() => this.moveWords('forward')}>&gt;</ArrowButton>
          <ArrowButton onClick={() => this.moveWords('back')}>&lt;</ArrowButton>
        </div>
        <WordList words={this.state.wordlistB} selected={this.state.selectedB} toggleSelect={this.toggleSelect} id="B" />
      </Wrapper>
    );
  }
}

export default App;
