import React, { Component } from 'react';
import './App1.css';

class App1 extends Component {
  constructor() {
    super();
    this.state = {
      address: ''
    };
  }

  onChange = e => {
    this.setState({
      address: e.target.value
    });
  }

  render() {
    const { address } = this.state;
    return (
      <div className="App">
        <h1>Part 1</h1>
        <form 
          className="form address-form"
          action="/part1/pdf"
          method="post"
          target="_blank">
          <label htmlFor="address">Address </label>
          <input 
            type="text" 
            name="address"
            id="address" 
            value={address} 
            onChange={this.onChange} />
          <button type="submit">Submit 1</button>
          <button>Submit 2</button>
        </form>
      </div>
    );
  }
}

export default App1;
