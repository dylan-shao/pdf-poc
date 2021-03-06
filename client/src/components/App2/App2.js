import React from 'react';
import Form from '../common/Form';
import axios from 'axios';
import './App2.css';

const axioProxy = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000
});

//keep it class to easy extend
class App2 extends React.Component {

  generateFields = (e) => {
    e.preventDefault();
    const myFile = this.input.files[0];
    var formData = new FormData();
    formData.append("myFile", myFile);

    //post then go to the form is has data, otherwise alert that there is no data
    axioProxy.post('/part2/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
        if(Object.keys(res.data).length ===0) {
          alert('No dta fields found!');
        }else {
          this.props.history.push('/inputfields');
          return;
        }
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
        onSubmit: this.generateFields,
        setRef: (form)=> {
          this.form = form;
        },
      },
      input: {
        flag: true,
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
          <button className="tiny ui button" type="submit">generate fields</button>
        </Form>
        <br />
        <button className="ui basic button" onClick={() =>this.props.history.push('/part1') }>Go to Part 1</button>
      </div>
    );
  }
}

export default App2;