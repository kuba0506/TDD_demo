const expect = chai.expect;
const formModule = window.formModule;

describe('Form module', () => {

    describe('Sanity check', () => {
        it('should check if formModule exist', () => {
            expect(formModule).to.exist;
        });
    });
});