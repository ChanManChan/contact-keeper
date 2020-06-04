import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    // this will look at the token and it will hit the backend, validate it and put the user into the state and we only want this to run when the componenets load so we are going to put a pair of empty brackets '[]', but its going to complain about dependencies, but we dont want to put loadUser as a dependency therefore add the below line
    // eslint-disable-next-line
    authContext.loadUser();
  }, []);
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
