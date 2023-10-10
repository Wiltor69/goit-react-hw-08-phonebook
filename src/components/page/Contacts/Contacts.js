import { useEffect } from 'react';

import { fetchContacts } from 'redux/operation';

const { FormPhonebook } = require('components/FormPhonebook/FormPhonebook');
const { ListContact } = require('components/ListContact/ListContact');
const { Loader } = require('components/Loader/Loader');
const { SearchBar } = require('components/SeachBar/SeachBar');
const { useSelector, useDispatch } = require('react-redux');
const { myLoading, myError } = require('redux/selector');

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(myLoading);
  const error = useSelector(myError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <FormPhonebook />

      <SearchBar />
      {isLoading && !error && <Loader />}
      <ListContact />
    </div>
  );
};
export default Contacts;
