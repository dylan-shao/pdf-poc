import React from 'react';
import { string, shape, func } from 'prop-types';

//keep it class because I need to access 'refs' for different ele
class Form extends React.Component{

  render(){
    const { form, label, input, children } = this.props;
    return (
    <div>
      <form 
        className={form.class}
        action={form.action}
        method={form.method}
        target={form.target}
        encType={form.encType}
        onSubmit={form.onSubmit}
        ref={form.setRef}>
        <label>{label} </label>
        {input.flag && 
          <input 
            type={input.type} 
            name={input.name} 
            id={input.id} 
            value={input.value} 
            onChange={input.onChange}
            ref={input.setRef} 
          />
        }
          <br />
          {React.Children.map(children, child => {
            return child
          })} 
      </form>
          
    </div>
    );
  }
}

Form.defaultProps = {
  form: {
    class: 'form',
    target: '_blank'
  },
  label: '',
  input: {

  }
}
Form.propTypes = {
  form: shape({
    class: string,
    action: string.isRequired,
    method: string.isRequired,
    target: string,
    encType: string,
    setRef: func,
  }),
  label: string,
  input: shape({
    type: string,
    name: string,
    id: string,
    value: string,
    onChange: func,
    setRef: func,
  }),
}

export default Form;