(function() {
    'use strict';

    const userForm = { };

    userForm.validateItem  = item => {
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
            if (input.validation === 'alphabetical') {
                isValid = new RegExp(input.pattern, 'i').test(input.value);

                if (!isValid) {
                    //function to register an error
                    result.errors.push(new Error(`The ${input.name} ${input.value} is not valid`));
                }
            } else if (input.validation === 'numeric') {
                isValid = new RegExp(input.pattern, 'i').test(input.value);

                if (!isValid) {
                    result.errors.push(new Error(`The ${input.name} ${input.value} is not valid`));
                }
            }

        }

        return result;
    };

    window.userForm = userForm || {};
}(window));