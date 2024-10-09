import * as React from 'react';

/*
  The strategy unifies all the form state into one object and 
  all event handlers into one handler. By leveraging each form field's 
  identifier, we can use it in the unified handler to update the state 
  by using the identifier as dynamic key.

 This scales a controlled form in React well, because state, handler, 
 and form field are not in a 1:1:1 relationship anymore. In contrast, 
 each handler can reuse the state and handler.
 */
const LoginControlledFormStrategyHandleTooManyHandlers = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(form.email + ' ' + form.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export {LoginControlledFormStrategyHandleTooManyHandlers};