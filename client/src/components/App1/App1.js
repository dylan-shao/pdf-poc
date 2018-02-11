import React, { Component } from 'react';
import Form from '../common/Form';
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
    const props = {
      form : {
        class: 'form address-form',
        action: '/part1/pdf',
        method: 'post',
        target: '_blank',
        setRef: (form)=> {
          this.form = form;
        }
      },
      label: 'Address',
      input: {
        flag: true,
        type: 'text',
        name: 'address',
        id: 'address',
        value: address,
        onChange: this.onChange
      }
    };
    return (
      <div className="app1 container">
        <h1>Part 1</h1>
        <Form {...props}>
          <a className="ui primary basic button" type="submit" onClick={()=>this.submitHandler(1)}>Generate smart_form_1.pdf</a>
          <a className="ui primary basic button"type="submit"onClick={()=>this.submitHandler(2)}>Generate smart_form_2.pdf</a>
        </Form>
        <br />
        <button className="ui basic button btn-dir" onClick={() =>this.props.history.push('/part2') }>Go to Part 2</button>
      </div>
    );
  }
}

export default App1;
