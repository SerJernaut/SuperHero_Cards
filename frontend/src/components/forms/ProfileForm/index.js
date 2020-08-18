import React, {useState} from 'react';
import {Form, Field, Formik} from 'formik';
import Button from '../Button';
import StyledErrorMessage from '../StyledErrorMessage';
import Input from '../Input';
import Label from '../Label';
import {connect} from "react-redux";
import {updateUserValidationSchema} from "../validationSchemas";
import {createUpdateUserRequest} from "../../../actions/actionCreators";
import styles                                  from './ProfileForm.module.sass';
import PropTypes from "prop-types";

const ProfileForm = ({isFetching, updateUser, user:{firstName, lastName, email}}) => {

    const [fields, setFields] = useState([
        {
            name: 'firstName',
            type: 'text',
            placeholder: 'Name',

        },
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Surname',
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email address',

        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password',

        }
    ]);

    const renderFields = () => {
        return fields.map(({name, ...rest}) => (
            <Field key={name} name={name}>
                {
                    fieldProps => (
                        <Label className={styles.fieldWrapper}>
                            <Input {...rest} {...fieldProps}/>
                            {fieldProps.meta.touched && fieldProps.meta.error && <StyledErrorMessage className={styles.errorWrapper} name={fieldProps.field.name}/>}
                        </Label>
                    )
                }
            </Field>));
    };

    const initialPassValue = "";

    return (
        <div className={styles.formContainer}>
            <Formik
                initialValues={{firstName, lastName, email, password: initialPassValue}}
                onSubmit={({password, ...rest}) => {
                    if(password) {
                        updateUser({...rest, password});
                    }
                    else {
                        updateUser(rest)
                    }
                }}
                validationSchema={updateUserValidationSchema}>
                {formik => {
                    const {handleSubmit, values} = formik;
                    return (
                        <Form onSubmit={handleSubmit}>
                            {renderFields()}
                            <Button disabled={values.firstName === firstName && values.lastName === lastName && values.email === email && values.password === initialPassValue || isFetching} type='submit'>accept changes</Button>
                        </Form>
                        )
                }
                }
            </Formik>
        </div>
    )
};

ProfileForm.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired
}

const mapStateToProps = state => state.userStore;

const mapDispatchToProps = dispatch => ({
    updateUser: values => dispatch(createUpdateUserRequest(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);