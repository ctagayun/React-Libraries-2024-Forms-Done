//https://www.robinwieruch.de/react-libraries/#form-libraries-in-react
//https://www.robinwieruch.de/react-form/#react-form-by-example


import * as React from 'react';
//import axios from 'axios'
import "./App.css";
import { LoginUnControlledForm } from './User/LoginUnControlledForm';
import { LoginControlledForm } from './User/LoginControlledForm';
import { LoginControlledFormUsingOneHandler } from './User/LoginControlledFormUsingOneHandler';

//const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const App = () => {

  return (
    <>  
    {/* <LoginUnControlledForm>
    </LoginUnControlledForm> */}

    {/* <LoginControlledForm>
    </LoginControlledForm> */}

    <LoginControlledFormUsingOneHandler>
    </LoginControlledFormUsingOneHandler>
    </>
  )
  
}

 
export default App;
