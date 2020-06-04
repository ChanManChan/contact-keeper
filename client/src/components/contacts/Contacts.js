import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';
// useEffect :- when components loads
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;
  useEffect(() => {
    getContacts();
    // we want this to run at the begining therefore we will just pass in an empty set of brackets
    // eslint-disable-next-line
  }, []);
  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <div>
      <Fragment>
        {contacts !== null && !loading ? (
          <TransitionGroup>
            {filtered !== null
              ? filtered.map(contact => (
                  <CSSTransition
                    key={contact._id}
                    timeout={500}
                    classNames='item'
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))
              : contacts.map(contact => (
                  <CSSTransition
                    key={contact._id}
                    timeout={500}
                    classNames='item'
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </Fragment>
    </div>
  );
};

export default Contacts;
