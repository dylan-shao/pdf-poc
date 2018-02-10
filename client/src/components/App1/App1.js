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

  submitHandler = n => {
    const { form } = this;
    var input = document.createElement("input");
    input.type = "text";
    input.name = "step";
    input.value = n;
    input.style.visibility = "hidden";
    form.appendChild(input);
    form.submit();
    form.removeChild(input);
  }

  render() {
    const { address } = this.state;
    const { submitHandler } = this;
    return (
      <div className="app1 container">
        <h1>Part 1</h1>
        <form 
          className="form address-form"
          action="/part1/pdf"
          method="post"
          target="_blank"
          ref={form=>{this.form = form;}}>
          <label htmlFor="address">Address </label>
          <input 
            type="text" 
            name="address"
            id="address" 
            value={address} 
            onChange={this.onChange} />
        </form>
        <button onClick={()=>submitHandler(1)}>Generate smart_form_1.pdf</button>
        <button onClick={()=>submitHandler(2)}>Generate smart_form_2.pdf</button>
      </div>
    );
  }
}

export default App1;
