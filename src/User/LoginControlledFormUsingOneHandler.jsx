
import * as React from 'react';

const LoginControlledFormUsingOneHandler = () => {

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
      setForm({
        email: '',
        password: '',
      });
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

export { LoginControlledFormUsingOneHandler };