import React, { Component } from 'react';

class Game extends Component {
	constructor(props) {
      super(props);
      const { value1, value2, value3, proposedAnswer } = this.generateNewValues();

      this.state = {
          value1,
          value2,
          value3,
          proposedAnswer,
          numQuestions: 0,
          numCorrect: 0
      };
  }
  
  generateNewValues = () => {
	const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    
    return { value1, value2, value3, proposedAnswer };
  }

	answerQuestion = (answer) => {
    	this.setState((currentState) => {
          const { value1, value2, value3, proposedAnswer } = this.generateNewValues();
          
          const correctAnswer = currentState.value1 + currentState.value2 + currentState.value3;
          let numCorrect = currentState.numCorrect;
          if((answer && correctAnswer === currentState.proposedAnswer) || 
             (!answer && correctAnswer !== currentState.proposedAnswer))  {
          	numCorrect++;
          }
          
          return {
            value1,
            value2,
            value3,
            proposedAnswer,
            numQuestions: currentState.numQuestions + 1,
            numCorrect
          }
    })
  }
  render() {
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={() => this.answerQuestion(true)}>True</button>
        <button onClick={() => this.answerQuestion(false)}>False</button>
        <p className="text">
          Your Score: {this.state.numCorrect}/{this.state.numQuestions}
        </p>
      </div>
	)
  }
}

export default Game;