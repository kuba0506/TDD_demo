(function() {
    'use strict';

    const userForm = { };

    userForm.validateForm = form => {
        const result = {};

        const inputs = Array.from(form.querySelectorAll('input'));
        let isValid = false;

        for (let input of inputs) {
            if (input.dataset.validation === 'alphabetical') {
                isValid = new RegExp(input.dataset.pattern, 'i').test(input.value);
            } else if (input.dataset.validation === 'numeric') {
                isValid = new RegExp(input.dataset.pattern, 'i').test(input.value);
            }
        }
        
        result.isValid = isValid;

        return result;
    };

    window.userForm = userForm || {};
}(window));