import React from 'react';
import Form from '../common/Form';
import axios from 'axios';
import './InputFields.css';

const axioProxy = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000
});

class InputFields extends React.Component {
  constructor(){
    super();
    this.state = {
      fields: {'df':''}
    };
  }

  componentDidMount() {
    axioProxy.get('/part2/get')
     .then(res => {
        this.setState({
           fields: res.data,
        })
     });
  }

  onChange() {

  }

  render() {
    const { fields } = this.state;
    const keysArray = Object.keys(fields);
    const length = keysArray.length;
    const _generateInput = (key) => {
      return (
        <div className="input-item">
          <label>{key}</label>
          <input 
            type='text'
            name={key} 
            id={key} 
            key={key}
            value={fields[key]} 
            onChange={this.onChange}
          />
        </div>
      );
    }
    const props = {
      form : {
        class: 'form address-form',
        action: '/part1/pdf',
        method: 'post',
        target: '_blank',
        setRef: (form)=> {
          this.form = form;
        },
      },
      input: {
        flag: false,
      }
    };
    return (
      <div className="container">
        <h1>Input Fields</h1>
        <Form {...props}>
          {keysArray.map(key=>{
             return _generateInput(key);
           })}
        </Form>
      </div>
    );
  }
}

export default InputFields;