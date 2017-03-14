# formFieldAppender
formFieldAppender is a Javascript module that allows you to add and remove an infinite number of similar form fields to a form.

## Install
formFieldAppender is an ES6 module. Consequently, you'll need an ES6 transpiler ([Babel](https://babeljs.io) is a nice one) and a module loader ([SystemJS](https://github.com/systemjs/systemjs) will do the job) as part of your Javascript workflow.

If you're already using the [JSPM package manager](http://jspm.io) for your project, you can install formFieldAppender with the following command:

```
$ jspm install github:DEGJS/formFieldAppender
```

## Usage
Import formFieldAppender and create a new instance of it.
```js
import formFieldAppender from 'DEGJS/formFieldAppender';

let element = document.querySelector('div');

let instance = formFieldAppender(element);
```

By default, formFieldAppender will search the supplied `element` for an item that matches the `itemClass` parameter to use as its blueprint.

However, you can optionally provide either an HTML element or string representation of an HTML element as the item blueprint.

#### As an HTML element:
```js
import formFieldAppender from 'DEGJS/formFieldAppender';

let element = document.querySelector('div');
let itemBlueprint = document.createElement('div');

itemBlueprint.classList.add('phone-field__wrapper');
itemBlueprint.insertAdjacentHTML('afterbegin', `
    <label for="phone-field">Field</label>
    <input class="phone-field" name="phone-field" id="phone-field" type="tel">
`);

let instance = formFieldAppender(element, {
    blueprint: itemBlueprint
});
```

#### As a string representation of an HTML element:
```js
import formFieldAppender from 'DEGJS/formFieldAppender';

let element = document.querySelector('div');
let itemBlueprint = `
    <div class="phone-field__wrapper">
        <label for="phone-field">Field</label>
        <input class="phone-field" name="phone-field" id="phone-field" type="tel">
    </div>
`;

let instance = formFieldAppender(element, {
    blueprint: itemBlueprint
});
```

## Parameters

### blueprint
Type: `HTMLElement` or `string`  
An HTML element or string representation of an HTML element that will be used as the blueprint for the repeating field.  
Default: null

### itemClass
Type: `string`  
The class applied to each appended item.  
Default: `js-ffa-item`

### addTriggerSelector
Type: `string`  
The selector for each item's add trigger.  
Default: `.js-ffa-add-trigger`

### removeTriggerSelector
Type: `string`  
The selector for each item's remove trigger.  
Default: `.js-ffa-remove-trigger`

### idPatternAttr
Type: `string`  
The attribute that contains the pattern that will be used to create each appended item's ID. A token of `[[index]]` in the pattern will be dynamically replaced by the item's current index.  
Default: `data-ffa-id-pattern`

### namePatternAttr
Type: `string`  
The attribute that contains the pattern that will be used to create each appended item's `name` attribute. A token of `[[index]]` in the pattern will be dynamically replaced by the item's current index.  
Default: `data-ffa-name-pattern`

### forPatternAttr
Type: `string`  
The attribute that contains the pattern that will be used to create each appended item's `for` attribute. A token of `[[index]]` in the pattern will be dynamically replaced by the item's current index.  
Default: `data-ffa-for-pattern`

### disabledClass
Type: `string`  
The class applied to an item when it's hidden/disabled. This class can be used to visibly hide disabled items with CSS.  
Default: `is-disabled`

### initialReindex
Type: `number`  
The first index value applied to added items.  
Default: `1`

### firstItemIsRemovable
Type: `boolean`  
Determines whether the first item can be removed.  
Default: `true`

### onlyLastItemIsRemovable
Type: `boolean`  
Determines whether a "remove" trigger is added to all items, or only the last item.  
Default: `false`

### onItemAddCallback
Type: `function` or `null`  
An optional callback that's fired whenever an item is added.  
Default: `null`

### onItemRemoveCallback
Type: `function` or `null`  
An optional callback that's fired whenever an item is removed.  
Default: `null`

### resetNewItemFormVals
Type: `boolean`  
Determines whether the fields in added items contain the values of the original item/template.  
Default: `true`


## Methods

### .destroy()
Parameters: none  
Destroys the formFieldAppender instance.

### .getItems()
Parameters: none  
Returns an array of the items currently added to the formFieldAppender instance.



## Browser Support

formFieldAppender depends on the following browser APIs:
+ Object.assign: [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) | [Polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill)
+ Array.from: [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) | [Polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill)
+ Element.closest: [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) | [Polyfill](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill)

To support legacy browsers, you'll need to include polyfills for the above APIs.
