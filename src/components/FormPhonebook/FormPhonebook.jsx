import { Formik, ErrorMessage } from 'formik';
import { Block, StyledField, StyledForm } from './FormPhonebook.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { myContacts } from 'redux/selector';
import { addContacts } from 'redux/operation';

const schema = Yup.object().shape({
  name: Yup.string().min(1, 'Too Short!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').required('Required'),
});

export const FormPhonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(myContacts);

  const handleSubmit = (value, action) => {
    const searchName = contacts.map(cont => cont.name).includes(value.name);

    if (searchName) {
      alert(`${value.name} is already in contacts`);
      action.resetForm();
    } else {
      dispatch(addContacts(value));
      action.resetForm();
    }
  };

  return (
    <Block>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <label>Name</label>
          <StyledField type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <label>Number</label>
          <StyledField type="tel" name="number" />
          <ErrorMessage name="number" component="div" />

          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    </Block>
  );
};
