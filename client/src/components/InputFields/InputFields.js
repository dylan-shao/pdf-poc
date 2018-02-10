import React from 'react';
import axios from 'axios';

class InputFields extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
    axios.get('/part2/get')
     .then(function(res){
      console.log(res)
     })
  }

  render() {
    return (
    <div>
      dfsdfdsfdsf
    </div>
    )
  }
}

export default InputFields;