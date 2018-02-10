import React from 'react';
import Form from '../common/Form';
import axios from 'axios';

class InputFields extends React.Component {
  constructor(){
    super();
    this.state = {
      fields:{}
    };
  }

  componentDidMount() {
    axios.get('/part2/get')
     .then(function(res){
        this.setState({
           fields: res
        })
     });
  }

  render() {
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
          <button onClick={()=>this.generateFields()}>generate fields</button>
        </Form>
      </div>
    );
  }
}

export default InputFields;