import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import WordList from './WordList';
import { moveWords } from './actions';

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

function App(props) {
  return (
    <Wrapper>
      <WordList id="A" />
      <div>
        <ArrowButton onClick={() => props.doMoveWords('forward')}>&gt;</ArrowButton>
        <ArrowButton onClick={() => props.doMoveWords('back')}>&lt;</ArrowButton>
      </div>
      <WordList id="B" />
    </Wrapper>
  );
}

const mapDispatchToProps = (dispatch) => ({
  doMoveWords: (direction) => dispatch(moveWords(direction))
});

export default connect(null, mapDispatchToProps)(App);
