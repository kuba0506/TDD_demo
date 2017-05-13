(function() {
    'use strict';

    const userForm = { };

    userForm.validateForm = form => {
        const result = {
            errors: [],
            get isValid() {
                return this.errors.length ? false : true;
            }
        };

        const inputs = Array.from(form.querySelectorAll('input'));
        let isValid = false;

        for (let input of inputs) {
            if (input.dataset.validation === 'alphabetical') {
                isValid = new RegExp(input.dataset.pattern, 'i').test(input.value);

                if (!isValid) {
                    result.errors.push(new Error(`The ${input.name} ${input.value} is not valid`));
                }
            } else if (input.dataset.validation === 'numeric') {
                isValid = new RegExp(input.dataset.pattern, 'i').test(input.value);
            }
        }

        return result;
    };

    window.userForm = userForm || {};
}(window));