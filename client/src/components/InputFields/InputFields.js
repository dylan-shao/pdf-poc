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
      fields: {}
    };
  }

  componentDidMount() {
    axioProxy.get('/part2/get')
     .then(res => {
        this.setState({
           fields: res.data,
        })
     })
     .catch(err=>{
        console.log(err.response);
     });
  }

  onChange = e => {
    const { name, value} = e.target;
    this.setState(prevState => {
      return {fields: {...prevState.fields, [name]:value}}
    });
  };
  
  render() {
    const { fields } = this.state;
    const keysArray = Object.keys(fields);
    const _generateInput = (key) => {
      return (
        <div className="input-item" key={key}>
          <label>{key.split('_').join(' ')}</label>
          <input 
            type='text'
            name={key} 
            id={key} 
            value={fields[key]} 
            onChange={this.onChange}
          />
        </div>
      );
    }
    const props = {
      form : {
        class: 'form address-form',
        action: '/part2/pdf',
        method: 'post',
        target: '_blank',
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
          <button className="ui primary basic button" type="submit">Generate smarter Pdf</button>
        </Form>
      </div>
    );
  }
}

export default InputFields;