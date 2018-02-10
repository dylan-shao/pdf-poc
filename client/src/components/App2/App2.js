import React from 'react';
import Form from '../common/Form';
import axios from 'axios';
import './App2.css';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000
});

//keep it class to easy extend
class App2 extends React.Component {

  submitHandler = () => {
    const myFile = this.input.files[0];
    var formData = new FormData();
    formData.append("myFile", myFile);
    console.log(formData);

    instance.post('/part2/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error.response)
      });
  }
  render(){
    const props = {
      form : {
        class: 'form upload-form',
        action: '/part2/upload',
        method: 'post',
        encType: 'multipart/form-data',
        setRef: (form)=> {
          this.form = form;
        },
      },
      input: {
        type: 'file',
        name: 'myFile',
        id: 'myFile',
        onChange: this.onChange,
        setRef: (input)=> {
          this.input = input;
        },
      },
    };

    return (
      <div className="app2 container">
        <h1>Part 2</h1>
        <Form {...props}>
          <button onClick={()=>this.submitHandler()}>submit</button>
        </Form>
      </div>
    );
  }
}

export default App2;