
import * as React from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

//onLogin is the callback handler.
const LoginControlledFormSendingFormDataAsProp = (onLogin) => {

  //Controlled form will uses "useState" hook to manage the form state
  // const[email, setEmail] = React.useState('');
  // const[password, setPassword] = React.useState('');

  //The strategy unifies all the form state into one object and all 
  //event handlers into one handler. By leveraging each form field's 
  //identifier, we can use it in the unified handler to update the state 
  //by using the identifier as dynamic key.
  const[form, setForm] = React.useState({email: 'ctagayun@gmail.com', password:'whisky'});  

  const handleChange = (event) => {
     setForm({
        ...form, 
        [event.target.id]: event.target.value,
     })
  }
  const handleSubmit = (event) => {
     // For preventing the native browser behavior (which would perform a refresh 
     //on the browser), we can use the preventDefault() method on the form's event.
      event.preventDefault();
      alert(form.email + ' ' + form.password);

      //he example shows how form state is passed to the callback 
      //handler as form data. Therefore, once a user clicks the submit 
      //button, the parent component will receive the form data and perform 
      //a task with it (for exmple post form data to a backend).
      onLogin(form);

      // setForm({
      //   email: '',
      //   password: '',
      // });
      setForm(INITIAL_STATE);
  };

  return (
    //we use HTML form element onSubmit attribute for attaching event handler
    //Button type = submit
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={form.email} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" value={form.password} onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export { LoginControlledFormSendingFormDataAsProp };