import formFieldAppender from "DEGJS/formFieldAppender";
import prism from "prism";

let demo = function() {

	const examples = [
		{
			elementSelector: '.js-example-1'
		},
		{
			elementSelector: '.js-example-2',
			options: {
				firstItemIsRemovable: false,
				onlyLastItemIsRemovable: true,
				onItemAddCallback: addCallback,
				onItemRemoveCallback: removeCallback
			}
		},
		{
			elementSelector: '.js-example-3',
			options: {
				blueprint: buildElementBlueprint()
			}
		},
		{
			elementSelector: '.js-example-4',
			options: {
				blueprint: buildStringTemplate()
			}
		}
	];

	let instances = [];

	function initExamples() {
		examples.forEach(function(example, index) {
			let element = document.querySelector(example.elementSelector),
				options = example.options ? example.options : {};
			formFieldAppender(element, options);
		});
	}

	function addCallback(addedItem, allItems) {
		alert('Item added!');
		console.log(addedItem);
		console.log(allItems);
	};

	function removeCallback(removedItem, allItems) {
		alert('Item removed!');
		console.log(removedItem);
		console.log(allItems);
	};

	function buildElementBlueprint() {
		let el = document.createElement('div');
		el.classList.add('js-ffa-item');
		el.insertAdjacentHTML('afterbegin', `
			<div class="field">
				<label for="phone3">Phone number</label>
				<input name="phone3" id="phone1" type="text">
			</div>
			<button class="js-ffa-add-trigger">Add</button>
			<button class="js-ffa-remove-trigger">Remove</button>
		`);
		return el;
	};

	function buildStringTemplate() {
		return `
			<div class="js-ffa-item">
				<div class="field">
					<label for="phone3">Phone number</label>
					<input name="phone3" id="phone1" type="text">
				</div>
				<button class="js-ffa-add-trigger">Add</button>
				<button class="js-ffa-remove-trigger">Remove</button>
			</div>
		`;
	}

	initExamples();

};

export default demo();