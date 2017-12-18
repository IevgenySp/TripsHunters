/**
 * Created by isp on 11/18/17.
 */

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.identifier)) {
        errors.identifier = 'This field is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }

    if (Validator.isEmpty(data.retypePassword)) {
        errors.retypePassword = 'This field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email address is not valid';
    }

    if (data.password !== data.retypePassword) {
        errors.retypePassword = 'Passwords do not much';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}