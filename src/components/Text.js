import React, { Component } from 'react'
const textArray = ['Hungry?', 'Cooking gone wrong?', 'Late night at office?', 'Unexpected guests?', 'Game night?', 'Movie marathon?', 'Snacks?'];
class Change extends Component {
    constructor() {
        super();
        this.state = { textIdx: 0 };
      }
    
      componentDidMount() {
        this.timeout = setInterval(() => {
          let currentIdx = this.state.textIdx;
          this.setState({ textIdx: currentIdx + 1 });
        }, 3000);
      }
    
      componentDidUnmount() {
        clearInterval(this.timeout);
      }
    
      render() {
        let textThatChanges = textArray[this.state.textIdx % textArray.length];
    
        return (
          
           
            <h1>{textThatChanges}</h1>
          
        )
      }
}
  
export default Change;