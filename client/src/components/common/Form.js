import React from 'react';
import { string, shape, func } from 'prop-types';
class Form extends React.Component{

  render(){
    const { props } = this;
    return (
    <div>
      <h1>{props.header}</h1>
      <form 
        className={props.form.class}
        action={props.form.action}
        method={props.form.method}
        target={props.form.target}
        ref={props.form.setRef}>
        <label>{props.label} </label>
        <input 
          type={props.input.type} 
          name={props.input.name} 
          id={props.input.id} 
          value={props.input.value} 
          onChange={props.input.onChange} />
      </form>
      {React.Children.map(props.children, child => {
        return child
      })}
    </div>
    );
  }
}

Form.defaultProps = {
  header: '',
  form: {
    class: 'form',
    target: '_blank'
  },
  label: '',
  input: {
    
  }
}
Form.propTypes = {
  header: string,
  form: shape({
    class: string,
    action: string.isRequired,
    method: string.isRequired,
    target: string,
    setRef: func
  }),
  label: string,
  input: shape({
    type: string.isRequired,
    name: string.isRequired,
    id: string.isRequired,
    value: string.isRequired,
    onChange: func,
  })
}

export default Form;