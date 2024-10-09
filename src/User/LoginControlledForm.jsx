
import * as React from 'react';

//Note: Each change of the state comes with a re-render of the form.

//The idiomatic way of using forms in React would be using React's 
//declarative nature. We would use React's useState Hook to manage 
//the form state ourselves. By updating this state with each input 
//field's onChange handler, we can use the state (here: email and password) 
//respectively by passing it to each input field. This way, each 
//input field gets controlled by React and does not manage its internal 
//native HTML state anymore:

//While CONTROLLED FORMS ARE MORE POPULAR in React, because they allow 
//you a better developer experience for managing the form's state 
//(e.g. initial state, updating state), they are more performance 
//intensive. Each change of the state comes with a re-render of the 
//form

const LoginControlledForm = () => {

  //Controlled form will uses "useState" hook to manage the form state
  const[email, setEmail] = React.useState('');
  const[password, setPassword] = React.useState('');

  const handleEmail = (event) => {
     //read the values directly from the form's event
     setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  const handleSubmit = (event) => {
     // For preventing the native browser behavior (which would perform a refresh 
     //on the browser), we can use the preventDefault() method on the form's event.
      event.preventDefault();
      alert(email + ' ' + password);
  };

  return (
    //we use HTML form element onSubmit attribute for attaching event handler
    //Button type = submit
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={email} onChange={handleEmail}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" value={password} onChange={handlePassword}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export { LoginControlledForm };