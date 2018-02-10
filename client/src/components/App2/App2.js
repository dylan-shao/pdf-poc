import React from 'react';
import Form from '../common/Form';
import './App2.css';

class App2 extends React.Component {

  render(){
    const props = {
      header: 'Part 2',
      form : {
        class: 'form upload-form',
        action: '/part2/upload',
        method: 'post'
      },
      input: {
        type: 'file',
        name: 'myFile',
        id: 'myFile',
        onChange: this.onChange,
        setRef: (input)=> {
          this.input = input;
        }
      }
    };

    return (
      <div className="app2 container">
        <Form {...props}>
          <input type="submit" data-inline="true" value="Submit" id="filesubmit" />
        </Form>
      </div>
    );
  }
}

export default App2;