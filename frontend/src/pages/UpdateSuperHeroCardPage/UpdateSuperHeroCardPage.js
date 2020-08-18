import React, {useEffect} from 'react';
import { withRouter }       from 'react-router';
import Header from "../../components/Header";
import {connect} from "react-redux";
import {
    createClearErrorAction,
    createGetCardByIdRequest,
    createUpdateCardByIdRequest
} from "../../actions/actionCreators";
import PropTypes from 'prop-types';
import {Field, Form, Formik} from "formik";
import {superHeroCardSchema} from "../../components/forms/validationSchemas";
import Button from "../../components/forms/Button";
import Label from "../../components/forms/Label";
import styles from "../../components/forms/CreateSuperHeroCardForm/CreateSuperHeroCard.module.sass";
import Input from "../../components/forms/Input";
import StyledErrorMessage from "../../components/forms/StyledErrorMessage";
import FIELDS from "../../components/forms/formFields";

const UpdateSuperHeroCardPage = ({match, error, history, clearError, updateSuperHeroCardById, isFetching, getCardById, currentCard}) => {

    useEffect(()=> {
            getCardById(match.params.id)
    }, [])

    useEffect(()=> {
        if (error) {
            clearError();
            history.replace('/')
        }
    })

    const renderInputFields = fields => {
        return fields.map(({name, label, ...rest}) => (
            <Field key={name} name={name}>
                {
                    fieldProps => (
                        <Label className={styles.fieldWrapper}>
                            <span>{label}</span>
                            <Input {...rest} {...fieldProps}/>
                            {fieldProps.meta.touched && fieldProps.meta.error && <StyledErrorMessage name={fieldProps.field.name}/>}
                        </Label>

                    )
                }
            </Field>));
    };

    const renderTextAreaFields = fields => {
        return fields.map((field, index)=> (
            <>
            <label htmlFor="">{field.label}</label>
            <Field key={index}  {...field}></Field>
            </>))
    }

    if (!currentCard) {
        return null
    }


    const {_id, nickname, real_name, catch_phrase, origin_description, superpowers, image} = currentCard;

    return (
        <>
            <Header/>
            <Formik
                initialValues={{nickname, real_name, catch_phrase, origin_description, superpowers, image}}
                onSubmit={(values) => {
                   updateSuperHeroCardById(_id, values);
                }}
                validationSchema={superHeroCardSchema}>
                {formik => {
                    const {handleSubmit, values} = formik;
                    return (
                        <div className={styles.formContainer}>
                            <Form onSubmit={handleSubmit}>
                                {renderInputFields(FIELDS.superHeroCardInputFields)}
                                {renderTextAreaFields(FIELDS.superHeroCardTextAreaFields)}
                                {
                                    values.nickname === nickname
                                    && values.real_name === real_name
                                    && values.catch_phrase === catch_phrase
                                    && values.origin_description === origin_description
                                    && values.superpowers === superpowers
                                    && values.image === image
                                    && <p>Do changes before accept changes</p>
                                }
                                <Button disabled={values.nickname === nickname
                                && values.real_name === real_name
                                && values.catch_phrase === catch_phrase
                                && values.origin_description === origin_description
                                && values.superpowers === superpowers
                                && values.image === image
                                || isFetching} type='submit'>accept changes</Button>
                            </Form>
                        </div>
                    )
                }
                }
            </Formik>
        </>
    );
}

const mapStateToProps = state => state.cardsStore;

const mapDispatchToProps = dispatch => ({
    updateSuperHeroCardById: (id, values)=> dispatch(createUpdateCardByIdRequest(id, values)),
    getCardById: (id) => dispatch(createGetCardByIdRequest(id)),
    clearError: () => dispatch(createClearErrorAction())
})

UpdateSuperHeroCardPage.propTypes = {
    updateSuperHeroCardById: PropTypes.func.isRequired,
    cards: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    getCardById: PropTypes.func.isRequired,
    currentCard: PropTypes.object,
    clearError: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter( UpdateSuperHeroCardPage));