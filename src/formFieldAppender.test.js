jest.mock('DEGJS/domUtils');
import polyfillsForTests from './__mocks__/pollyfills';
import formFieldAppender from './formFieldAppender';

polyfillsForTests();
const classes = {
    item: 'js-ffa-item'
}
let removeBtn;
let wrapperEl;

describe('formFieldAppender', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="example__interface js-example-1">
                <div class="${classes.item}">
                    <div class="field">
                        <label for="phone1">Phone number</label>
                        <input name="phone1" id="phone1" type="text">
                    </div>
                    <button class="js-ffa-add-trigger">Add</button>
                    <button class="js-ffa-remove-trigger">Remove</button>
                </div>
            </div>
        `;
        wrapperEl = document.querySelector('.js-example-1');
        removeBtn = document.querySelector('.js-ffa-remove-trigger');
    });

    it('should remove item', () => {
        formFieldAppender(wrapperEl);
        removeBtn.click();

        expect(document.querySelector(`.${classes.item}`)).toEqual(null);
    })

    describe('shouldRemoveCallback', () => {
        it('should not remove if callback is false', () => {
            const shouldRemoveMock = jest.fn();
            shouldRemoveMock.mockReturnValue(false);
    
            formFieldAppender(wrapperEl, {
                shouldRemoveItemCallback: shouldRemoveMock
            });
    
            removeBtn.click();
            expect(shouldRemoveMock.mock.calls.length).toBe(1);
            expect(shouldRemoveMock.mock.results[0].value).toBe(false);
            expect(document.querySelector(`.${classes.item}`)).toBeDefined();
        });
    
        it('should remove item if callback is true', () => {
            const shouldRemoveMock = jest.fn();
            shouldRemoveMock.mockReturnValue(true);
    
            formFieldAppender(wrapperEl, {
                shouldRemoveItemCallback: shouldRemoveMock
            });
    
            removeBtn.click();
            expect(shouldRemoveMock.mock.calls.length).toBe(1);
            expect(shouldRemoveMock.mock.results[0].value).toBe(true);
            expect(document.querySelector(`.${classes.item}`)).toEqual(null);
        })
    })
    
})