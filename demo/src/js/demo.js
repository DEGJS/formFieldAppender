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

	initExamples();

};

export default demo();