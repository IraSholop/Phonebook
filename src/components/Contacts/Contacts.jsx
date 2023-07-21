import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';

export function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(load => load.contacts.isLoading);
  const error = useSelector(e => e.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.array);

  return (
    <>
      <div className={css.posit}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {error && <b>{error}</b>}
        {isLoading && !error && <b>Request in progress...</b>}
        {contacts.length > 0 && <ContactList />}
      </div>
    </>
  );
}
