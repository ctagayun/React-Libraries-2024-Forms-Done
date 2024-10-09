
import * as React from 'react';

//For an uncontrolled form, there are no re-renders
const LoginUnControlledForm = () => {

  //To access html elements use React's "useRef" hook
  const emailRef = React.useRef();
  const passwordRef = React.useRef();


  const handleSubmit = (event) => {
     // For preventing the native browser behavior (which would perform a refresh 
     //on the browser), we can use the preventDefault() method on the form's event.
      event.preventDefault();

      //Attaching a ref to each form field may be too much hassle
      //const email = emailRef.current.value
      //const password = passwordRef.current.value

      //To avoid the hassle read the values directly from the form's event
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
      alert(email + ' ' + password);
  };

  return (
    //we use HTML form element onSubmit attribute for attaching event handler
    //Button type = submit
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        {/* <input id="email" type="text" ref={emailRef} /> */}
        <input className="formControl" id="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        {/* <input id="password" type="password" ref={passwordRef} /> */}
        <input id="password" type="password"  />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export { LoginUnControlledForm };