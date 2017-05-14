(function () {
    'use strict';

    const userForm = {};

    userForm.addError = (arr, input) => {
        return arr.errors.push(new Error(`The ${input.name} ${input.value} is not valid`));
    };

    userForm.validateItem = item => {
        if (!item.name) {
            return new Error(`Validation failed: "name" is missing`);
        }
        return new RegExp(item.pattern, 'i').test(item.value);
    };

    userForm.domIntoObject = inputs => {
        return Array.from(inputs).map(input => ({
            name: input.name,
            validation: input.dataset.validation,
            pattern: input.dataset.pattern,
            value: input.value
        }));
    };

    userForm.validateForm = form => {
        const result = {
            errors: [],
            get isValid() {
                return this.errors.length ? false : true;
            }
        };

        let isValid = false;

        for (let input of userForm.domIntoObject(form.querySelectorAll('input'))) {
            //function to validate one input
            isValid = userForm.validateItem(input);

            if (!isValid) {
                //function to register an error
                userForm.addError(result, input);
                // result.errors.push(new Error(`The ${input.name} ${input.value} is not valid`));
            }
        }

    return result;
};

window.userForm = userForm || {};
}(window));