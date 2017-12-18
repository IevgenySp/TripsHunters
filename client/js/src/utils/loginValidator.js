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

    return {
        errors,
        isValid: isEmpty(errors)
    };
}