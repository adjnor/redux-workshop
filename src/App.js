import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import WordList from './WordList';
import { moveWords } from './actions'; //Import the moveWords action creator

//Define styled components
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowButton = styled.button`
  display: block;
  margin: 20px 0px;
  cursor: pointer;
  background: none;
  border: 1px solid #9E9E9E;
  border-radius: 2px;
`;
//Finish styled components

//Define our functional App component (functional because there is no state, no lifecycle methods e.g. componentDidMount)
function App(props) {
  return (
    <Wrapper>
      <WordList id="A" />
      <div>
        <ArrowButton onClick={() => props.doMoveWords('forward')}>&gt;</ArrowButton>{/* use the doMoveWords function passed from our props to dispatch an action */}
        <ArrowButton onClick={() => props.doMoveWords('back')}>&lt;</ArrowButton>
      </div>
      <WordList id="B" />
    </Wrapper>
  );
}

//mapDispatchToProps is the second parameter to the connect function
//It gets the dispatch function as a parameter, allowing us to 'send' actions to our reducer to update the state
const mapDispatchToProps = (dispatch) => ({
  doMoveWords: (direction) => dispatch(moveWords(direction)) //Define the doMoveWords prop to be passed to the App component
});
//doMoveWords is a function taking the direction as a parameter, it dispatches an action object looking like this:
// {
//   type: MOVE_WORDS,
//   payload: direction
// }

//Not interested in getting state information at this point, so the first parameter is null
export default connect(null, mapDispatchToProps)(App);
