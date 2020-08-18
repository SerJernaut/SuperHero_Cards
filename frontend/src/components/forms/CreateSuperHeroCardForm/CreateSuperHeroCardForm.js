import React from 'react';
import {Form, Field, Formik} from 'formik';
import Button from '../Button';
import StyledErrorMessage from '../StyledErrorMessage';
import Input from '../Input';
import Label from '../Label';
import {connect} from "react-redux";
import {superHeroCardSchema} from "../validationSchemas";
import {createSuperHeroCardCreationRequest} from "../../../actions/actionCreators";
import styles                                  from './CreateSuperHeroCard.module.sass';
import PropTypes from "prop-types";
import FIELDS from "../formFields";

const CreateSuperHeroCardForm = ({isFetching, createSuperHeroCard}) => {


    const renderInputFields = fields => {
        return fields.map(({name, ...rest}) => (
            <Field key={name} name={name}>
                {
                    fieldProps => (
                        <Label className={styles.fieldWrapper}>
                            <Input {...rest} {...fieldProps}/>
                            {fieldProps.meta.touched && fieldProps.meta.error && <StyledErrorMessage name={fieldProps.field.name}/>}
                        </Label>

                    )
                }
            </Field>));
    };

    const renderTextAreaFields = fields => {
        return fields.map((field, index)=> <Field key={index} {...field}>
        </Field>)
    }

    return (
        <div className={styles.formContainer}>
            <Formik
                initialValues={{nickname: '', real_name: '', origin_description: '', superpowers: '', catch_phrase: '', image: {}}}
                onSubmit={values => {
                    const formData = new FormData();
                    for (let prop in values) {
                        formData.append(prop, values[prop]);
                    }
                    createSuperHeroCard(formData)
                }}
                validationSchema={superHeroCardSchema}>
                {formik => {
                    return (
                        <Form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
                            {renderInputFields(FIELDS.superHeroCardInputFields)}
                            {renderTextAreaFields(FIELDS.superHeroCardTextAreaFields)}
                            <input name={ 'image' } type="file" multiple={ false }
                                   onChange={ (event) => {
                                       formik.setFieldValue('image',
                                           event.currentTarget.files[ 0 ]);
                                   } }/>
                            <Button disabled={isFetching} type='submit'>create superhero card</Button>
                        </Form>
                    )
                }
                }
            </Formik>
        </div>
    )
};

CreateSuperHeroCardForm.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    createSuperHeroCard: PropTypes.func.isRequired
}

const mapStateToProps = state => state.cardsStore;

const mapDispatchToProps = dispatch => ({
    createSuperHeroCard: values => dispatch(createSuperHeroCardCreationRequest(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateSuperHeroCardForm);