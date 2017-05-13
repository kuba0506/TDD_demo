const expect = chai.expect;

describe('User form', () => {
    const userForm = window.userForm;
    const validateForm = userForm.validateForm;
    let actual;
    let expected;
    let form;
    let age;
    let firstName;

    describe('validateForm()', () => {
        //Setup
        beforeEach(() => {
            form = document.querySelector('.user-form').cloneNode(true);
            firstName = form.querySelector('input[name="first-name"]');
            age = form.querySelector('input[name="age"]');
        });

        // Teardown
        afterEach(() => {
            firstName = void 0;
            age = void 0;
            actual = void 0;
            expected = void 0;
        });

        it('[sanity check] should exist', () => {
            expect(validateForm).to.exist;
        });

        it('should validate form if all inputs are correct', () => {
            //Assemble
            firstName.value = 'Kuba'; 
            age.value = '33'; 
            //Act
            actual = validateForm(form);
            //Assert
            expect(actual.isValid).to.be.ok;
        });

        it('should throw error if \'first-name\' is invalid', () => {
            //Assemble
            firstName.value = '!!--'; 
            age.value = '33'; 
            //Act
            actual = validateForm(form);
            //Assert
            expect(actual.isValid).to.be.false;
            expect(actual.errors[0]).to.be.an.instanceOf(Error);
        });
    });

});