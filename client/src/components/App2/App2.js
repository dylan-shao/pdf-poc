import React from 'react';
import Form from '../common/Form';
import './App2.css';

//keep it class to easy extend
class App2 extends React.Component {

  render(){
    const props = {
      form : {
        class: 'form upload-form',
        action: '/part2/upload',
        method: 'post',
        encType: 'multipart/form-data',
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
          <input type="submit" data-inline="true" value="Submit" id="filesubmit" />
        </Form>
      </div>
    );
  }
}

export default App2;