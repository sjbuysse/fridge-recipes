import React from 'react';
import { actions as snackbarActions } from '../../../snackbar';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import './SearchFormContainer.scss';

interface Props {
    handleSubmitForm: (message: string) => void;
}

export const SearchFormContainer = ({handleSubmitForm}: Props) => {
    return (
        <div className="random-form">
            <Form label={"What ingredients do you want to use?"} handleSubmit={handleSubmitForm}></Form>
        </div>
    )
}

const mapDispatchToProps = {
    handleSubmitForm: (message: string) => snackbarActions.success(message),
};

export default connect(null, mapDispatchToProps)(SearchFormContainer);
